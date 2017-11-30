$(document).ready(function(){

  $.get('/rental/current_view', function(rental){
    // $('#rental-overview').append("<div class='name'><img style='width:200px; height:120px;' src=" + image[0]['source']['source']['url'] +"/></div>")

    $('#rental-overview').append("<div class='image'> <f href=\"#\"> <img style='width:200px; height:120px;' src= "+ rental[0]['images']['source']['source']['url'] +"/></f></div>")


    // $('#rental-overview').append("<div class='name'>"+ rental[0]['image']['source']['source']['url'] +"</div>")
    $('#rental-overview').append("<div class='name'>"+ rental[0]['user']['name'] +"</div>")
    $("#rental-overview").append("<div class='location'>" + rental[0]['user']['location'] + "</div>")
    $("#rental-overview").append("<div class='price'>" + rental[0]['user']['price'] + "</div>")
    $("#rental-overview").append("<div class='capacity'>" + rental[0]['user']['capacity'] + "</div>")
    $("#rental-overview").append("<div class='available'>" + rental[0]['user']['available'] + "</div>")


    $("#rental-overview").append("<form class='bookButton' action='' method=''><button id='more-info' type='submit' name='' value=''>Book</button></form>")
  });
});
