
//First level

//task 1

alert("Type two numbers to make different operations with them")
let num1 = +prompt("Type number 1", "");
let num2 = +prompt("Type number 2", "");



console.log(`Sum = ${num1+num2}
Diff = ${num1-num2}
Mult = ${num1*num2}
Div= ${num1/num2}
`);

alert(`Sum = ${num1+num2}
Diff = ${num1-num2}
Mult = ${num1*num2}
Div= ${num1/num2}
`)


let num3 = +prompt("Typethe number to check if it is solid", "" );

let isSolid;

if (num3%2==0){
    isSolid = "четное";
} else{
    isSolid = "нечетное";
}

console.log(isSolid);
alert(`${num3} - ${isSolid}`);




//Second level


let num4 = +prompt("Typethe number", "" );

let res;

if (num4%2==0){
    res = num4;
} else{
    res = num4+1;
}

console.log(res);
alert(res);





