
window.addEventListener('load', () => {
    var tamanioCanvas = document.getElementById('instancia1');
    var ctx = tamanioCanvas.getContext('2d');

    //ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 
    ctx.fillStyle = '#ff0000'
    // (X - Y - W - H)
    ctx.fillRect(50, 30, 50, 200);
    ctx.font = "15px Times";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("RAM", 58, 250);
    
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(200, 30, 50, 200);
    ctx.font = "15px Times";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("PROCESADOR ", 177, 250);
});



window.addEventListener('load', () => {
    var numCuadrados = 20;
    var tamanio = 20;
    var espacio = 10;
    document.getElementById('server2').width = (numCuadrados*tamanio) + ((numCuadrados-1)*espacio);
    var tamanioCanvas = document.getElementById('server2');
    var ctx = tamanioCanvas.getContext('2d');
    
    for(var i = 0; i < numCuadrados; i++){
        if(i%5 == 0){
            ctx.fillStyle = '#ff0000'
            // (X - Y - W - H)
            ctx.fillRect(tamanio*i + espacio*i, 0, tamanio, tamanio);
        } else {
            ctx.fillStyle = '#008000'
            ctx.fillRect(tamanio*i + espacio*i, 0, tamanio, tamanio);
        }
    }

    $(function(){
        if(ctx.fillStyle == '#ff0000'){
            $("#btnServ2").show();
            //return false;
        } else {
            $("#btnServ2").hide();
        }
      })
});

/*
window.addEventListener('load', () => {
    var tamCanvas = document.getElementById('server2');
    var ctx = tamCanvas.getContext('2d');
    //ctx.fillStyle = '#FF0000'
    //ctx.fillRect(0, 0, 200, 150);
    var numCuadrados = 10;
    var tam = 20;
    //var espaciado = (tamCanvas-tam)/(numCuadrados-1);
    var espaciado = 10;
    /*
    ctx.fillRect(0, 0, tam, tam);
    ctx.fillRect(110, 0, tam, tam);
    ctx.fillRect(220, 0, tam, tam);
    

    for(var i = 0; i < numCuadrados; i++){
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 
        //ctx.fillStyle = '#FF0000'
        // (X - Y - W - H)
        //ctx.fillRect(i*espaciado + i*xInicial, i*espaciado, tam, tam);
    }
});
*/

/*
var tamCanvas = 360;
var numCuadrados = 10;
var tam = 100;
var espaciado = (tamCanvas-tam)/(numCuadrados-1);

for(var i=0; i <numCuadrados; i++){
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 
    ctx.fillRect(i*espaciado, i*espaciado, tam, tam);
}
*/