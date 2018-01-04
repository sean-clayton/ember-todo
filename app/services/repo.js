import Service from '@ember/service';
import uuid from 'uuid/v4';

const storage = window.localStorage;

export default Service.extend({
  data: null,
  findAll() {
    return (
      this.get('data') ||
      this.set('data', JSON.parse(storage.getItem('todos') || '[]'))
    );
  },
  add(attrs) {
    const todo = { ...attrs, id: uuid() };
    this.get('data').pushObject(todo);
    this.persist();
    return todo;
  },
  delete(todo) {
    this.get('data').removeObject(todo);
    this.persist();
  },
  persist() {
    storage.setItem('todos', JSON.stringify(this.get('data')));
  }
});
