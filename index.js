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


function drawCircle(x,y,radius){
    context.beginPath()
    context.arc(x,y,radius,0,Math.PI*2)
    context.stroke()
}
