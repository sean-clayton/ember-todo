import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  repo: service(),
  addTodo({ title }) {
    this.get('repo').add({
      title
    });
  },
  deleteTodo(todo) {
    this.get('repo').delete(todo);
  },
  actions: {
    handleTodoSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const title = form.todoTitle.value;
      this.addTodo({ title });
      form.reset();
    },
    handleTodoDelete(todo) {
      this.deleteTodo(todo);
    }
  }
});
