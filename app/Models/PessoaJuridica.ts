import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Pessoa } from 'App/Models'

export default class PessoaJuridica extends BaseModel {
  @column({ isPrimary: true })
  public pessoaId: number

  @column()
  public cnpj: string

  @column()
  public inscricaoEstadual: string

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa>
}
