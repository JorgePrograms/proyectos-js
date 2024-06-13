const boton=document.getElementById('cambiar');
const autor=document.getElementById('autor');
const cita=document.getElementById('cita');

const generarAleatorio=(minimo,maximo)=>{
    return Math.floor(Math.random()*(maximo-minimo+1)+minimo);
}

const cambiarCita=()=>{
    let indice=generarAleatorio(0,citas.length-1);
    autor.textContent=citas[indice].autor;
    cita.textContent=citas[indice].texto;
  
}
let indice=generarAleatorio(0,citas.length-1);
    cambiarCita();

boton.addEventListener('click',cambiarCita);