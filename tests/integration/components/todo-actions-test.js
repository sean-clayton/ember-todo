import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-actions', 'Integration | Component | todo actions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('handleTodoSubmit', () => {});
  this.set('deleteAllTodos', () => {});

  this.render(
    hbs`{{todo-actions handleTodoSubmit=handleTodoSubmit deleteAllTodos=deleteAllTodos}}`
  );

  assert.equal(this.$('.todo-actions').length, 1);
});
