import { v4 as uuid } from 'ember-uuid';

const MILLISECONDS_PER_DAY = 86400000;
const daysInMilliseconds = numDays => MILLISECONDS_PER_DAY * numDays;

const todos = [
  {
    id: uuid(),
    type: 'todos',
    attributes: {
      title: 'Take out 🗑',
      'created-at': Date.now()
    }
  },
  {
    id: uuid(),
    type: 'todos',
    attributes: {
      title: '💩',
      'created-at': Date.now() - daysInMilliseconds(1)
    }
  },
  {
    id: uuid(),
    type: 'todos',
    attributes: {
      title: 'Eat Breakfast',
      'created-at': Date.now() - daysInMilliseconds(2)
    }
  }
];

export default function() {
  this.namespace = '/api';

  this.get('/todos', () => ({
    data: todos
  }));
}
