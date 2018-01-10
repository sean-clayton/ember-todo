export default function() {
  this.namespace = '/api';

  this.get('/todos', schema => schema.todos.all());
  this.post('/todos');
  this.get('/todos/:id');
  this.del('/todos/:id');
  this.patch('/todos/:id');
}
