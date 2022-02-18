import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Grupo extends BaseSchema {
  protected tableName = 'grupos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 20)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
