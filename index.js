
/* console.log("Hello JS");
// let userName = "Henry";
// userName = "Billy";

let num1 = 2
let num2 = 3
console.log(num1 * num2);

// let email = "henry@gmail.com";

// let age = 25;
// age = 26;

// let isStudent = true;
// let isAdult = false;

let text1 = "Hello";
let text2 = "World";
let text3 = 10

console.log(text1 + text2); // HelloWorld
console.log(num1 + Number(text3)); //12
console.log(num1 + Number(text2)); // NaN

console.log(10 - "John"); // NaN
console.log(10+"John"); //10John

let abc = String(456); 
console.log(typeof abc); //string

console.log(Boolean(0));   //false
console.log(Boolean(1));   //true
console.log(Boolean("")); //false
console.log(Boolean("abc")); //true

let age3 = Number("25");
let nextYearAge = age3 + 1;
console.log(nextYearAge); //26

let a = 10;
let b = 3;

console.log( a % b);  //1
console.log (a ** b); //1000

a= a + 1;
a++;
a--;

    a += 5; // a = a + 5
    a -= 3; // a = a - 2
    a *= 2; // a = a * 2
    a /= 4; // a = a / 4
    a %= 4; // a = a % 4

    let text4 = "hello";
    text4 += "World"  // test4 = text4 + "World"
*/
let a = 5;
let b = 3;
let c = "5";
let d = 5;

console.log( a > b);  // true
console.log( a < b);  // false
console.log( a >= 5);  // true
console.log( a <= 4); // false
console.log( a == c);  // a == Number(c)  true
console.log( a === c); // 1) Same Data Type  2) value comparation  false
console.log(a === d);  // true
console.log(a != b); //true
console.log(a !== c); //true

let age4 = 17;
let hasTicket = false;
let hasLicense = true;
console.log(age4 >=18 && hasTicket === true); // && ---> True and True result false
console.log(age4 >=18 || hasLicense === true); // || ---> OR result false
console.log(!hasLicense); // true

console.log("____________");
console.log (NaN  === NaN);  // false
console.log(Number.isNaN(NaN)); // true

console.log("-------");
console.log(typeof null);    // object
console.log(typeof undefined);  // undefined

// Global Scope

//let globalVar = "Hello";

// function Scope

let globalVar = " I am global variable";

function functionScope(){
    let functionVar = " I am a function";
    functionVar = " I am a function !!!!";
    console.log(functionVar);
    console.log(globalVar);
}
functionScope();
console.log("Ran functionScope once");
globalVar = " I am global Varaibale &&&&&&";
functionScope();
//I am a function
//I am global variable
//Ran function Scope once
//I am a function !!!!
// I am global Variable &&&&


//Block Scope

console.log( "_____________");
if(1===1){
    let blockScope = "blockscope";
    var testScope = "hihi";
}

for(let i = 0; i<2; i++){
    let blockScope = "blockScope";
}
console.log(testScope);
// result hihi

console.log( "_____________");

for(let i = 0; i<2; i++){
    console.log("hello");
}     
// hello 
   hello



