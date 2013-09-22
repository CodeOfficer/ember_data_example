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
    this.get('model').rollback();
  }
});
