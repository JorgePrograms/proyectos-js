const input=document.getElementById('ingresar-tarea');
const boton=document.getElementById('boton');
const listaDeTarea=document.getElementById('lista-de-tareas');


const agregarTarea=()=>{
    if(input.value){
        //Crear tarea
        let tareaNueva=document.createElement('div');
        tareaNueva.classList.add('tarea');

        //Texto ingresado por usario
        let texto=document.createElement('p');
        texto.innerText=input.value;
        tareaNueva.appendChild(texto);

        //Crear contenedor de  iconos
        let iconos=document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        //Agregar iconos
        let completar=document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill','check');
        completar.addEventListener('click',completarTarea);

        let eliminar=document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar,eliminar);

        listaDeTarea.appendChild(tareaNueva);

        input.value='';

    }

}

const completarTarea =(e)=>{
    let tarea=e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');

    let icono=e.target;
    if(tarea.classList.contains('completada')){
        icono.classList.remove('bi-check-circle-fill','check');
        icono.classList.add('bi-circle');
    }
    else{
        icono.classList.remove('bi-circle');
        icono.classList.add('bi-check-circle-fill','check');
    }
}
const eliminarTarea=(e)=>{
    let tarea=e.target.parentNode.parentNode;
    tarea.remove();
}


boton.addEventListener('click',agregarTarea);
input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        agregarTarea();
    }
})