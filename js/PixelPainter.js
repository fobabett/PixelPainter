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
   // COLOR PICKER EVENT LISTENER
   $('#color_picker').on('click', function() {
    console.log('color picker');
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