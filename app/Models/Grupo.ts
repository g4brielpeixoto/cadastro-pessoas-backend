import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { Pessoa } from 'App/Models'

export default class Grupo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @hasMany(() => Pessoa)
  public pessoa: HasMany<typeof Pessoa>
}
