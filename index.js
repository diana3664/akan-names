let getDayBirth, getMonthBirth, getYearBirth, gender;

function getInput() {
 getDayBirth = parseInt(document.getElementById("day-of-birth").value);
 getMonthBirth = parseInt(document.getElementById("month-of-birth").value);
 getYearBirth = document.getElementById("year-of-birth").value
let male = document.getElementById("male-gender").value
let Female = document.getElementById("female-gender").value


formular =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
let CC, MM, DD, YY;

  YY = parseInt(getYearBirth.slice(0,2));
  CC =parseInt(getYearBirth.slice(2,4));
  console.log('The year of birth:${getyearBirth}')
  MM= getMonthBirth;
  DD =getDayBirth;
}
function calculate() {
  let Man = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let Woman = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let day0fWeekArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7);
  
  //  delcare gender
  
}


