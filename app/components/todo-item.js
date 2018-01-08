import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  editable: false,
  notEditable: computed('editable', function() {
    return !this.get('editable');
  }),
  actions: {
    toggleTodoEditable() {
      this.set('editable', !this.get('editable'));
    },
    updateTodoTitle(e) {
      e.preventDefault();
      const { id } = this.get('todo');
      const newTitle = e.target.newTitle.value;
      this.get('updateTodoTitle')(id, newTitle);
      this.set('editable', false);
    }
  }
});
