

Template.results.helpers({
  air: function () {

    var airport = Session.setDefault('airport', 'clt');
    var airport = Session.get('airport');

    Meteor.call('airportData', airport, function (error, results) {
      
      //console.log(results.content);
      //console.log(results.statusCode);

      Session.set('airportResults', JSON.parse(results.content));
    });

    return (Session.get('airportResults'));
  }

});

Template.select.events({
  'change .airports' : function (evt, tmpl) {
    Session.set('airport', tmpl.find('.airports').value);
  }
});

