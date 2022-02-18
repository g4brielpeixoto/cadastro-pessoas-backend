import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PessoaJuridicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    tipo: schema.string({ trim: true }),
    grupoId: schema.number(),
    cpf: schema.string.optional({ trim: true }),
    identidade: schema.string.optional({ trim: true }),
    cnpj: schema.string.optional({ trim: true }),
    inscricaoEstadual: schema.string.optional({ trim: true }),
    telefones: schema.array().members(schema.string())
  })

  public messages = {}
}
