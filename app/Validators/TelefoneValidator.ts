import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TelefoneValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    telefone: schema.string({ trim: true })
  })

  public messages = {}
}
