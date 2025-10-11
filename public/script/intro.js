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

//   ?? operators


    
    
    
    
    
    
    
    
    
    
    
    
