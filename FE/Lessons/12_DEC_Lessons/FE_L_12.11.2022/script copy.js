// fetch('https://fakestoreapi.com/products/10000000000')
//     .then(resp => {
//         console.log(resp)
//         return resp.json()
//     }, err =>{
//         console.log(err)
//     })
//     .then(data => console.log(data),()=>{
//         console.log('json parse error')
//     });


const promise = new Promise((resolve, rejecte)=>{
    const randVal = Math.random();
    if(randVal>0.5){
        resolve(randVal);
    }else{
        rejecte(randVal);
    }
})


promise.then(
    (value)=>console.log('resolve'+value),
    (value)=>console.log('reject'+value)
)