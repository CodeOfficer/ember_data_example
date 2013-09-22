App.ContactsNewController = Em.ObjectController.extend({

  actions: {
    addPhoneNumber: function() {
      this.get('model.phoneNumbers').createRecord();
    },

    removePhoneNumber: function(phoneNumber) {
      phoneNumber.deleteRecord();
    },

    cancel: function() {
      this.stopEditing();
      this.transitionToRoute('contacts.index');
    },

    save: function() {
      var self = this;
      var model = this.get('model');

      model.save().then(function() {
        self.transitionToRoute('contact', model);
      });
    }
  },

  startEditing: function() {
    this.set('model', this.store.createRecord('contact', {}));
  },

  stopEditing: function() {
    // rollback the local transaction if it hasn't already been cleared
    if (this.transaction) {
      this.transaction.rollback();
      this.transaction = null;
    }
  },

  transitionAfterSave: function() {
    // when creating new records, it's necessary to wait for the record to be assigned
    // an id before we can transition to its route (which depends on its id)
    if (this.get('model.id')) {
      this.transitionToRoute('contact', this.get('model'));
    }
});
