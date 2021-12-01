//Cambio de imagenes y titulos
let imagenes = ["img/Matrix.jpg","img/blade.jpg","img/inter.jpg","img/whatch.jpg","img/harry.jpg"];

let titulos =["Matrix","Blade","Interlestelar","Watchmen","Harry Poter"];

let fila = document.querySelectorAll('.fila');
fila[0].addEventListener('mouseover', ()=>{cambiar(imagenes[0],titulos[0])});
fila[1].addEventListener('mouseover', ()=>{cambiar(imagenes[1],titulos[1])});
fila[2].addEventListener('mouseover', ()=>{cambiar(imagenes[2],titulos[2])});
fila[3].addEventListener('mouseover', ()=>{cambiar(imagenes[3],titulos[3])});
fila[4].addEventListener('mouseover', ()=>{cambiar(imagenes[4],titulos[4])});

function cambiar(ruta, titulo){
    let imagenuno= document.querySelector('.img');
    imagenuno.src= ruta;
    let elemntotitulo= document.querySelector(".titulo");
    elemntotitulo.textContent=titulo;
}
// agregar y elimar peliculas
const tabla=document.getElementById('botones');

tabla.addEventListener('agregar', function(event,){
    event.preventDefault();
    let botonesData= new FormData(tabla);
    let excRef= document.getElementsByClassName('.exc');
    let newTransactionRowRef = excRef.insertRow(-1);
    let newTypeCellRef=newTransactionRowRef.inserCell(0);
})

function agregarFila(){
    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>';
  }
  
  function eliminarFila(){
    var table = document.getElementById("tablaprueba");
    var rowCount = table.rows.length;
   
    if(rowCount <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCount -1);
  }
  