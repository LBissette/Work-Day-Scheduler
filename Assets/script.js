// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var textarea = $('.description');
var events = [];

$(function () {


  // TODO: Add code to display the current date in the header of the page.
  function currentDay() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  }


  currentDay();
  setInterval(currentDay,1000);

});
