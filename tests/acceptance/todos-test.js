import { test } from 'qunit';
import moduleForAcceptance from 'ember-todo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos');

test('visiting /todos', function(assert) {
  visit('/todos');

  andThen(function() {
    assert.equal(currentURL(), '/todos');
  });
});
