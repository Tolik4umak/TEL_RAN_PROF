//First level
console.log("---------First level----------")

const first = "1";
const second = 1;

console.log(first==second);
console.log(first===second);






//Second level
console.log("---------Second level----------")




const myMoney = 100;
const tomatosPrice = 10;
const cucumbersPrice = 5;
const aplesPrice = 15;

let moneyForNuts;
let bue = (cucumbersPrice*2)+(tomatosPrice*2)+(aplesPrice*2);
let spendMoreFor;


moneyForNuts = myMoney - bue;
console.log("потратили на орехи: " + moneyForNuts)

moneyForNuts>bue ? spendMoreFor = "Больше потратили на орехи":spendMoreFor = "Больше потратили на фрукты и овощи"; 
console.log(`${spendMoreFor}: ${bue}`);

