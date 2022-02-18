import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PessoaJuridicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    grupoId: schema.number.optional(),
    cnpj: schema.string.optional({ trim: true }),
    cpf: schema.string.optional({ trim: true }),
    identidade: schema.string.optional({ trim: true }),
    inscricaoEstadual: schema.string.optional({ trim: true })
  })

  public messages = {}
}
