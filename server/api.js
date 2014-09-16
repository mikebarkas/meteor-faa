Meteor.methods({

  'airportData' : function(airport) {
    var url = 'http://services.faa.gov/airport/status/' + airport + '?format=json';
    return Meteor.http.call('GET', url);
  }
  
})