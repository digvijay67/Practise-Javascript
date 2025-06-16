// primitive type
// 7 type: String,number boolean null bignit undefined Symbol

const score = 100
const scorevalue = 100.6
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//const bigNumber = 23344455566445666n;



// non primitive 
 // Array, Object, function,

 const heroes = ["Sori","angara","yah"];
 let myObj ={
    name:"Yash",
    age: 22,
    
    
 }
 console.log(myObj);
 
 console.log(heroes===myObj);
 
 // function treat a varaible form
 

  const myFunction = function (){
    console.log("Hello ww");
    

 }
 console.log(typeof anotherId)


 // stack using a primitive data type
 // heap using a non primitive data type

 let myName = "Yash"

 let userOne ={
    email: "digvijay67@gmail.com",

    upiId: "9888101543@ybl",
    mobileNumber: "9881017423"
 }
 let UserTwo = userOne

 UserTwo.email= "digvijay78@gmail.com"

 console.log(userOne.email);
 console.log(UserTwo.email);

  // changes using a original value
    
// String in Javascript date 15-06-2025

const name = "Yash";
let namee = "rom"
const repo = 60;

console.log(`Hello my name is ${name} and my repo is ${repo}`);

let gameName = new String("Digvijaysing")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3)); 
console.log(namee.replace("rom","yash")); 


let nam = namee.replace("rom","java")
console.log(nam);

const newwString = gameName.substring(-9,6)  // substring are a ignore a reverse value and call a simple value negative value not a call only postitive integer call
console.log(newwString);

const newString = gameName.slice(-9,6)  // slice is a reverse value are call and  regular value are both operation call a "slice"
console.log(newString);

//trim function using a space and gab are not a use
 const you = "     Digv     "
console.log(you);
console.log(you.trim());
console.log(gameName.includes('Dighh')); // include is a finding a value and  sting an let and var any datatype and value using a include function


const valueName = new String( "Digvijay-Vilassing-Rajput")
console.log(valueName.split('-'));





