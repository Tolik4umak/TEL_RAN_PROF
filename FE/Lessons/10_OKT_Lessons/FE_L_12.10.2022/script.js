// let check = (num1, num2) => (num1+num2)>10;

// console.log(check(1,2));
// console.log(check(9,2));


// let isNumberInRange = (num) => num > 0 && num < 10;

// console.log(isNumberInRange(5));
// console.log(isNumberInRange(0));
// console.log(isNumberInRange(20));


// let isEven = (num) => num%2==0;

// console.log(isEven(5));
// console.log(isEven(8));





// let hello = function(name = "Гость"){
// console.log(`Привет ${name}`);
// }

// hello("Anatolii")
// hello()



// let multy = (num1, num2) => num1 * num2;

// console.log(multy(2,5));




// let rgb = function(n1=0,n2=0,n3=0){
//     return `rgb(${n1},${n2},${n3})`;
// };

// console.log(rgb(255,255,255));
// console.log(rgb());
// console.log(rgb(152));



// let i = 45;
// while (i<=67){

// if(i%5==0) console.log(i);
   
// i++;
// };


// for (i=45;i<=67;i++){
//     if(i%5==0) console.log(i);
// }


let calc = function(n1=0,n2=0,operator="+") {

    if (operator === "*") return n1*n2;
    if (operator === "/") return n1/n2;
    if (operator === "+") return n1+n2;
    if (operator === "-") return n1-n2;
  

}

console.log(calc(5,5,"*"))