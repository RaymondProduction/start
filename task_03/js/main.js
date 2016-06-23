var numOneEl, numTwoEl, operationSignEl, resultEl;

function exercises() {
  // Write here exercise code from http://eloquentjavascript.net/ .
  // Chapters 2, 3, and 4.

}

$(document).ready(function () {
  console.log('DOM is ready for manipulation!');

  exercises();

  numOneEl = $('[name="number_one"]');
  numTwoEl = $('[name="number_two"]');

  operationSignEl = $('#operation_sign');
  resultEl = $('#result');

  $('[name="add_btn"]').click(add);
  $('[name="sub_btn"]').click(sub);
  $('[name="mult_btn"]').click(mult);
  $('[name="div_btn"]').click(div);
});

function add() {
  var numOneText = numOneEl.val(),
    numTwoText = numTwoEl.val();

  // Look at documentation for function "parseFloat". It will help you
  // convert a string to a float number.
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

  console.log('number one = "' + numOneText + '".');
  console.log('number two = "' + numTwoText + '".');

  operationSignEl.html('+');
  resultEl.html('= ' + 5);
}

function sub() {

}

function mult() {

}

function div() {

}
