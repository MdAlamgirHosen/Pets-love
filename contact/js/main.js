$(document).ready(function(){
  $("#portfolio_filter_action").mixitup({
		effects: ['scale','rotateZ'],
		easing: 'windup'
	});
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	$('.fade').click(function () {
	  $(this).hide();
	});
	$('.fade').click(function () {
	  $(this).slideUp(1000);
	});
});
 

	$('.scrollup').click(function () {
	  $("html, body") .animate({
		scrollTop: 0
	  }, 1000);
	  return false;
	});	
var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
      });
      $('#geocoding_form').submit(function(e){
        e.preventDefault();
        GMaps.geocode({
          address: $('#address').val().trim(),
          callback: function(results, status){
            if(status=='OK'){
              var latlng = results[0].geometry.location;
              map.setCenter(latlng.lat(), latlng.lng());
              map.addMarker({
                lat: latlng.lat(),
                lng: latlng.lng()
              });
            }
          }
        });
      });
    });

	 $('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	