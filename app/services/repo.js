import Service from '@ember/service';
import { set } from '@ember/object';
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
  complete({ id, completed }) {
    this.edit(id, { completed: !completed });
  },
  delete(todo) {
    this.get('todos').removeObject(todo);
    this.persist();
  },
  deleteAll() {
    this.get('todos').clear();
    this.persist();
  },
  edit(todoId, attrs) {
    const todo = this.get('todos').findBy('id', todoId);
    for (let prop in attrs) {
      set(todo, prop, attrs[prop]);
    }
    this.persist();
  },
  persist() {
    storage.setItem('todos', JSON.stringify(this.get('todos')));
  }
});
