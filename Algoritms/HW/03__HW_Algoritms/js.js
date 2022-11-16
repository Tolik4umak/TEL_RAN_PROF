let left = [];
let rigth = [];
let middle = [];

let hanoiContent = document.querySelector('.hanoi');



function hanoyNum(num, fromArr, middleArr, toArr) {

    [...new Array(num)].forEach((element, index) => {
        fromArr.push(index + 1)
    });
    let step = 1;
    console.log(fromArr.length+`  `+middleArr.length+`  `+toArr.length)

    function hanoyRun() {
        if (fromArr.length === 0 && middleArr.length === 0) {
            return 'done'
        }
        if (num % 2 === 0) { // even
            // move 1 
            if (fromArr[0] < middleArr[0] || middleArr.length === 0) {
                middleArr.unshift(fromArr[0]);
                fromArr.shift();
                console.log(step+') перемести блин c ЛЕВОЙ башни на СРЕДНЮЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ЛЕВОЙ башни на СРЕДНЮЮ</p>`
                step++
            } else if (fromArr[0] > middleArr[0] || fromArr.length === 0) {
                fromArr.unshift(middleArr[0]);
                middleArr.shift();
                console.log(step+') перемести блин cо СРЕДНЕЙ башни на ЛЕВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин cо СРЕДНЕЙ башни на ЛЕВУЮ</p>`
                step++
            }

            // move 2
            if (fromArr[0] < toArr[0] || toArr.length === 0) {
                toArr.unshift(fromArr[0]);
                fromArr.shift();
                console.log(step+') перемести блин c ЛЕВОЙ башни на ПРАВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ЛЕВОЙ башни на ПРАВУЮ</p>`
                step++
            } else if (fromArr[0] > toArr[0] || fromArr.length === 0) {
                fromArr.unshift(toArr[0]);
                toArr.shift();
                console.log(step+') перемести блин c ПРАВОЙ башни на ЛЕВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ПРАВОЙ башни на ЛЕВУЮ</p>`
                step++
            }
            
            // move 3
            if (middleArr[0] < toArr[0] || toArr.length === 0) {
                toArr.unshift(middleArr[0]);
                middleArr.shift();
                console.log(step+') перемести блин cо СРЕДНЕЙ башни на ПРАВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин cо СРЕДНЕЙ башни на ПРАВУЮ</p>`
                step++
            } else if (middleArr[0] > toArr[0] || middleArr.length === 0) {
                middleArr.unshift(toArr[0]);
                toArr.shift();
                console.log(step+') перемести блин c ПРАВОЙ башни на СРЕДНЮЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ПРАВОЙ башни на СРЕДНЮЮ</p>`
                step++
            }
        } else { // odd
           
            // move 1
            if (fromArr[0] < toArr[0] || toArr.length === 0) {
                toArr.unshift(fromArr[0]);
                fromArr.shift();
                console.log(step+') перемести блин c ЛЕВОЙ башни на ПРАВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ЛЕВОЙ башни на ПРАВУЮ</p>`
                step++
            } else if (fromArr[0] > toArr[0] || fromArr.length === 0) {
                fromArr.unshift(toArr[0]);
                toArr.shift();
                console.log(step+') перемести блин c ПРАВОЙ башни на ЛЕВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ПРАВОЙ башни на ЛЕВУЮ</p>`
                step++
            }
        
            // move 2 
            if (fromArr[0] < middleArr[0] || (middleArr.length === 0&&fromArr.length !== 0)) {
                middleArr.unshift(fromArr[0]);
                fromArr.shift();
                console.log(step+') перемести блин c ЛЕВОЙ башни на СРЕДНЮЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ЛЕВОЙ башни на СРЕДНЮЮ</p>`
                step++
            } else if (fromArr[0] > middleArr[0] || (fromArr.length === 0&&middleArr.length !== 0)) {
                fromArr.unshift(middleArr[0]);
                middleArr.shift();
                console.log(step+') перемести блин cо СРЕДНЕЙ башни на ЛЕВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин cо СРЕДНЕЙ башни на ЛЕВУЮ</p>`
                step++
            }
       
            // move 3
            if (middleArr[0] < toArr[0] || toArr.length === 0) {
                toArr.unshift(middleArr[0]);
                middleArr.shift();
                console.log(step+') перемести блин cо СРЕДНЕЙ башни на ПРАВУЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин cо СРЕДНЕЙ башни на ПРАВУЮ</p>`
                step++
            } else if (middleArr[0] > toArr[0]) {
                middleArr.unshift(toArr[0]);
                toArr.shift();
                console.log(step+') перемести блин c ПРАВОЙ башни на СРЕДНЮЮ '+`   `+fromArr.length+`  `+middleArr.length+`  `+toArr.length)
                hanoiContent.innerHTML+=`<p>${step} перемести блин c ПРАВОЙ башни на СРЕДНЮЮ</p>`
                step++
            }

        }



        hanoyRun()

    }
    hanoyRun()

}




console.log('left - ' + left);
console.log('middle - ' + middle);
console.log('rihth - ' + rigth);


hanoyNum(+prompt('введи число блинов в башне'), left, middle, rigth);

console.log('=============');
console.log('=============');
console.log('=============');

console.log('left - ' + left);
console.log('middle - ' + middle);
console.log('rihth - ' + rigth);








