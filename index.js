let getDayBirth, getMonthBirth, getYearBirth, gender;
let CC, MM, DD, YY;

function getInput() {
  getDayBirth = parseInt(document.getElementById("day-of-birth").value);
  getMonthBirth = parseInt(document.getElementById("month-of-birth").value);
  getYearBirth = document.getElementById("year-of-birth").value;
      
  YY = parseInt(getYearBirth.substring(0,2));
  CC = parseInt(getYearBirth.substring(2,4));
  console.log(`The year of birth: ${getYearBirth}`);
  
  MM = getMonthBirth;
  DD = getDayBirth;
  }
  
  // function monthValidator () {
  //   if (getMonthBirth < 1 || getMonthBirth > 12) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  //   function dayValidator () {
  //     if (monthOfBirth === 1 && Number(getYearBirth)%4 === 0) {
  //       if (getDayBirth > 28 || getDayBirth < 1) {
  //         return false;
  //       } else if (getMonthBirth === 1 && getDayBirth > 29) {
  //         return false;
  //       } else if (getMonthBirth === 1 && getDayBirth < 1) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     } else if (getDayBirth < 1 || getDayBirth > 31){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }

  function calculate() {
  let masculine_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let feminine_names = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let day0fWeekArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7);
    

    let radio_buttons = document.getElementsByName("gender");
    if(radio_buttons[0].checked == true) {
      gender = "Male"
    }else if(radio_buttons[1].checked == true) {
      gender = "Female";
    }
    switch(gender) {
        case "Male":
          if (d == 0 || d == -0) {
              // console.log(`Day of birth: ${day0fWeekArr[0]} and your Akan name is ${masculine_names[0]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Monday : your Akan name is " + masculine_names[0];
              return false;
            }else if (d == 1 || d == -1) {
              // console.log(`Day of birth: ${day0fWeekArr[1]} and your Akan name is ${masculine_names[1]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Tuesday : your Akan name is " + masculine_names[1];

            }else if (d == 2 || d == -2) {
              // console.log(`Day of birth: ${day0fWeekArr[2]} and your Akan name is ${masculine_names[2]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Wednesday : your Akan name is " + masculine_names[2];

            }else if (d == 3 || d == -3) {
              // console.log(`Day of birth: ${day0fWeekArr[3]} and your Akan name is ${masculine_names[3]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Thursday : your Akan name is " + masculine_names[3];

            }else if (d == 4 || d == -4) {
              // console.log(`Day of birth: ${day0fWeekArr[4]} and your Akan name is ${masculine_names[4]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Friday : your Akan name is " + masculine_names[4];

            }else if (d == 5 || d == -5) {
              // console.log(`Day of birth: ${day0fWeekArr[5]} and your Akan name is ${masculine_names[5]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Saturday : your Akan name is " + masculine_names[5];

            }else if (d == 6 || d == -6) {
              // console.log(`Day of birth: ${day0fWeekArr[6]} and your Akan name is ${masculine_names[6]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Sunday : your Akan name is " + masculine_names[6];

            }else if (d >= 7) {
              alert(`Index out of bounds: ${d}`);
            }else {
              alert(`Incorrect Value: ${d}`);
            }
            break;
      case "Female":
          if (d == 0 || d == -0) {
              // console.log(`Day of birth: ${day0fWeekArr[0]} and your Akan name is ${feminine_names[0]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Monday : your Akan name is " + feminine_names[0];

            }else if (d == 1 || d == -1) {
              // console.log(`Day of birth: ${day0fWeekArr[1]} and your Akan name is ${feminine_names[1]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Tuesday : your Akan name is " + feminine_names[1];

            }else if (d == 2 || d == -2) {
              // console.log(`Day of birth: ${day0fWeekArr[2]} and your Akan name is ${feminine_names[2]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Wednesday : your Akan name is " + feminine_names[2];

            }else if (d == 3 || d == -3) {
              // console.log(`Day of birth: ${day0fWeekArr[3]} and your Akan name is ${feminine_names[3]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Thursday : your Akan name is " + feminine_names[3];

            }else if (d == 4 || d == -4) {
              // console.log(`Day of birth: ${day0fWeekArr[4]} and your Akan name is ${feminine_names[4]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Friday : your Akan name is " + feminine_names[4];

            }else if (d == 5 || d == -5) {
              // console.log(`Day of birth: ${day0fWeekArr[5]} and your Akan name is ${feminine_names[5]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Saturday : your Akan name is " + feminine_names[5];

            }else if (d == 6 || d == -6) {
              // console.log(`Day of birth: ${day0fWeekArr[6]} and your Akan name is ${feminine_names[6]}`);
              document.getElementById('result').textContent = "Your Birthday was on a Sunday : your Akan name is " + feminine_names[6];

            }else if (d >= 7) {
              alert(`Index out of bounds: ${d}`);
            }else {
              alert(`Incorrect Value: ${d}`);
            }
      break;
    }
  }
  

