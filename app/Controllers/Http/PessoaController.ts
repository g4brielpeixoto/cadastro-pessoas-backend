import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Pessoa, PessoaFisica, PessoaJuridica } from 'App/Models'
import PessoaValidator from 'App/Validators/PessoaValidator'
import PessoaUpdateValidator from 'App/Validators/PessoaUpdateValidator'

export default class PessoaFisicasController {
  public async index({}: HttpContextContract) {
    const pessoas = await Pessoa.query()
      .where(() => {})
      .preload('grupo')
      .preload('pessoaFisica')
      .preload('pessoaJuridica')
      .preload('telefone')

    return pessoas
  }

  public async show({ params }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.load('grupo')
    await pessoa.load('pessoaFisica')
    await pessoa.load('pessoaJuridica')
    await pessoa.load('telefone')
    return pessoa
  }

  public async store({ request, response }: HttpContextContract) {
    const { cpf, grupoId, identidade, nome, tipo, cnpj, inscricaoEstadual, telefones } =
      await request.validate(PessoaValidator)

    const pessoa = await Pessoa.create({ nome, tipo, grupoId })
    await pessoa.related('grupo').query().where('id', grupoId)
    telefones.forEach(async (telefone) => {
      await pessoa.related('telefone').create({ telefone })
    })
    if (tipo === 'F' || tipo === 'f') {
      if (!cpf || !identidade) return response.badRequest({ message: 'Dados incompletos' })
      const pessoaFisica = await pessoa.related('pessoaFisica').create({ cpf, identidade })
      await pessoa.save()
      await pessoaFisica.save()
      await pessoa.load('pessoaFisica')
      return pessoa
    } else if (tipo === 'J' || tipo === 'f') {
      if (!cnpj || !inscricaoEstadual) return response.badRequest({ message: 'Dados incompletos' })
      const pessoaFisica = await pessoa
        .related('pessoaJuridica')
        .create({ cnpj, inscricaoEstadual })
      await pessoa.save()
      await pessoaFisica.save()
      await pessoa.load('pessoaJuridica')
      return pessoa
    } else response.badRequest({ message: 'Tipo de pessoa não aceito' })
  }

  public async update({ request, params }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.id)
    const { cpf, grupoId, identidade, nome, cnpj, inscricaoEstadual } = await request.validate(
      PessoaUpdateValidator
    )

    if (nome) pessoa.nome = nome
    if (grupoId) pessoa.grupoId = grupoId
    await pessoa.save()

    if (pessoa.tipo === 'F' || pessoa.tipo === 'f') {
      const pessoaFisica = await PessoaFisica.query().where('pessoaId', pessoa.id).first()
      if (pessoaFisica) {
        pessoaFisica.merge({ identidade, cpf })
        await pessoaFisica.save()
      }
    }

    if (pessoa.tipo === 'J' || pessoa.tipo === 'j') {
      const pessoaJuridica = await PessoaJuridica.findByOrFail('pessoaId', pessoa.id)
      if (pessoaJuridica) {
        pessoaJuridica.merge({ cnpj, inscricaoEstadual })
        await pessoaJuridica.save()
      }
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.delete()
  }
}
