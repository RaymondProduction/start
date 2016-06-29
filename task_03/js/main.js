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
  // * FizzBuzz *
  
  // Write a program that uses console.log to print all the numbers
  // from 1 to 100, with two exceptions. For numbers divisible by 3,
  // print "Fizz" instead of the number, and for numbers divisible
  // by 5 (and not 3), print "Buzz" instead.


  for (var i=1; i<=100; i++) {
   if (i % 3 == 0 | i % 5 == 0) {
     if (i % 5 == 0) {
       console.log('Buzz');
     } else {
       console.log('Fizz');
     }
   } else {
     console.log(i);
   }
  }
  // When you have that working, modify your program to print
  // "FizzBuzz", for numbers that are divisible by both 3 and 5 
  // (and still print "Fizz" or "Buzz" for numbers divisible 
  // by only one of those).
  for (var i=1; i<=100; i++) {
    if (i % 3 == 0 & i % 5 == 0) {
      console.log('FizzBuzz');
    }  else {
      console.log(i);
    }
  }
  //--------------------------------------------------------------
  // * Chess board *
  var size = 8;
  var string ='';
   for (var row = 0; row<size; row++) {
     if (row % 2) {string = '';} else {string=' ';}
     for (var col = 1; col<size; col+=2) {
        string+='# ';
     }
     console.log(string);
     string='';
   }
   //--------------------------------------------------------------
   // * Minimum *
  function min(a,b){
    if (a>b) {a=b;}
    return a
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
  //--------------------------------------------------------------
  // * Recursion *
  function isEven(n){
   if (n==0) {return true;};
   if (n==1) {return false;};
   if (n>1)  {return isEven(n-2)};
   if (n<0) {return isEven(-n);};
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-4));
  // → ?? I fixed
  //--------------------------------------------------------------
  // * Bean counting *
  function countChar(string, char){
    var count=0;
    for (var i=0;i<string.length;i++){
      if (string.charAt(i)==char) {count++;}
    }
    return count;
  }
  function countBs(string){
    return countChar(string,'B');
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4
  //--------------------------------------------------------------  
  // * The sum of a range *
function range(a,b,step){
  var array = [];
  var i=1;
  array[0]=a;
  do {
    array[i]=a+=step
    i++;
  } while (a!=b)
  return array;
}

function sum(array){
  var s=0;
  for (var i=0; i<array.length; i++){
   s+=array[i];
  }
  return s;
}

console.log(range(1, 10,1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10,1)));
// → 55
//--------------------------------------------------------------
// * Reversing an array *
// Your code here.
function reverseArray(array){
  var size=array.length-1;
  var arrayReverse =[];
  for (var i=0;i<=size;i++) {
    arrayReverse[i]=array[size-i];
  }
  return arrayReverse;
}
function reverseArrayInPlace(array){
  var size=array.length-1;
  var tmp;
  console.log(size/2);
  for (i=0;i<size/2;i++){
    tmp=array[i];
    array[i]=array[size-i];
    array[size-i]=tmp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1] 

//--------------------------------------------------------------
// * A list *
//Clay Walker - Dreaming With My Eyes Open 
//Taylor Swift - Breathe
function arrayToList(array){
  var list= {value : array[array.length-1], rest: null};
  //var tmp;
  for (i=array.length-2;i>=0;i--){
     // tmp={}
     // tmp.value=array[i];
     // tmp.rest=list;
     // list=tmp;
    list = prepend(array[i], list);
  }
  return list;
}
function listToArray(list){
  array=[];
  array[0]=list.value;
  i=0;
  do {
     i++;
     list=list.rest;
     array[i]=list.value;
  } while (list.rest!=null);
  return array;
}
function prepend(value, rest){
  return  {value: value, rest: rest};
}
function nth(list,position){
  var value;
  var i=1;
  if (position==0) {return list.value;}
  do {
    list=list.rest;
    if (i==position) {
      value = list.value;
    }
    i++;
  } while (list.rest!=null & i<=position)
    return value;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
//--------------------------------------------------------------
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
