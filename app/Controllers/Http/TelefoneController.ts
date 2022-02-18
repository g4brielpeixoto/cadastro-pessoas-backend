import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Pessoa, Telefone } from 'App/Models'
import TelefoneValidator from 'App/Validators/TelefoneValidator'

export default class TelefonesController {
  public async store({ request, params }: HttpContextContract) {
    const data = await request.validate(TelefoneValidator)
    const pessoa = await Pessoa.findOrFail(params.pessoaId)
    const telefone = await pessoa.related('telefone').create(data)
    await pessoa.save()
    return telefone
  }

  public async show({ params }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.load('telefone')
    return pessoa.telefone
  }

  public async update({ request, params }: HttpContextContract) {
    const pessoa = await Pessoa.findOrFail(params.pessoaId)
    const id = params.telefoneId || null
    const { telefone } = await request.validate(TelefoneValidator)
    const ObjTelefone = await pessoa.related('telefone').updateOrCreate({ id }, { telefone })
    return ObjTelefone
  }

  public async destroy({ params, response }: HttpContextContract) {
    const telefone = await Telefone.findOrFail(params.telefoneId)
    if (`${telefone.pessoaId}` !== params.pessoaId)
      return response.notFound({ message: 'telefone não encontrado' })

    await telefone.delete()
  }
}
