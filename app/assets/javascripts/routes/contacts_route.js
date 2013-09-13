App.ContactsRoute = Ember.Route.extend({
  model: function() {
    // request all contacts from adapter
    this.store.find('contact');

    // filter contacts to exclude new ones
    return this.store.filter('contact', function(contact) {
      return !contact.get('isNew');
    });
  }
});
