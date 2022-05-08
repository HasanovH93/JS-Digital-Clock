function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
  mo = now.getMonth(),
  dnum = now.getDate(),
  yr = now.getFullYear(),
  hou = now.getHours(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  pe = "AM";

  if(hou == 0) {
    hou = 12
  }
  if(hou > 12) {
    hou = hou - 12
    pe = "PM"
  }
  dnum = (dnum < 10) ? "0" + dnum : dnum
  hou = (hou < 10) ? "0" + hou : hou;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  
  var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Juny",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  ];
  var week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ];
  
  var ids = [
  "dayname",
  "month",
  "daynum",
  "year",
  "hour",
  "minute",
  "seconds",
  "period",
  ];
  var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
  for(var i = 0 ; i < ids.length ; i++) 
  
  
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  
  
  
  }
  function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
  }
  