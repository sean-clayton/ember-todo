import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('it renders', function(assert) {
  this.set('handleTodoToggleComplete', () => {});
  this.set('handleTodoDelete', () => {});

  this.render(
    hbs`{{todo-item handleTodoDelete=handleTodoDelete handleTodoToggleComplete=handleTodoToggleComplete}}`
  );

  assert.equal(this.$('.todo-item').length, 1);
});
