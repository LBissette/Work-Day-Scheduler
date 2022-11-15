// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var textarea = $('.description');
var timeBox = document.querySelector = $('.container-lg');
var timeBlock = document.querySelector = ('.time-block');
var hour = dayjs().hour
var events = [];


function colorChange() {
  $(timeBlock).each(function(){
    var timeSlot = parseInt($(this).attr('id').split('-')[1]);
    if (timeSlot = hour) {
      timeBlock.classList.add('present')
    } else if (timeSlot > hour) {
      timeBlock.classList.add('future')
    } else {
      timeBlock.classList.add('past')
    }
  })
}

colorChange()


  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  // $(document).ready($(function () {
  // saveBtnEl.addEventListener('click', function(event) {
    
  //   event.preventdefault();
  //   var eventText = eventInput.value.trim();

  //   if (eventText === '') {
  //     return;
  //   }

  // })}));