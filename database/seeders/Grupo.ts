import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Grupo } from 'App/Models'

export default class GrupoSeeder extends BaseSeeder {
  public async run() {
    await Grupo.createMany([
      {
        descricao: 'Grupo 1'
      },
      {
        descricao: 'Grupo 2'
      },
      {
        descricao: 'Grupo 3'
      },
      {
        descricao: 'Grupo 4'
      },
      {
        descricao: 'Grupo 5'
      }
    ])
  }
}
