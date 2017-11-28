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
    var container = "rental"+index
   $('#rentals').append("<div id="+container+" class='individual' style='margin-top: 20;'></div>");
   $("#"+container).append("<div id = 'whatever' class='name'><a href=\"#\">" + element.name + "</a></div>")
   $("#"+container).append("<div class='location'><b href=\"#\">" + element.location + "</b></div>")
   $("#"+container).append("<div class='price'><c href=\"#\">" + element.price + "</c></div>")
   $("#"+container).append("<div class='capacity'><d href=\"#\">" + element.capacity + "</d></div>")
  };
});
//
// $('#myDiv').html("<div id='mySecondDiv'></div>");
// $("#foo").append("<div>hello world</div>")












//   $('#new-rental').submit(function(event) {
//     event.preventDefault();
//     if ( $('#current-city').val() === '') {
//       var city = 'London'
//     } else {
//       var city = $('#current-city').val();
//     }
//     displayWeather(city);
//    });
//
// $.get()
//
//
//
//
//
//
//
//  var thermostat = new Thermostat();
//
//
// sessionGet();
//  update();
//
//
// function displayWeather(city) {
// var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city ;
// var token = '&APPID=39f7158b4fbdeec4940041d9e1480b55' ;
// var metric = '&units=metric';
// $.get(url + metric + token, function(data) {
//   $('#api').html(data.main.temp);
// });
// };
//
// function sessionSave() {
//   $.post('/save', { temperature: thermostat.temperature() });
// };
//
// function sessionGet() {
//   $.get('/update', function(temp){
//     if (temp.temperature === null) {
//     } else {
//         thermostat._temperature = Number(temp.temperature) ;
//     }
//       update();
//   });
// }
//
// $('#select-city').submit(function(event) {
//   event.preventDefault();
//   if ( $('#current-city').val() === '') {
//     var city = 'London'
//   } else {
//     var city = $('#current-city').val();
//   }
//   displayWeather(city);
//  });
//
//  $('#plus').on('click', function() {
//    thermostat.up();
//     update();
//  });
//  $('#minus').on('click', function() {
//    thermostat.down();
//     update();
//  });
//
//  $('#powersave').click(function() {
//    thermostat.modeSwitch();
//    $('#powersave').html(thermostat._powerSaving ? "PowerSave On" : "PowerSave Off");
//    if (thermostat._powerSaving) {
//     $(".saveon").css("background-color","#66D8D8");
//    }
//    else {
//     $(".saveon").css( "background-color","#959CA4");
//   };
//    thermostat.reset();
//     update();
// });
//
//  $('#Reset').click(function() {
//    thermostat.reset();
//    update();
//  });
//
//  function update() {
//    $('#number').html(thermostat.temperature() );
//   if(thermostat.energyUsage() === 'low-usage'){
//     $(".number").css("color","#2FD18A");
//     };
//   if(thermostat.energyUsage() === 'medium-usage'){
//       $(".number").css("color","#E3CE19");
//       };
//   if(thermostat.energyUsage() === 'high-usage'){
//       $(".number").css("color","#E94040");
//       };
//       sessionSave();
//   };
//
// });
