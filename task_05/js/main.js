

var numOneEl, numTwoEl, operationSignEl, resultEl;

function exercises() {
  // Write here exercise code from http://eloquentjavascript.net/ .
  // Chapters 2, 3, and 4.
  //--------------------------------------------------------------
  // * Looping a triangle *
  var symbols='';
  for (var number = 0; number <7; number += 1)
        console.log(symbols+='#');
  //--------------------------------------------------------------
  // Flattening
  var arrays = [[1, 2, 8], [4, 5], [6]];
  // Your code here.
  function Flattening(arrays){
     return arrays.reduce(function(previousValue,currentItem){
                    return previousValue.concat(currentItem);  
                });
   }
  console.log(Flattening(arrays));
  // → [1, 2, 3, 4, 5, 6]
  
}
exercises();

