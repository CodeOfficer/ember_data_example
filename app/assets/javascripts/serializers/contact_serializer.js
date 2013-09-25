App.ContactSerializer = DS.ActiveModelSerializer.extend({

  attrs: {
    phoneNumbers: {embedded: 'always'}
  }

});
