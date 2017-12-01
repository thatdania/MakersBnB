$(document).ready(function() {

  rentalsGet()

  function rentalsGet() {
    var index = 1
    $.get('/rental/list', function(data){
      data.forEach(function(element) {
      eachRental(element, index)
      index++;
      });
   });
  }

  function eachRental(element, index) {
    var container = index
    $('#rentals').append("<div id="+container+" class='individual' style='margin-top: 20;'></div>");
    $("#"+container).append("<div class='image'> <f href=\"#\"> <img style='width:200px; height:120px;' src= "+ element['images']['source']['source']['url'] +"/></f></div>")
    $("#"+container).append("<div id = 'whatever' class='name'><a href=\"#\">" + element.name + "</a></div>")
    $("#"+container).append("<div class='location'><b href=\"#\">" + element.location + "</b></div>")
    $("#"+container).append("<div class='price'><c href=\"#\">" + element.price + "</c></div>")
    $("#"+container).append("<div class='capacity'><d href=\"#\">" + element.capacity + "</d></div>")
    $("#"+container).append("<form class='rentalButton' action='/rental/save' method='post'><e href=\"#\"><button id='more-info"+element.id+"' type='submit' name='id' value="+element.id+" class='rental_id'>More Info</button></e></form>")
  };
``
  $(function(){
    for (i=1;i<=9;i++){
      $("#selectCapacity").append($('<option></option>').val(i).html(i))
    }
  });

  $(function(){
    for (i=1000;i>=100;i-=100){
      $('#selectPrice').append($('<option></option>').val(i).html(i))
    }
  })

  $("#selectCapacity").change(function() {
    search();
  });

  var searchCity = $('#citySearch').keyup(function() {
    search();
  });

  $("#selectPrice").change(function(){
    search()
  });

  function search() {
    var selectCapacity = $("#selectCapacity").val()
    var selectPrice = $('#selectPrice').val()
    var input, filter, rentals, rentalName, rentalCity, rentalPrice, rentalCapacity, rentalButton, rentalImage
    input = document.getElementById("citySearch");
    filter = input.value.toUpperCase();
    rentals = document.getElementById("rentals");
    rentalName = rentals.getElementsByClassName("name");
    rentalCity = rentals.getElementsByClassName("location");
    rentalPrice = rentals.getElementsByClassName("price");
    rentalCapacity = rentals.getElementsByClassName("capacity");
    rentalButton = rentals.getElementsByClassName("rentalButton");
    rentalImage = rentals.getElementsByClassName("image");

    for (i = 0; i < rentalCity.length; i++) {
      a = rentalName[i].getElementsByTagName("a")[0];
      b = rentalCity[i].getElementsByTagName("b")[0];
      c = rentalPrice[i].getElementsByTagName("c")[0];
      d = rentalCapacity[i].getElementsByTagName("d")[0];
      e = rentalButton[i].getElementsByTagName("e")[0];
      f = rentalImage[i].getElementsByTagName("f")[0];

      if ((b.innerHTML.toUpperCase().indexOf(filter) > -1) && (d.innerHTML >= selectCapacity) && (c.innerHTML <= selectPrice)) {
        rentalName[i].style.display = "";
        rentalCity[i].style.display = "";
        rentalPrice[i].style.display = "";
        rentalCapacity[i].style.display = "";
        rentalButton[i].style.display = "";
        rentalImage[i].style.display = "";

      } else {
        rentalName[i].style.display = "none";
        rentalCity[i].style.display = "none";
        rentalPrice[i].style.display = "none";
        rentalCapacity[i].style.display = "none";
        rentalButton[i].style.display = "none";
        rentalImage[i].style.display = "none";
      }
    }
  }
});
