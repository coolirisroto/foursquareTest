const foursquare = require('./apifoursquare');

foursquare.searchVenues('20.6838004,-88.5688719', 'chichen-itza').then(function(response) {
    const idvenue = response.minivenues[0].id;
    foursquare.getVenue(idvenue).then(function(response) {
        foursquare.getTips(response.venue.id).then(function(response) {
            console.log(response);
        }).catch(function(err){
            console.log(err);
        });
        foursquare.getPhotos(response.venue.id).then(function(response) {
            //console.log(response);
        }).catch(function(err){
            console.log(err);
        });        
    }).catch(function(err){
        console.log(err);
    });    
}).catch(function(err){
    console.log(err);
});


