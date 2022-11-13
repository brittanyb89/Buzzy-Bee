// Used day.js to get the current hour in 24-hour time
let currentHour = dayjs().hour();
console.log(dayjs().hour())

$(function () {

let currentDayEl = $('#currentDay');
let timeEl = $(".time-block");

 // Displays the current date in he header of the page
 $('#currentDay').text(dayjs().format('dddd, MMMM DD'));
 console.log((dayjs().format('dddd, MMMM DD')))

//  Appended the date to current day div
currentDayEl.append(currentDay);

// Targeted the container
let containerEl = $('.container');
let dailyPlan = [];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  // Added code to apply past, present, or future class to each time block by comparing the id to the current hour. 
  function whenIsNow(hour) {
    let hourEl = (moment(parseInt(hour)));
    // Compared hour passed into function and set classes accordingly
    if (hourEl.isSame(currentHour)) {
      return 'present';
    } else if (hourEl.isBefore(currentHour)) {
      return 'past';
    } else (hourEl.isAfter(currentHour));{
      return 'future';
    }
  }

  // Used ID attribute to each time-block to conditionally add or remove the past, present, and future classes and looped time blocks
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentHour)
    if (blockHour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    }
    else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
  // Count from 9-17 and created each time block
  // for (let i = 9; i < 17; i++) {
  //   // Grabbed event from local storage
  //   let timeEl = localStorage.getItem(i);
  //   if(timeEl == null) {
  //     timeEl = '';
  //   }
 
  // }
   
    

  
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
