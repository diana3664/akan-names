let getDayBirth, getMonthBirth, getYearBirth, gender;

function getInput() {
 getDayBirth = parseInt(document.getElementById("day-of-birth").value);
 getMonthBirth = parseInt(document.getElementById("month-of-birth").value);
 getYearBirth = document.getElementById("year-of-birth").value

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
 let radio_buttons = document.getElementById("gender")
 if (radio_buttons[0].checked == true) {
   gender = "Male"
 }else if (radio_buttons[1].checked){
   gender = "Female"
 }
 switch (gender) {
   case "Male":
     if(d == 0 || d==-0){
       console.log(`Born on a : ${daOfWeekArr[0]} and your Akan name is ${man[0]}`);
     }else if (d == 1 || d == -1) {
      console.log(`Born on a : ${daOfWeekArr[1]} and your Akan name is ${man[1]}`);
    }else if (d == 2 || d == -2) {
      console.log(`Born on a : ${daOfWeekArr[2]} and your Akan name is ${man[2]}`);
    }else if (d == 3 || d == -3) {
      console.log(`Born on a : ${daOfWeekArr[3]} and your Akan name is ${man[3]}`);
    }else if (d == 4 || d == -4) {
      console.log(`Born on a : ${daOfWeekArr[4]} and your Akan name is ${man[4]}`);
    }else if (d == 5 || d == -5) { 
      console.log(`Born on a : ${daOfWeekArr[5]} and your Akan name is ${man[5]}`);
    }else if (d == 6 || d == -6) {
      console.log(`Born on a : ${daOfWeekArr[6]} and your Akan name is ${man[6]}`);
    }

     break;
    case "Female":
      if(d == 0 || d==-0){
        console.log(`Born on a : ${daOfWeekArr[0]} and your Akan name is ${woman[0]}`);
      }else if (d == 1 || d == -1) {
       console.log(`Born on a : ${daOfWeekArr[1]} and your Akan name is ${woman[1]}`);
     }else if (d == 2 || d == -2) {
       console.log(`Born on a : ${daOfWeekArr[2]} and your Akan name is ${woman[2]}`);
     }else if (d == 3 || d == -3) {
       console.log(`Born on a : ${daOfWeekArr[3]} and your Akan name is ${woman[3]}`);
     }else if (d == 4 || d == -4) {
       console.log(`Born on a : ${daOfWeekArr[4]} and your Akan name is ${woman[4]}`);
     }else if (d == 5 || d == -5) { 
       console.log(`Born on a : ${daOfWeekArr[5]} and your Akan name is ${woman[5]}`);
     }else if (d == 6 || d == -6) {
       console.log(`Born on a : ${daOfWeekArr[6]} and your Akan name is ${woman[6]}`);
     }
   default:
     break;
 }

}


