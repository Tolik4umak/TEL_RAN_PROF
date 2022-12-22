const cvs = document.querySelector('#cvs');
const range = document.querySelector('#plot_size')

const ctx = cvs.getContext('2d'); // context


cvs.width = 500
cvs.height = 500

range.addEventListener('input',event=>{
    const value = event.target.value
    Plot.change_size(ctx,value)
})


// ctx.fillStyle = '#2980b9';
// ctx.fillRect(10, 10, 100, 200);

// ctx.strokeStyle = '#2980b9'
// ctx.strokeRect(10, 10, 200, 200)

// ctx.beginPath();
// ctx.moveTo(250, 250)
// ctx.lineTo(300, 300)
// ctx.lineTo(300, 250)
// ctx.lineTo(250, 250)
// ctx.moveTo(10, 10)
// ctx.lineTo(10, 300)
// ctx.lineTo(300, 300)
// ctx.lineTo(200, 50)
// ctx.lineTo(10, 10)
// ctx.fill()


// const x = [...new Array(10000)].map((_,i)=>i*0.01);


// x.forEach(elem=>{
//     const y = Math.sin(elem)
//     ctx.lineTo(elem*10, y*30+250)
// })
// ctx.stroke();

// x.forEach(elem=>{
//     const y = Math.tan(elem)
//     ctx.lineTo(elem*10, y*30+250)
// })
// ctx.stroke();

class Plot{

    static size = 50
    static plots = []

    static change_size(ctx,value = 1){
        this.size = value;
        ctx.clearRect(0,0,250,500)
        this.plots.forEach(plot => plot.render(ctx))
    }

    constructor(xList, func, lineColor = '#8e44ad'){
        this.xList = xList
        this._func = func
        this.stroke_style = lineColor
        Plot.plots.push(this)
       
    }
    render(ctx){
        ctx.strokeStyle = this.stroke_style;
        ctx.beginPath();
        this.xList.forEach(elem=>{
            const y = this._func(elem)
            ctx.lineTo(elem*Plot.size+250, y*Plot.size+250)
        })
        ctx.stroke();
    }
}


const x = [...new Array(10000)].map((_,i)=>i*0.01 - 50);

const plot1 = new Plot(x, x=>-(x**2))
plot1.render(ctx)

const plot2 = new Plot(x, Math.sin, '#34495e')
plot2.render(ctx)

