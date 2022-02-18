import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Grupo } from 'App/Models'
import GrupoValidator from 'App/Validators/GrupoValidator'

export default class GruposController {
  public async index({}: HttpContextContract) {
    const grupos = await Grupo.query()
    return grupos
  }

  public async store({ request }: HttpContextContract) {
    const dados = await request.validate(GrupoValidator)
    const grupo = await Grupo.create(dados)
    await grupo.save()
    return grupo
  }

  public async show({ params }: HttpContextContract) {
    const grupo = await Grupo.findOrFail(params.id)
    return grupo
  }

  public async update({ request, params }: HttpContextContract) {
    const dados = await request.validate(GrupoValidator)
    const grupo = await Grupo.findOrFail(params.id)
    grupo.merge(dados)
    await grupo.save()
    return grupo
  }

  public async destroy({ params }: HttpContextContract) {
    const grupo = await Grupo.findOrFail(params.id)
    await grupo.delete()
  }
}
