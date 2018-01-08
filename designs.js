// Select color input
// Select size input

var mouseDown = false;

// draws the grid after user submits height and width
function makeGrid() {
  var rows = document.getElementById('input_height').value; //the height value
  var columns = document.getElementById('input_width').value; //the width value
  $('#pixel_canvas').empty() //clears the grid if the user enters new values

  //draws the grid based on user input
  for (var row = 0; row < rows; row++){
    $('#pixel_canvas').append('<tr class="row"></tr>'); //adds new row
    for (var column = 0; column < columns; column++){
      var rowElement = $('.row').last();
      $(rowElement).append('<td class="cell"></td>'); //adds new cells
    }
  }
}


$('#sizePicker').submit(function(ev){
  ev.preventDefault(); //prevents the submit button from submitting data
  makeGrid();
});

$(document).mousedown(function(){
  mouseDown = true;
}).mouseup(function(){
  mouseDown = false;
});

$('#pixel_canvas').on('mouseout', 'td', function(){
  if(mouseDown){
    var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
  }
});
$('#pixel_canvas').on('click', 'td', function(){
  var color = document.getElementById('colorPicker').value;
  $(this).css('background-color', color);
});
