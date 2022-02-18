import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pessoa extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('grupo_id').unsigned().references('grupos.id')
      table.string('nome', 40)
      table.string('tipo', 1)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
