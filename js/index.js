let cad2=`
<button onclick="traerPersonajePreferido()">Traer Personaje Preferido</button> <br>
 <div class="contenedor">
`
for(let elemento of data){
    cad2= cad2+ `       
            <div class="tarjeta">
                <img src= ${elemento.image}   alt="producto">
                <div class="textocard">
                    <h2> ${elemento.name} </h2>
                    <p> ${elemento.species}  </p>
                    <p> ${elemento.gender} </p>
                    <button onclick=" guardarLocalStorage( '${elemento.name}')" >Personaje Preferido</button>
                </div>
            </div>
    `
}
cad2=cad2+`</div>`
console.log(cad2)
document.querySelector("main").innerHTML=cad2
function guardarLocalStorage(personaje){
    localStorage.setItem("personajePreferido", personaje)
}

function traerPersonajePreferido(){
    console.log(localStorage.getItem("personajePreferido"))
    alert(localStorage.getItem("personajePreferido"))
}





