$(document).ready(function () {
  $('body').addClass('clearfix');
  $('<div></div>', {
    id: 'color_picker',
    text: 'COLOR GRID HERE'
  }).appendTo('#controls');

  $('<button></button>', {
    id: 'erase',
     text: 'erase' 
  }).appendTo('#controls');

   $('<button></button>', {
    id: 'clear',
     text: 'clear'
  }).appendTo('#controls');

   $('<div></div>', {
    id: 'pixel_grid',
    text: 'PIXEL GRID THING HERE'
   }).appendTo('#artboard');
   // COLOR PICKER TO GRID
    $("#color_picker").click(function(){
      var $array = ['background-color'];
      var $this = $(this);
      $.each( $array , function(item, value){
        $('#pixel_grid').on('click', function() {

          $("#pixel_grid").css(value, $this.css(value));
        });
      });
    });
   // ERASE EVENT LISTENER
   $('button#erase').on('click', function() {
    console.log('erase bro');
   });
   // CLEAR EVENT LISTENER
   $('button#clear').on('click', function() {
    console.log('clear bro');
   });

  function pixelPainter(width, height) {
    this.width = width;
    this.height = height;
  }
});