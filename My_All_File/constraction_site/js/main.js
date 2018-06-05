$(document).ready(function(){
  $("#portfolio_filter_action").mixitup({
		effects: ['scale','rotateZ'],
		easing: 'windup'
	});	
	$("a[rel^='prettyPhoto']").prettyPhoto();
}); 