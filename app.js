// Store date and time

// function dateTime() {
//     let time = new Date()
//     let currentDate = new Date().getDate()
//     let currentTime = new Date().getHours()
//     let currentMinute = new Date().getMinutes()

//     document.write("Time:"+ "<br/>" +time + "<br/>" + "Today's Date" + "<br/>" + currentDate + "<br/>" + "Current time:"+ "<br/>" + currentTime + ":" + currentMinute)
// }
// dateTime();

// Greeting

// let userFirstName = prompt("Enter Your First Name")
// let userLastName = prompt("Enter Your Last Name")

// function userGreeting(userFirstName , userLastName){
//     alert("Good Morning" + " " + userFirstName + " " + userLastName)
// }
// userGreeting(userFirstName,userLastName)

// Add 2 numbers getting by user

// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// let operator = prompt("Enter a operator which calculation you want (+ , - , * , /)")

// function sum(num1 , num2 , operator) {
//     if(operator == "+"){
//         document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
//         , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 + num2 );
//     }
//     if(operator == "-"){
//         document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
//         , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 - num2 );
//     }
//     if(operator == "*"){
//         document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
//         , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 * num2 );
//     }
//     if(operator == "/"){
//         document.write("<h4>First Number:</h4>" , "<br/>" , num1 , "<br/>" , "<h4>Second Number:</h4>" , num2 , "<br/>"
//         , "<h4>Operator:</h4>" , operator , "<br/>" , "<h4>Answer:</h4>" , "<br/>" , num1 / num2 );
//     }
// }
// sum(num1 , num2 , operator);

// Counting

// let startNum = +prompt("Enter a number for start the counting")
// let endNum = +prompt("Enter a number for end the counting")

// function counting(startNum , endNum){
//     document.write("<h1>Counting:</h1>" , "<br/>" , "<h4>Start Number:</h4>" , "<br/>" , startNum , "<br/>" ,
//             "<h4>End Number:</h4>" , "<br/>" , endNum , "<br/>" , "<h4>Count:</h4>")
//     if(startNum < endNum){
//         for(let i = startNum ; i <= endNum ; i++){
//             document.write("<br/>" ,i , "<br/>");
//         }
//     }
// }
// counting(startNum , endNum)

// find the longest word within the string

// let longString = "Web Development Tutorial";

// function longestString(str) {
//   let words = str.split(" ");
//   let firstLongest = words[0].length;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > firstLongest) {1
//       firstLongest = words[i].length;
//       document.write(words[i])

//     }
// }
//   console.log(firstLongest);
// }

// longestString(longString);

// Palindrome Checker

// let str = prompt("Enter a palendrome word (Mom - Mom)").toLowerCase()

// function palindromeChecker(word) {
//     let splitWord = word.split("")
//     let reverseWord = splitWord.reverse()
//     let joinWord = reverseWord.join("")
//     if(joinWord == word){
//         document.write(word + " is palindrome word")
//     }
//     else{
//         document.write(word + " is not palindrome word")
//     }
// }

// palindromeChecker(str)

// First Word Capital

// let line = "this is me"

// function firstCapitalLetter(strs) {
//     let arr = strs.split()
//     console.log(arr);

// }

// firstCapitalLetter(line)

// CHAPTER 39
// SWITCH STATEMENT

// let day = "tuesday"

// switch (day) {
//     case "monday":
//         document.write("Q aaye tm")
//         break;
//     case "tuesday":
//         document.write("aahhhh")
//         break;
//     case "wednesay":
//         document.write("Tired")
//         break;
//     case "thursday":
//         document.write("Shab e Jumma")
//         break;
//     case "friday":
//         document.write("Jumma Mubarak")
//         break;
//     case "saturday":
//         document.write("Weekend")
//         break;
//     case "sunday":
//         document.write("Chuttii")
//         break;
//     default:
//         document.write("Nh baaaii tm kam kro bs")
//         break;
// }

// let signal = prompt("Enter a signal light").toLowerCase()

// switch (signal){
//     case "red":
//         alert("Please Stop")
//         break;
//     case "green":
//         alert("Ready to go")
//         break;
//     case "yellow":
//         alert("Gooo")
//         break;
//     default:
//         alert("This light color is not a signal light")
// }

// CHAPTER 41
// WHILE LOOP

// let i = 1;
// while (i <= 500) {
//   document.write(i + "<br/>")

//   i++
// }

