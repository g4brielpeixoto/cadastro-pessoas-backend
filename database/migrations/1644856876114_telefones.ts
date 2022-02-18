import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Telefones extends BaseSchema {
  protected tableName = 'telefones'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pessoa_id').unsigned().references('pessoas.id').onDelete('CASCADE')
      table.string('telefone', 15)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
