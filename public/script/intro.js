//script link with the "test.html"

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
let replaces;
replaces = animal.replaceAll("g","h");
console.log(replaces);


//string methods
let unicode="Hello\uD800";
console.log(unicode);

let str="dog";
console.log(str.charCodeAt(0));//has key: american standard code for information interchange
console.log(String.fromCharCode(100));// from has key value to alphabate.
console.log("🐶".codePointAt(0));
str="Arul-test value";
console.log(str.slice(5,9));
console.log(str);

//object : data type used in obj: string, number, boolean, big-int, null, undifiened, symbol(special)


let ball = {
    name: "ball",
    color: "red",
    price:150,
    emoj:"🐶",
    [Symbol('arul')] : '_1',
    type:function (p) {
        return p;
    },
    letter:{
        name:"prem",
        age:24
    }
}
console.log(ball);
console.log(ball.type("obj func working"));

//task Access Value center  : insteed of c need z;
// (function name(ans) {
    let str1="Access Value center";
    let index=str1.indexOf("c");
    console.log(index);
    str1[2] = 'z';
    console.log("first try" + str1);
    let array = str1.split("");
    //console.log(array);
    let newstring ="";
    for (let index = 0; index < array.length; ++index) {

        if (index==2) {
            //str1[2] = 'z';
            array[index] = "z";
        }
        newstring += array[index];
    }
    console.log(newstring);
    //debugger
    console.log("answer: ->" + str1.substring(0, 2) + 'z' + str1.substring(3));
    
// debugger

//list of obj
let obj1=[
    {
    name: "ball",
    color: "red",
    price:150,
    emoj:"🐶",
    [Symbol('arul')] : '_1',
    type:function (p) {
        return p;
    },
    letter:{
        name:"prem",
        age:24
    }
},
{
    name: "ball",
    color: "red",
    price:150,
    emoj:"🐶",
    [Symbol('arul')] : '_1',
    type:function (p) {
        return p;
    },
    letter:{
        name:"prem",
        age:24
    }
},
{
    name: "ball",
    color: "red",
    price:150,
    emoj:"🐶",
    [Symbol('arul')] : '_1',
    type:function (p) {
        return p;
    },
    letter:{
        name:"prem",
        age:24
    }
}

]


console.log(obj1);
    console.log(Object.entries(obj1[0]));

let school=[
    ["name", "praveen"],
    ["age", 12]
];
    console.log(Object.fromEntries(school));

//map
let map = new Map(Object.entries(obj1[0]));
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.get("name"))
console.log(Array.from(map));

//map vs obj
//map preserve the inserting order 
//cannot find out the obj size
//map has a predefined method like map.size
//compare to object map is faster than obj
//while using map it is not serialization the json

let new_map = new Map();
new_map.set("email", "arul@gmail.com");
new_map.set("email", "praveen@gmail.com");
let old_map= [new Map([["name3", "arul3"]]), new Map([["name2", "arul2"]]), new Map([["name1", "arul1"]])];
console.log(old_map[0].get("name3"));

//Array
// [[0],[1],[2]]   //0,1,2 --> is called as an element
let myArray=[1, 2, 5, 3, 4, 5];
// console.log(myArray);
// //dynamic size
// myArray[5]=6;
// console.log(myArray);
// myArray[5]="prem";
// console.log(myArray);
// //heterogrneous => it allow the multiple data type
// myArray.splice(3,1);
// console.log(myArray);
let new_arr=[];

for (let index = 4; index >=0; index--) {
    
    new_arr.push(myArray[index]);
    
    
    
}

console.log(new_arr);
console.log(new_arr.sort());
console.log(new_arr.toSorted());


console.log(new_arr.reverse());

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(10));
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));
// console.log(myArray.firstIndexOf(5));

let arr1 = new Array(); //instance  creation
// new Array(1,2,3,4,5)
arr1=['arun', 'prem', 'Kumar', 'arul'];

console.log(arr1.find(e=>(e=='arul')));
arr1.forEach(e=>{
    console.log(e + "kumar");
    
});
console.log(arr1);

arr1 = arr1.map(e => {return (e + "kumar")});
console.log("map method " + arr1);

//flat_map

arr1.flatMap(e => {return (e + "kumar")});
console.log("flat map method " + arr1);
//typed array
const myArr = new Int8Array(10);
const myArr1 = new Int32Array(10);
console.log(myArr, myArr1);
//
let arrays =[];
//arrays.at[0]
console.log(arrays.at(0));
let array5 = []; console.log(array5[0]);


let array8 = new Array(1);
 console.log(array8[0]);
let strArray=[]
console.log(strArray[5]=6);
console.log(strArray[0]);

let arul=Array(5).fill(0).map((value, index) => index);
console.log(arul);
let sum=0;
arul.forEach(e=>{sum += e});
console.log(sum);

let reducer = arul.reduce((a, b) => a + b, 10);
console.log(reducer);

//to do app
//xox game
//train 

//tomorrow
// set
// reject 
// ajax



































    
    
    
    
    
    
    
    
    
    
    
    
