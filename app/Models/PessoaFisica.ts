import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Pessoa } from 'App/Models'

export default class PessoaFisica extends BaseModel {
  @column({ isPrimary: true })
  public pessoaId: number

  @column()
  public cpf: string

  @column()
  public identidade: string

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa>
}
