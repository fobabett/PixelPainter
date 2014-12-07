$(document).ready(function () {
  $('body').addClass('clearfix');
  $('<div></div>', {
    id: 'color_grid',
    text: 'COLOR GRID HERE'
  }).appendTo('#controls');

  $('<button></button>', {
    id: 'erase',
     text: 'erase' 
  }).appendTo('#controls');

   $('<button></button>', {
    id: 'clear',
     text: 'button'
  }).appendTo('#controls');

   $('<div></div>', {
    id: 'pixel_grid',
    text: 'PIXEL GRID THING HERE'
   }).appendTo('#artboard');

  function pixelPainter(width, height) {
    
  }
});