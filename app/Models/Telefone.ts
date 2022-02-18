import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Pessoa } from 'App/Models'

export default class Telefone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pessoaId: number

  @column()
  public telefone: string

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa>
}
