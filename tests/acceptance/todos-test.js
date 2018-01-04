import { test, skip } from 'qunit';
import moduleForAcceptance from 'ember-todo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos');

test('should show todos on the homepage', assert => {
  visit('/');
  andThen(() => {
    assert.equal(
      currentURL(),
      '/rentals',
      'should redirect to todos automatically'
    );
  });
});

skip('should show count of total items', () => {});

skip('should be able to add an item to the todo list', () => {});

skip('should be able to delete an item from the list', () => {});

skip('should be able to edit an item from the list', () => {});

skip('should be able to search/filter for items in todo list', () => {});

// Maybe later
skip('should be able to sort by date', () => {});
