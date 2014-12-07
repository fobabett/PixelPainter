$(document).ready(function () {
  function PixelPainter(width, height) {
    $('body').addClass('clearfix');

    $('<div></div>', {
      id: 'color_picker'
    }).appendTo('#controls');
    // GRID FOR COLOR PICKER
    for (var j = 0; j < 10; j++) {
      for(var i=0; i<6; i++) {
        $('<div></div>', {
          class: 'cells'
        }).appendTo('#color_picker');
      }
    };

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

    // GRID FOR ARTBOARD
    for (var k = 0; k < height; k++) {
      for(var l=0; l<width; l++) {
        $('<div></div>', {
          class: 'grid_cells'
        }).appendTo('#pixel_grid');
      }
    };

    // COLOR PICKER TO GRID
    $(".cells").click(function(){
      var $array = ['background-color'];
      var $this = $(this);
      $.each( $array , function(item, value){
        $('.grid_cells').on('click', function() {
          $(this).css(value, $this.css(value));
        });
      });
    });

    // ADD COLORS TO COLOR PICKER
    // todo

    // ERASE EVENT LISTENER
    $('button#erase').on('click', function() {
      console.log('erase clicked');
      $('.grid_cells').on('click', function() {
        $(this).css('backgroundColor', '#FFFFFF');
      });
    });

    // CLEAR EVENT LISTENER
    $('button#clear').on('click', function() {
      $('.grid_cells').css('backgroundColor', '#FFFFFF');
      console.log('clear clicked');
    });
  }// END PIXELPAINTE7
  var pixelPainter = PixelPainter(16,14);
}); // END