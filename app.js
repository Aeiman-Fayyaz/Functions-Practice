// Store date and time


// function dateTime() {
//     let time = new Date()
//     let currentDate = new Date().getDate()
//     let currentTime = new Date().getHours()
//     let currentMinute = new Date().getMinutes()
   
//     document.write("Time:"+ "<br/>" +time + "<br/>" + "Today's Date" + "<br/>" + currentDate + "<br/>" + "Current time:"+ "<br/>" + currentTime + ":" + currentMinute)
// }
// dateTime();

let userFirstName = prompt("Enter Your First Name")
let userLastName = prompt("Enter Your Last Name")

function userGreeting(userFirstName , userLastName){
    alert("Good Morning" + " " + userFirstName + " " + userLastName)
}
userGreeting(userFirstName,userLastName)

