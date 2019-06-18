// //1.画点
// var div = document.getElementById('canvas')
// var painting=false
// div.onmousedown=function(event){
//     painting=true
//     var x=event.clientX
//     var y=event.clientY
//     var divA=document.createElement('div')
//     divA.style='width:6px; height:6px;'+'background:black; border-radius:3px;'+"position:absolute; left:" +(x-9)+"px;"+"top:"+(y-7)+"px;"
//     div.appendChild(divA)
// }
// //2.画鼠标
// div.onmousemove=function(event){
//     if (painting) {
//         var x =event.clientX
//         var y =event.clientY
//         var divA=document.createElement('div')
//         divA.style='width:6px; height:6px;'+'background:black; border-radius:3px;'+"position:absolute; left:" +(x-9)+"px;"+"top:"+(y-7)+"px;"
//         div.appendChild(divA)
//     } else {
        
//     }
    
// }
// //3.松开鼠标
// div.onmouseup=function(event){
//     painting=false
//     console.log(1)
// }



//来用canvas来做
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
autoSetCanvasSize(canvas)



if (document.body.ontouchstart !== undefined) {
    //触屏设备
    canvas.ontouchstart=function(event){
        var x = event.touches[0].clientX
        var y = event.touches[0].clientY
        // drawCircle(x,y,5)
        using=true
        if (eraserEnabled) {
        
            context.clearRect(x-5,y-5,10,10)
        } else {
            lastPoint={x:x,y:y}
        }
    }
    canvas.ontouchmove=function(event){
        var x = event.touches[0].clientX
        var y = event.touches[0].clientY  
        if (eraserEnabled) {
            if (using) {
                context.clearRect(x-5,y-5,10,10)
            }
        } 
        else {
            if (using) {
                var newPoint={
                    x:x,
                    y:y
                }
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                lastPoint=newPoint
            }
        }
    }
    
    canvas.ontouchend=function(event){
        using=false
    }

} else {
    //非触屏设备
    var using = false
    var lastPoint={x:undefined,y:undefined}
    listenToMouse(canvas)
}

function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle='black'
    context.arc(x,y,radius,0,Math.PI*2)
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.strokeStyle='black'
    context.moveTo(x1,y1)
    context.lineWidth = 5
    context.lineTo(x2,y2)
    context.stroke()
    context.closePath()
}

//全屏问题
function autoSetCanvasSize(canvas){
    setCanvasSize()
    window.onresize=function(){
    setCanvasSize()
    }
    function setCanvasSize (event){
        var pageWidth=document.documentElement.clientWidth
        var pageHeight=document.documentElement.clientHeight
        canvas.width=pageWidth
        canvas.height=pageHeight
    }
}
// 所有实践的封装
function listenToMouse(canvas){
    canvas.onmousedown=function(event){
        var x = event.clientX
        var y = event.clientY
        // drawCircle(x,y,5)
        using=true
        if (eraserEnabled) {
        
            context.clearRect(x-5,y-5,10,10)
        } else {
            lastPoint={x:x,y:y}
        }
    }
    canvas.onmousemove=function(event){
        var x = event.clientX
        var y = event.clientY  
        if (eraserEnabled) {
            if (using) {
                context.clearRect(x-5,y-5,10,10)
            }
        } 
        else {
            if (using) {
                var newPoint={
                    x:x,
                    y:y
                }
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                lastPoint=newPoint
            }
        }
    }
    
    canvas.onmouseup=function(event){
        using=false
    }
    
}


//橡皮擦
var eraserEnabled=false
eraser.onclick=function(){
    eraserEnabled=true
    actions.className='actions x'
}
brush.onclick=function(){
   eraserEnabled=false
   actions.className='actions '

}