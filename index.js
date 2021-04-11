var getDayBirth = document.getElementById("day-of-birth").value
var getMonthBirth = document.getElementById("month-of-birth").value
var getYearBirth = document.getElementById("year-of-birth").value
var male = document.getElementById("male-gender").value
var Female = document.getElementById("female-gender").value


formular =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
let raw_year, CC, MM, DD, YY, day_of_week;

function getInput() {
  YY = getYearBirth.slice(0,2);
  CC =getYearBirth.slice(2,4);
  MM= parseInt(getMonthBirth);
  DD = parseInt(getDayBirth);

  console.log(`${CC}`);
  console.log(`${YY}`);
  console.log(`${MM}`);
  console.log(`${DD}`);
}


