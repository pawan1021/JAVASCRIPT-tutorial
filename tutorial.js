// this is learning of 'console.log'.

console.log("I am pawan");
console.log(11);
console.log(true);
console.log(null);
console.log([1,2,3,4]);
console.log({name:"pawan" , language : "javascript" , tutor:"code with  harry"});

// Learning of consle.table

console.table({name:"pawan" , language : "javascript" , tutor:"code with  harry"});

// Learning of console.assert.

console.assert(1>2, "Expression is false")
// Learning of console.warn

console.warn("this is the warning of your first fault.")

// this is learning of console.clear

// console.clear();

// This is the learning of console.time and console.timeEnd

console.time();
for(i=0; i<5; i++){
    console.log(i);
}
console.timeEnd();

// this is the learning console.error

console.error("this is the simple error");

// this is the learning of cconsole.count

for(i=0; i<6; i++){
   console.count(i);
}

// this is the learning of console.group

console.group('science');
console.log('physics');
console.log('chemistry');
console.log('bio');
console.groupEnd('science');
console.log('math');

// learning of var , let , const .
// Var
var Name = 'Pawan';
var age = 17;
var developer = true;
console.log(Name, developer);
Name = 'priya';
console.log(Name);

//let
{
let amount = 2000 ;
amount = 300;
console.log(amount);
}

// const

const car_name = 'ferrari';
//car_name = 'mercedes'; the value will not change in const variable .So , this will show error.
console.log(car_name);

//This is single line comment.
/*this is multiline comment .
In whch we can type all data which we have to type .
 */

// Primitive data types are numbers, booleans, string, null, undefined, and symbols.
// Primitive data types.

var x;
console.log('My datatype  is ' + (typeof x));

var y = 'pawan';
console.log('My datatype  is ' + (typeof y));

var z = 3636;
console.log('My datatype  is ' + (typeof z));

var m = true;
console.log('My datatype  is ' + (typeof m));

// Reference datatype .

var sport = ['pawan', 'shivanshu','rajul'];
console.log('the datatype is ' + (typeof sport));

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);

// Tyep conversion and Coercion.
/*In javascript ,there are two type of conversion.
1. Explicit conversion.
      number conversion
      boollean conversion
      string conversion
      parsInt and parsefloat
2. Emplicit conversion. 
      conversion to string
      conversion to number
      boolean conversion to number*/

// Explicit conversion.
// number conversion.

let con = '63366';
// string to number.
con = Number('63366');
console.log(con);// 63366

let con1 = false;
// boolean to number.
con1 = Number(false);
console.log(con1);//0

let con2 = ' ';
// empty string to number.
con2 = Number(' ');
console.log(con2);//0

let con3 = ('hello');
//string to number
con3 = Number('hello');
console.log(con3);//NaN

let con4 = undefined;
//undefined to number
con4 =Number(undefined);
console.log(con4);//NaN

// boolean conversion.

let bc1;
//undefined to boolean
bc1 =Boolean();
console.log(bc1);

let bc2 ="";
//empty string to boolean
bc2 =Boolean("");
console.log(bc2);

let bc3 = null;
//null to boolean
bc3 =Boolean(bc3);
console.log(bc3);

let bc4 = NaN;
//NaN to boolean
bc4 =Boolean(NaN);
console.log(bc4);

let bc5 = 0;
//number to boolean
bc5  =Boolean(bc5);
console.log(bc5);

let bc6= 1;
//number to boolean
bc6=Boolean(bc6);
console.log(bc6);

let bc7 = "pawan";
//string to boolean
bc7=Boolean(bc7);
console.log(bc7);

//string conversion.

let str1 = 55;
//number to string.
// str1=String(str1);
console.log(str1.toString())

let str2 = false;
//boolean to string
str2 = (str2);
console.log(str2);

// parseInt and parsefloat conversion.

let pars = 222.4444;
pars = parseFloat(pars);
console.log(pars.toFixed(22));

let pars1 = 222.4444;
pars1 = parseInt(pars1);
console.log(pars1);

//Emplict conversion.

//Conversion to string.

let res;
// In this conversion number is also converts in string then will add .
res = '344' + 37364;
console.log(res);

let res1 = true + 'true';
console.log(res1);

let res2 = '2122'+ null;
console.log(res2);

//conversion to number.

let res3 = '4' - '4';
console.log(res3);

let res4 = '44'*5;
console.log(res4);

//boolean conversion to number.

res5 ='42255'- true;
console.log(res5);

res6 = '5554'*false;
console.log(res6);

//type conversion.

let num1 = Number('3213');
let num2 =4848;
console.log(num1 + num2)

// string properties , methods and templates litrals in javascripts

var mystr='javascripts';
console.log(mystr.charAt(4));//output : s

var mystring = 'javascript';
var mystri =mystring.concat(" is"," awesome."," it is"," very beautiful")
console.log(mystri);

var stm ="I am pawan from chitrakoot."
console.log(stm.lastIndexOf("from"));