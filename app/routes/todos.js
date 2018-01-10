import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('todo');
  },
  actions: {
    changeTodoTitle(id, title) {
      this.get('store')
        .findRecord('todo', id)
        .then(todo => {
          todo.set('title', title);
          todo.save();
        });
    },
    deleteTodo(id) {
      this.get('store')
        .findRecord('todo', id)
        .then(todo => {
          todo.destroyRecord();
        });
    },
    addTodo(title) {
      this.get('store')
        .createRecord('todo', {
          title
        })
        .save();
    },
    toggleCompleted(id) {
      this.get('store')
        .findRecord('todo', id)
        .then(todo => {
          todo.toggleProperty('completed');
          todo.save();
        });
    },
    deleteTodos() {
      this.get('store')
        .findAll('todo')
        .invoke('unloadRecord');
    }
  }
});
