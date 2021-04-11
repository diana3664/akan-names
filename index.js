let getDayBirth, getMonthBirth, getYearBirth, gender;

function getInput() {
let getDayBirth = document.getElementById("day-of-birth").value
let getMonthBirth = document.getElementById("month-of-birth").value
let getYearBirth = document.getElementById("year-of-birth").value
let male = document.getElementById("male-gender").value
let Female = document.getElementById("female-gender").value
let day0fWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


formular =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
let CC, MM, DD, YY;

  YY = getYearBirth.slice(0,2);
  CC =getYearBirth.slice(2,4);
  MM= parseInt(getMonthBirth);
  DD = parseInt(getDayBirth);

  console.log(`${CC}`);
  console.log(`${YY}`);
  console.log(`${MM}`);
  console.log(`${DD}`);
}
function calculate() {
  dayOfWeek = formular;
  day0fWeek = Math.floor(day0fWeek);
  console.log(`${day0fWeek}`);
}


