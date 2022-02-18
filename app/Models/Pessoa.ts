import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne
} from '@ioc:Adonis/Lucid/Orm'
import { Grupo, PessoaFisica, PessoaJuridica, Telefone } from 'App/Models'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public grupoId: number

  @column()
  public nome: string

  @column()
  public tipo: string

  @belongsTo(() => Grupo)
  public grupo: BelongsTo<typeof Grupo>

  @hasOne(() => PessoaFisica)
  public pessoaFisica: HasOne<typeof PessoaFisica>

  @hasOne(() => PessoaJuridica)
  public pessoaJuridica: HasOne<typeof PessoaJuridica>

  @hasMany(() => Telefone)
  public telefone: HasMany<typeof Telefone>
}
