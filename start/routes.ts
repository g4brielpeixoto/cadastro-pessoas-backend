import Route from '@ioc:Adonis/Core/Route'

//CRUD Grupo
Route.get('/grupo', 'GrupoController.index')
Route.post('grupo', 'GrupoController.store')
Route.get('/grupo/:id', 'GrupoController.show')
Route.put('/grupo/:id', 'GrupoController.update')
Route.delete('/grupo/:id', 'GrupoController.destroy')

//CRUD Pessoa
Route.post('/pessoa', 'PessoaController.store')
Route.put('/pessoa/:id', 'PessoaController.update')
Route.delete('/pessoa/:id', 'PessoaController.destroy')
Route.get('/pessoa', 'PessoaController.index')
Route.get('/pessoa/:id', 'PessoaController.show')

//CRUD Telefone
Route.post('/telefone/:pessoaId', 'TelefoneController.store')
Route.put('/telefone/:pessoaId/:telefoneId', 'TelefoneController.update')
Route.put('/telefone/:pessoaId/', 'TelefoneController.update')
Route.delete('/telefone/:pessoaId/:telefoneId', 'TelefoneController.destroy')
