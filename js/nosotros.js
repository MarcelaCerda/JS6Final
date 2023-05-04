let cad1=`  `
for ( let elemento of fotos){
    cad1= cad1+ ` <img src=${elemento} > 
    `
}

document.querySelector("main").innerHTML=cad1