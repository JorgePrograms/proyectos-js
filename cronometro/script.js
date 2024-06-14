const botonaInicioPausa=document.getElementById('inicio-pausa');
const botonReinicio=document.getElementById('reiniciar');
const hora=document.getElementById('tiempo');

let [segundos,minutos,horas]=[0,0,0];
let intervaloTiempo;
let estadoCronometro='pausado';

const actualizarHora=()=>{
    segundos++;
    if(segundos/60==1){
        segundos=0;
        minutos++;
    }
    if(minutos/60==1){
        minutos=0;
        horas++;
    }
    if(horas/24==1){
        horas=0;
    }
    const segundosConFormato=asignarFormarto(segundos);
    const minutosConFormato=asignarFormarto(minutos);
    const horasConFormato=asignarFormarto(horas);
    hora.textContent=`${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}

const asignarFormarto=(unidadDeTiempo)=>{
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonaInicioPausa.addEventListener('click',()=>{
    if(estadoCronometro==='pausado'){
        intervaloTiempo = setInterval(actualizarHora,1000);
        estadoCronometro='corriendo';
        botonaInicioPausa.innerHTML=`<i class="bi bi-pause"></i>`;
    }
    else{
        clearInterval(intervaloTiempo);
        estadoCronometro='pausado';
        botonaInicioPausa.innerHTML=`<i class="bi bi-play-fill"></i>`;
    }
})

botonReinicio.addEventListener('click',()=>{
    clearInterval(intervaloTiempo);
    [segundos,minutos,horas]=[0,0,0];
    hora.textContent=`00:00:00`;
    estadoCronometro='pausado';
    botonaInicioPausa.innerHTML=`<i class="bi bi-play-fill"></i>`;
})



