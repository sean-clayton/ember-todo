import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },
  completed: false,
  createdAt() {
    return faker.date.past();
  }
});
