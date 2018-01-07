// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
  var rows = document.getElementById('input_height').value; //the height value
  var columns = document.getElementById('input_width').value; //the width value
  $('#pixel_canvas').empty() //clears the grid if the user enters new values
//draws the grid based on user input
  for (var i = 0; i < rows; i++){
    $('#pixel_canvas').append('<tr class="row"></tr>');
    for (var j = 0; j < columns; j++){
      var rowElement = $('.row').last();
      $(rowElement).append('<th class="cell"></th>');
    }
  }

}

$('#sizePicker').submit(function(ev){
  ev.preventDefault();
  makeGrid();
});
