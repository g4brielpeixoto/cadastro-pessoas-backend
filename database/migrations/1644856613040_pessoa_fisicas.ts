import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PessoaFisica extends BaseSchema {
  protected tableName = 'pessoa_fisicas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('pessoa_id').unsigned().references('pessoas.id').onDelete('CASCADE')
      table.string('cpf', 15)
      table.string('identidade', 20)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
