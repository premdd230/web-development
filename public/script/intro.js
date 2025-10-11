let toy = "(let) string is a collection of characters";
toy = "toy over write";
//let toy = "toy over write"; // let : local scope variable and var is a global scope variable
console.log(toy);
const count = 4;
//count = 2;
console.log("reasign the count " + count);
var car = "volvo";
var car = "audi";
console.log("var reasign "+car);
//let char = a; // a through the undefined error
let char = 'a';
console.log(char);
let _name = 123;
let $$ ="dollar "
console.log($$);
// _underscore simple and $ dollar simple are allowed in the variable name
let home;
//if you console log the home , this through the undefined error
// opperators
// = ,+-/,
console.log(10+9);
console.log(10-9);
console.log(10*9);
console.log(10/9);
console.log(10%5); //modules

// logical operators && ,!, ||

x = 8; y = 5;
console.log("logical opperator"+x + " " + y );
console.log(x < 10 && y > 1);
console.log(x === 5 || y === 5);
console.log(!(x === y) );

let boolean = true;
console.log(!boolean);

//comparision operator 
// x= x+2;
// x+=2;

// loop

// return function
function add(a,b){
    return a+b;
}
console.log(add(1,2));

console.log("for loop");

for (let index = 0; index < 10; index++) {
    console.log(index);
}

let initial = 20;
while (initial >= 0) {
    console.log(initial);
    initial--;
}
console.log("pre increment using while loop");

initial=0;
while (initial <= 20 ) {
    console.log(initial);
    ++initial;
}
do {
    console.log("initisl value is "+ initial); //21
    ++initial;
    
} while (initial<30);

//array
let sample =[1, "2", true];

sample.forEach(element => {
    console.log(element);
});

for(var item in sample){
    console.log(sample[item]);
}

//   ?? operators null collusion operator

// control statement

let numbers = 8;
if (numbers==5) {
    console.log("number" );
}
else if(numbers==8){
    console.log("else if working");
    
}
else{
    //without if statement else is not work
    console.log("else working");
}

let abc;
numbers = abc ?? 5;
console.log(numbers);

switch (numbers) {
    case 2: 
        console.log("two");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    default:
        console.log("nothing");
    
        break;
}


let apple = (numbers==2) ? "five" : "not five";
console.log(apple);


for (let mango = 0; mango <= 20; mango++) {
    if (mango==15) {
        
        console.log("before continue key word 15");
        continue;
        console.log("after continue key word 15");
        
    } else {
        console.log("condition passed"+mango);
        
    }
    
}

//Date type: string // 
let animal= "tiger";
console.log(animal.length); //5
console.log(animal.charAt(2));
console.log(animal[2] + " working");

console.log(animal.split(""));

//instead of g push the letter "h"

//string methods











    
    
    
    
    
    
    
    
    
    
    
    
