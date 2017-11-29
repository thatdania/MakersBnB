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

  $(function(){
    var $select = $(".selectCapacity");
    for (i=1;i<=16;i++){
      $select.append($('<option></option>').val(i).html(i))
    }
  });

  function eachRental(element, index) {
    var container = index
    $('#rentals').append("<div id="+container+" class='individual' style='margin-top: 20;'></div>");
    $("#"+container).append("<div id = 'whatever' class='name'><a href=\"#\">" + element.name + "</a></div>")
    $("#"+container).append("<div class='location'><b href=\"#\">" + element.location + "</b></div>")
    $("#"+container).append("<div class='price'><c href=\"#\">" + element.price + "</c></div>")
    $("#"+container).append("<div class='capacity'><d href=\"#\">" + element.capacity + "</d></div>")
    $("#"+container).append("<form class='rentalButton' action='/rental/save' method='post'><e href=\"#\"><button id='more-info"+element.id+"' type='submit' name='id' value="+element.id+" class='rental_id'>More Info</button></e></form>")
  };



  $("#selectCapacity").change(function() {
    search();
  });

  var searchCity = $('#citySearch').keyup(function() {
    search();
  });

  function search() {
    var selectCapacity = $("#selectCapacity").val()
    var input, filter, rentals, rentalName, rentalCity, rentalPrice, rentalCapacity
    input = document.getElementById("citySearch");
    filter = input.value.toUpperCase();
    rentals = document.getElementById("rentals");
    rentalName = rentals.getElementsByClassName("name");
    rentalCity = rentals.getElementsByClassName("location");
    rentalPrice = rentals.getElementsByClassName("price");
    rentalCapacity = rentals.getElementsByClassName("capacity");
    rentalButton = rentals.getElementsByClassName("rentalButton");

    for (i = 0; i < rentalCity.length; i++) {
      a = rentalName[i].getElementsByTagName("a")[0];
      b = rentalCity[i].getElementsByTagName("b")[0];
      c = rentalPrice[i].getElementsByTagName("c")[0];
      d = rentalCapacity[i].getElementsByTagName("d")[0];
      e = rentalButton[i].getElementsByTagName("e")[0];

      if (b.innerHTML.toUpperCase().indexOf(filter) > -1 && d.innerHTML >= selectCapacity) {
        rentalName[i].style.display = "";
        rentalCity[i].style.display = "";
        rentalPrice[i].style.display = "";
        rentalCapacity[i].style.display = "";
        rentalButton[i].style.display = "";

      } else {
        rentalName[i].style.display = "none";
        rentalCity[i].style.display = "none";
        rentalPrice[i].style.display = "none";
        rentalCapacity[i].style.display = "none";
        rentalButton[i].style.display = "none";
      }
    }
  }
});