// let j = 1;
// while (j <= 10 ) {
//   if (1 % 2 == 0)
//   console.log(j);

//   j++

// }

// WHILE LOOP WHEN WE DON'T KNOW THE ITERATION

// let userPassword = prompt("Enter your password")

// let password = "aeiman"

// while (true) {
//   if(userPassword == password){
//     document.write("Welcome")
//     break
//   }
//   else{userPassword = prompt("Try again")}
// }

// WHILE LOOP

// TASK WHILE LOOP ON ARRAY

// let i = 0

// let colors = ["red" , "blue" , "green" , "yellow" , "orange"]

// while(i < colors.length){
//     document.write("It's " + colors[i] + "<br/>")
//     i++
// }

// TASK BATTERY CHARGING

// let diedBattery = 0

// let chargeIncreased = 10

// while (diedBattery <= 100) {
//     if (diedBattery == 100){
//        console.log("Battery fully charged")
//         break
//     }
//     diedBattery = diedBattery + chargeIncreased
// }

// ACCOUNT BLOCED CONDITION

// let password = "aeiman"

// let userPassword = prompt("Enter your password")

// let count = 0

// while (true) {
//   if (userPassword == password){
//     alert("Welcome to Home page")
//     break
//   }
//   ++count
//   if(count == 5){
//     alert("Account block! You attempts wrong password many time")
//     break

//   }
//   userPassword = prompt("Enter your password")
// }

// CHAPTER EVENTS

// function greet() {
//     console.log("Cliking");
// }

// let inputField = document.getElementById("abc")

// inputField.addEventListener("focus" , greet)

// let btnInput = document.getElementById("btn")

// btnInput.addEventListener("click" , btnClick)

// function btnClick() {
//     alert("Welcome")

// }
// console.log(btnInput);

// colors[0].addEventListener("click" , buttonColor)

// function buttonColor() {
//     alert("Hello")
//     colors[0].style.backgroundColor = "red"
// }
// let colors = document.getElementsByClassName("container")

// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
//     let colorLoop  = colors[i];
//     colorLoop.addEventListener("click",clickDesign)
// }

// function clickDesign() {
//     for(let i = 0 ; i < colors.length ; i++){
//         colors[i].className = "btn"
//     }

// }

// let obj = {
//     class : "Web"
//     a : "Monday"
// }

// let obj={
//     class:"Web",
//     day:"monday"
//   }

//   console.log(typeof obj)

// let arr = ["monday" , "tuesday"]

// console.log(Array.isArray(arr));

// let btn = document.getElementById("submit")
// console.log(btn);

// btn.addEventListener("click" , function(){
//     console.log("Clicking");
//     let inputField = document.getElementById("input1")
//     console.log(inputField.value.length);
//     if(inputField.value.length == 0){

//         inputField.classList.add("inputError");
//     }
// })



// INNER HTML / CONTENT


// let fullText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consequuntur aperiam sapiente at
// assumenda soluta iste voluptatibus omnis porro necessitatibus molestias laborum, nam provident est
// voluptates deleniti ipsum mollitia expedita! `

// let shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

// let btn = document.getElementById("btn")

// let para = document.getElementById("para")

// btn.addEventListener("click" , function(){
//     if(btn.innerHTML == "Read More")
//     {
//         para.innerHTML = fullText
//         btn.innerHTML = "Read Less"
//     }
//     else{
//         para.innerHTML = shortText
//         btn.innerHTML = "Read More"
//     }
// })


// let paraTag = document.getElementsByTagName("p")
// let btn = document.getElementById("btn")

// // console.log(paraTag);


// btn.addEventListener("click", function () {
//     paraTag[2].classList.add('blue')
//     paraTag[2].innerText = "Aeiman"
//     for (i = 0; i < paraTag.length; i++) {
//             paraTag[i].classList.add('blue')
//             paraTag[i].innerText = "Aeiman"
//     }
// })  





// CHAPTER OBJECT

const student1 = {
    firstName : "Aeiman",
    lastName : "Fayyaz",
    class : "Web", 
    rollNo : 15465,
    hobbies : ['Sketching' , 'Painting'],
    address : {
        streetNo : [52, "Hussainabad" ],
        zipCode : 444
    },
    fullName : function(){
        console.log(`${this.firstName} ${this.lastName}`);
      
    }
}
student1.fullName()

// console.table(student1)
console.log(student1);
console.log(delete student1.class);

// console.log(student1);