let si=document.getElementById('si');
si.addEventListener("click",function(e){
alert("Sabias que me dirias que si 💕");
});

let=document.getElementById('no');
no.addEventListener("mousemove",function(e){

    let x = Math.round(Math.random()* 95);
    let y = Math.round(Math.random()* 95);
    no.style.position = "absolute";
    no.style.left = x+"%";
    no.style.top = y+"%";

});


let close=document.getElementById('close');
close.addEventListener("click",function(e){
alert("Espero una respuesta no se vale hacer eso 😘, tramposa");
});
