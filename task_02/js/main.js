// Declaration of a global variable "blackBoxEl". From the
// start, it is undefined.
var blackBoxEl;

// We need to wait for all DOM elements to be loaded and ready.
// Once everything is good to go, we will run some
// JavaScript code in an anonymous function.
// See specification of jQuery "ready" event:
//     https://api.jquery.com/ready/
$(document).ready(function () {
  console.log('DOM is ready for manipulation!');

  // We use the selector "#black_box" to select the div
  // element with ID "black_box". We store a reference to
  // this element (object) in the global
  // variable "blackBoxEl".
  // See some information on CSS selectors at:
  //     https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors
  blackBoxEl = $('#black_box');

  // We use the selector "[name="right_btn"]" to select the
  // input element with name "right_btn". We attach a click
  // event to this element. When a click event will happen,
  // the function "moveRight" will be executed.
  $('[name="right_btn"]').click(moveRight);
});

function moveRight() {
  // We use the jQuery function "animate" on the object
  // "blackBoxEl". See function specification at:
  //     http://api.jquery.com/animate/
  blackBoxEl.animate({
    // "marginLeft" refers to the CSS property of an element
    // "margin-left". Please see specification of this property:
    //     https://developer.mozilla.org/en/docs/Web/CSS/margin-left
    marginLeft: '+=100px',
  }, 500);
}
