$(document).ready(function () {
  function PixelPainter(width, height) {
    $('body').addClass('clearfix');

    $('<div></div>', {
      id: 'color_picker'
    }).appendTo('#controls');

     $('<div></div>', {
      id: 'red_paint',
      class: 'paint'
    }).appendTo('#color_picker');
    $('<div></div>', {
      id: 'green_paint',
      class: 'paint'
    }).appendTo('#color_picker');
    $('<div></div>', {
      id: 'blue_paint',
      class: 'paint'
    }).appendTo('#color_picker'); 
    $('<div></div>', {
      id: 'yellow_paint',
      class: 'paint'
    }).appendTo('#color_picker'); 
    $('<div></div>', {
      id: 'orange_paint',
      class: 'paint'
    }).appendTo('#color_picker'); 
    $('<div></div>', {
      id: 'purple_paint',
      class: 'paint'
    }).appendTo('#color_picker'); 
    $('<div></div>', {
      id: 'black_paint',
      class: 'paint'
    }).appendTo('#color_picker'); 
    $('<div></div>', {
      id: 'paint-brush-container'
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
      id: 'pixel_grid'
    }).appendTo('#artboard');

    for (var k = 0; k < height; k++) {
      for(var l=0; l<width; l++) {
        $('<div></div>', {
          class: 'grid_cells row'
        }).appendTo('#pixel_grid');
      }
    };

    $(".paint").click(function(){
      var $array = ['background-color'];
      var $this = $(this);
      $.each( $array , function(item, value){
        $('.grid_cells').on('click', function() {
          $(this).css(value, $this.css(value));
        });
      });
    });

    $('button#erase').on('click', function() {
      console.log('erase clicked');
      $('.grid_cells').on('click', function() {
        $(this).css('backgroundColor', '#FFFFFF');
      });
    });

    $('button#clear').on('click', function() {
      $('.grid_cells').css('backgroundColor', '#FFFFFF');
      console.log('clear clicked');
    });
  }
  var pixelPainter = PixelPainter(100,10);
}); 