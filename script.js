$(document).ready(function(){
  $('#place-getter').submit(function(event){
    event.preventDefault(); // Stop page from refreshing

    // Get the input
    var tag = $('input[name="places"]').val();
    var near= $('input[name="city"]').val();

    // Call api with items
    $.getJSON('https://api.foursquare.com/v2/venues/search', {
      client_id: '5U3LA2OTGUW5P0GTXVKFYGLZQ1WTWURDIF2RTCUJX5K1AS4A',
      client_secret: 'SOJYCO3CWP0I1M0NHXVUC1SWZROMQYHUGHBEA0I43CFLOX5P',
      v: 20130815,
      near: near,
      query: tag
    })
    .done(function(data){
      $("#places").text("");
      for (var i = 0; i <data.response.venues.length; i++){
      console.log(data);
      $('#places').append("<p class='list'>" + data.response.venues[i].name + "<br>" + data.response.venues[i].location.address + "</p>");
        }
    });

   
  });
});


 