alert("This site contains cookies , press OK to continue")

function showPrompt() {
    var userInput = prompt("Enter your name:");
    
    // Do something with the user input
    console.log("User input:", userInput);
  }

  console.log("This is date and time tutorial");
  let now = new Date();
  console.log(now);

  let dt = new Date(1000);
  console.log(dt);

  let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
  console.log(newDate);

  let yr = newDate.getFullYear();
  console.log("The year is ", yr);

  let dat = newDate.getDate();
  console.log("The date is ", dat);

  let month = newDate.getMonth();
  console.log("The month is ", month);

  let hours = newDate.getHours();
  console.log("The hours is ", hours);

  newDate.setDate(8);
  newDate.setMinutes(29);
  console.log(newDate)
  setInterval(updateTime, 1000);

  function updateTime() {
      time.innerHTML = new Date();
  }