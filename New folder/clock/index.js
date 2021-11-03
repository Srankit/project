function showTime() {
  var date = new Date();
  var hour = date.getHours(); //0-23
  var minute = date.getMinutes(); //0-59
  var second = date.getSeconds(); //0-59
  var session = "AM";
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  hour = (hour<10)? "0" + hour: hour;
  minute = (minute<10)? "0" + minute: minute;
  second = (second<10)? "0" + second: second;
  
  var time = hour + ":" + minute + ":" + second + " " + session ;

  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setInterval(showTime, 1000);
}

showTime();
