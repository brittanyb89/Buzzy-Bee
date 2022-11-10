// Displays the current date in he header of the page
let currentDayEl = document.getElementById("currentDay")

currentDayEl.textContent = dayjs().format('dddd, MMMM DD');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  // Used day.js to get the current hour in 24-hour time
  let currentHour = dayjs().hour();
  console.log(currentHour)

  // Compared the id to the current hour
  for ( let i = 0; i < currentHour.length; i++) {
    currentHour[i].removeClass("past present future");

  // Used ID attribute to each time-block to conditionally add or remove the past, present, and future classes 
    if ( currentDayEl > currentHour[i].data(".hour")) {
      currentHour[i].addClass(".past");
    } else if ( currentDayEl === currentHour[i].attr("data-hour")) {
      currentHour[i].addClass(".present");
    } else {
      currentHour[i].addClass(".future");
    }
  };
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
