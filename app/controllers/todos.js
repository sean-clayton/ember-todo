import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    handleTodoSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const title = form.todoTitle.value;
      this.send('addTodo', title);
      form.reset();
    },
    handleTodoDelete(todo) {
      this.send('deleteTodo', todo.id);
    },
    handleTodoToggleComplete(todo) {
      this.send('toggleCompleted', todo.id);
    },
    updateTodoTitle(id, newTitle) {
      this.send('changeTodoTitle', id, newTitle);
    },
    deleteAllTodos() {
      this.send('deleteTodos');
    }
  }
});
