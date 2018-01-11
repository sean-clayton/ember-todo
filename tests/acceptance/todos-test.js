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

test('should be able to add an item to the todo list', assert => {
  server.createList('todo', 10);
  visit('/');
  fillIn('#todo-form input[name="todoTitle"]', 'TEST TODO PLS IGNORE');
  click('#todo-form button');
  andThen(function() {
    assert.equal(find('.todo-item').length, 11);
    assert.equal(
      find('.todo-list li:nth-child(11) span').text(),
      'TEST TODO PLS IGNORE'
    );
  });
});

test('should be able to delete an item from the list', assert => {
  server.createList('todo', 10);
  visit('/');
  click('.todo-list li:nth-child(1) .delete-button');
  andThen(function() {
    assert.equal(find('.todo-item').length, 9);
  });
});

test('should be able to edit an item from the list', assert => {
  server.createList('todo', 10);
  visit('/');
  click('.todo-list li:nth-child(1) .edit-button');
  fillIn(
    '.todo-list li:nth-child(1) form input[name="newTitle"]',
    'TEST TITLE PLS IGNORE'
  );
  click('.todo-list li:nth-child(1) form .save-button');
  andThen(function() {
    assert.equal(
      find('.todo-list li:nth-child(1) span').text(),
      'TEST TITLE PLS IGNORE'
    );
  });
});
