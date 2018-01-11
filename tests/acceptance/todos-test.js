import { test, skip } from 'qunit';
import moduleForAcceptance from 'ember-todo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos');

test('should show count of total items', assert => {
  server.createList('todo', 10);
  visit('/');
  andThen(function() {
    assert.equal(find('h4').text(), '10 Todos');
  });
});

skip('should be able to add an item to the todo list', () => {});

skip('should be able to delete an item from the list', () => {});

skip('should be able to edit an item from the list', () => {});

skip('should be able to search/filter for items in todo list', () => {});

// Maybe later
skip('should be able to sort by date', () => {});
