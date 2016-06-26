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
  
  $("button").click(function(event) {
        numOne=parseFloat(numOneEl.val());
        numTwo=parseFloat(numTwoEl.val());
        nameButton=event.target.name;
        // I can get the name of the button so
        //nameButton=jQuery(this).attr("name");
        if (nameButton=="add_btn"){ 
          numResult=numOne+numTwo;
          operationSignEl.html('+');
        }else if (nameButton=="sub_btn"){
          numResult=numOne-numTwo;
          operationSignEl.html('-');
        }else if (nameButton=="mult_btn"){
          numResult=numOne*numTwo;
          operationSignEl.html('x');
        }else if (nameButton=="div_btn"){
          numResult=numOne/numTwo;
          operationSignEl.html(':');
        }
        resultEl.html('='+numResult);    
    });
  
});
