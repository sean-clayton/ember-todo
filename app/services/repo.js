import Service from '@ember/service';
import { v4 as uuid } from 'ember-uuid';

const storage = window.localStorage;

export default Service.extend({
  todos: null,
  init() {
    this._super(...arguments);
    this.set('todos', JSON.parse(storage.getItem('todos') || '[]'));
  },
  findAll() {
    return this.get('todos');
  },
  add({ title }) {
    const todo = Object.assign({}, { title, id: uuid() });
    this.get('todos').pushObject(todo);
    this.persist();
    return todo;
  },
  delete(todo) {
    this.get('todos').removeObject(todo);
    this.persist();
  },
  deleteAll() {
    this.get('todos').clear();
    this.persist();
  },
  edit(todoId, { title }) {
    const id = this.get('todos').findIndex(todoId);
    this.todos[id] = Object.assign({}, this.todos[id], { title });
  },
  persist() {
    storage.setItem('todos', JSON.stringify(this.get('todos')));
  }
});
