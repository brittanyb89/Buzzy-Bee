// Used day.js to get the current hour in 24-hour time
let currentHour = dayjs().hour();

$(function () {

let currentDayEl = $('#currentDay');
let timeEl = $(".time-block");

 // Displays the current date in he header of the page
 $('#currentDay').text(dayjs().format('dddd, MMMM DD'));

//  Appended the date to current day div
currentDayEl.append(currentDay);

// Targeted the container
let containerEl = $('.container');
let dailyPlan = [];
  
   // DOM traversal used to get the "hourX" id of the time-block containing the button that was clicked
  // Add a listener for click events on the save button
  $('.saveBtn').on('click', function() {
    
    let text = $(this).siblings('.description').val(); // 'this' is used to grab nearby values and sibling html used to take change from html description attribute
    let time = $(this).parent().attr('id'); // took change to parent html id attribute

    // Use the id in the containing time-block as a key to save the user input in local storage.
    localStorage.setItem(time,text);
  });
 
  // Added code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  $('#hour18 .description').val(localStorage.getItem('hour18'));
  
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
  };

  
  // Used ID attribute to each time-block to conditionally add or remove the past, present, and future classes and looped time blocks
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("hour")[1]);
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
    };
  });
});
