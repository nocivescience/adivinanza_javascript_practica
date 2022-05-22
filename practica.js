const entradaElement = document.getElementById('entrada');
const botonJugar = document.getElementById('jugar');
const palabras=['casa','perro','gato','coche'];
let palabraSeleccionada=palabras[Math.floor(Math.random()*palabras.length)];
function miPalabra(word){
    if(word===entradaElement.value){
        alert('Has acertado');
    }
}
function comprobar(){
    if(miPalabra(palabraSeleccionada)){
        document.querySelector('body').style.backgroundColor='green';
    }
    else{
        document.querySelector('body').style.backgroundColor='red';
    }
}
botonJugar.addEventListener('click',()=>{
    comprobar();
    if(entradaElement.value===palabraSeleccionada){
        alert('Has acertado');
    }else{
        alert('Has fallado');
    }
});
