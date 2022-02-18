import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PessoaJuridicas extends BaseSchema {
  protected tableName = 'pessoa_juridicas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('pessoa_id').unsigned().references('pessoas.id').onDelete('CASCADE')
      table.string('cnpj', 19)
      table.string('inscricao_estadual', 20)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
