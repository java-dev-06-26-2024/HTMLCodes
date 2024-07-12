// conditional statements

// if else
// else if 
// switch

// if else 

// if(condition){
// code 
//}else {
// code 
//}
// check which one is bigger number
let a  =0; 
let b  =15;

if(a >b){
  console.log("a is bigger than b");
}else{
console.log("b is bigger than a");
}

// check a num1 is even number or odd number. 
// in order to check num1 should be divisible by 2 then its even or else its odd.
let num1 = 100;

if(num1 % 2 == 0){
    console.log("Even number");
}else{
    console.log("Odd Number");
}

// check if given time is dinner time or not : dinner time is 8;
// lets go for dinner  => on time
// wait.  => early
// late => late 
let time = 6;

if(time == 8){
    console.log("lets go for dinner");
}else if(time < 8){
    console.log("wait");
}else if(time > 8){
    console.log("sorry, you are late");
}


// red => stop
// green => go 
// yellow => slow down
// anyOther color => invalid input

let trafficLight = "yellow";

if(trafficLight == "red"){
    console.log("stop");
}else if(trafficLight == "green"){
    console.log("go");
}else if( trafficLight == "yellow"){
    console.log("slow down");
}else{
    console.log("invalid input");
}


// Switch



// switch(expression){

// case x:
// code 
// break;
// case 2:
//code 

    // default:
    //code 
    // break;
// }


switch(trafficLight){
case "red":
    // code
    console.log("Stop, its from Switch");
    break;
case "green":
   console.log("go, its from Switch");
   break;
case "yellow":
    console.log("slow down, its from Switch");
    break;
default:
    console.log("Invalid input, its from Switch");
    break;
}




// -----------------------------------------------------------------------------
// Looping statements

let num2 = 1;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);


// for loops 
// while loops 
// do while loops

// for(inilization ; condition; increment / decrement){
// code => n number of times 
//}

let num4=100;

for(let loopcount=0; loopcount <100  ; loopcount++){
    //code
    num4++;
    console.log(num4);
}


// create a numbers from 500 , 499, 498. 497......     400;

for(let num = 500; num >= 400; num--){
    console.log(num);
}


// create a code, 50, 51, 52, ..................350;
                    // i=i+1
for(let i =50; i <=350; i++){
    console.log(i);
}

// write a code for 5, 10, 15, 20 ........ 450;
for( let i =5; i <=450; i = i+5){
   console.log(i);
}

// write a code 333, 330, 327, ........... 30;
for(let i =333; i >=30; i=i-3){
    console.log(i);
}

console.log("-------------------------------------------");

// find a even numbers between 50 and 150;

for(let i =50; i<=150; i++){
    if( i % 2 == 0){
        console.log(i + " even");
    }else{
        console.log(i + "  Odd");
    }
}



// find a leap years from 1900 to current year(2024). 


// while loop

// initialization

// while(condition){

//     // logic code 
//     // increase or decrease 
// }

// 1, 2,3,4,5,6,7,8,9,10


let i=1; // initialization

while(i <=10){ //condition
   console.log(i);
    i++; // increase or decrease 
}

// complete using while loops
// create a numbers from 500 , 499, 498. 497......     400;
let j = 500;
while(j >=400){
    console.log(j);
    j--;
}

// create a code, 50, 51, 52, ..................350;
let k = 50;
while(k <=350){
    console.log(k);
    k++;
}
// complete using while loops
// write a code for 5, 10, 15, 20 ........ 450;       // create function of question1
// write a code 333, 330, 327, ........... 30;        // create function of question2
// find a even numbers between 50 and 150;            // create function of question3
// Any type loop is fine
// find a leap years from 1900 to current year(2024). //create function of question4


// Do while 

// initialization
// do {
//     code
//     increase or decrease 
// }while(condition)
console.log("-----------------Do While----------------")
let l =11;
do{
console.log(l);
    l++;
}while(l <=10);


// -------------------------------- functions --------------------------------

// function1 => adding two number and print
         //functionName(inputs)
function addTwoNumbers (a, b){
  // code   
  let sum = a+b;
  console.log("The sum of "+ a + " "+b + " is "+ sum);
}
// Calling the function 
addTwoNumbers(10,15);
addTwoNumbers(15,150);
// function without inputs
function printHello(){
    console.log("Hello");
}
// Calling a function
printHello();

// create a function to check given input is divisible by 5
function checkInput(input){
    if(input % 5 == 0){
        console.log(" yes its divisible by 5");
    }else{
        console.log("no, its not divisible by 5");
    }
}
checkInput(22);
checkInput(15);
checkInput(25);
checkInput(33);
checkInput(52);
checkInput(34567);

// if you want to get a output after complete its task we use "retrun" keyword

function getMulTwoNumbers(num1, num2){
 let mul = num1* num2;
  return mul;
}


let output = getMulTwoNumbers(10,20);
console.log(output);

let output2 = getMulTwoNumbers(5,15);
console.log(output2);