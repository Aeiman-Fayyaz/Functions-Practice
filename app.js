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

// let longString = "Web Development Tutorial"

// function longestString() {
//     if(longString.includes("Development")){
//                 document.write("We found longest string");
//         }
// }

// longestString()



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


let signal = prompt("Enter a signal light")

switch (signal){
    case "red":
        alert("Please Stop")
        break;
    case "green":
        alert("Ready to go")
        break;
    case "yellow":
        alert("Gooo")
        break;
    default:
        alert("This light color is not a signal light")
}