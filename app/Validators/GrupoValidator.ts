import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GrupoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    descricao: schema.string({ trim: true })
  })

  public messages = {}
}
