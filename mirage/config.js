export default function() {
  this.namespace = '/api';

  this.get('/todos', schema => schema.todos.all());
}
