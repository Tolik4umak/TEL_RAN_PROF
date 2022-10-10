//First level
console.log("---------First level----------")

for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}


console.log("or") // или так:

for(let i=1;i<=10;i++){
    if(i%2!=0) continue;
    console.log(i);
}







//Second level
console.log("---------Second level----------")


let i=0;
while(i<3){    
    console.log(i);
    i++;
}



