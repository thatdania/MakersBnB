$(document).ready(function(){

  $.get('/rental/current_view', function(rental){
    $('#rental-overview').append("<div class='name'>"+ rental.name +"</div>")
    $("#rental-overview").append("<div class='location'>" + rental.location + "</div>")
    $("#rental-overview").append("<div class='price'>" + rental.price + "</div>")
    $("#rental-overview").append("<div class='capacity'>" + rental.capacity + "</div>")
    $("#rental-overview").append("<form class='bookButton' action='' method=''><button id='more-info' type='submit' name='' value=''>Book</button></form>")
  });
});
