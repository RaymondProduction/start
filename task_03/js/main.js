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
  
  //$(document).click(test);
  
  $('[name="add_btn"]').click(add);
  $('[name="sub_btn"]').click(sub);
  $('[name="mult_btn"]').click(mult);
  $('[name="div_btn"]').click(div);
});

function test(){
  numOne=parseFloat(numOneEl.val());
  numTwo=parseFloat(numTwoEl.val());
}

function add() {
    var numOne = parseFloat(numOneEl.val()),
        numTwo = parseFloat(numTwoEl.val());    

  // Look at documentation for function "parseFloat". It will help you
  // convert a string to a float number.
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

  console.log('number one = "' + numOne + '".');
  console.log('number two = "' + numTwo + '".');

  operationSignEl.html('+');
  resultEl.html('= ' +  (numOne+numTwo));
}

function sub() {
    var numOne = parseFloat(numOneEl.val()),
         numTwo = parseFloat(numTwoEl.val()); 

  operationSignEl.html('-');
  resultEl.html('= ' +  (numOne-numTwo));
}

function mult() {
 var numOne = parseFloat(numOneEl.val()),
        numTwo = parseFloat(numTwoEl.val()); 

  operationSignEl.html('x');
  resultEl.html('= ' +  (numOne*numTwo));
}

function div() {
 var numOne = parseFloat(numOneEl.val()),
      numTwo = parseFloat(numTwoEl.val()); 

  operationSignEl.html(':');
  resultEl.html('= ' +  (numOne/numTwo));

}
