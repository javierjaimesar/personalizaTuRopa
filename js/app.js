const body = document.querySelector("body");
const ropaNegra = ["./img/remeranegra.png","./img/buzonegro.png","./img/sudaderanegra.png"];
const ropaBlanca = ["./img/remerablanca.png","./img/buzoblanco.png","./img/sudaderablanca.png"];
const ropaAzul = ["./img/remeraazul.png","./img/buzoazul.png","./img/sudaderaazul.png"];
const principal = document.querySelector(".principal");
const secundario = document.querySelector(".secundario");
const texto = document.querySelector(".texto");
const galeria = document.querySelector(".galeria");
const file = document.querySelector("#file");
const logo = document.querySelector(".logo");
const imagen = document.querySelector(".img");
const colorNegro = document.getElementById("negro");
const colorBlanco = document.getElementById("blanco");
const colorAzul = document.getElementById("azul");
const estampado = document.getElementById("estampado");

let fotos = [];
let cont = 0;
let cont2 = 0;

let atras = document.querySelector(".atras");
let adelante = document.querySelector(".adelante");
let img = document.querySelector(".ropa");

let contador = 0;

file.addEventListener("change", (e) => {
    
    const name = e.target.files[0];
    
	let img = URL.createObjectURL(name);

	logo.src = img;

    fotos.push(img);
    
    galeria.innerHTML += `
    <div class="cuadro">
        <img src="${img}" class="img">
        <img src="./img/cruz.png" class="cruz">
    </div>
    `
    file.value = "";
    file.blur();
    contador++;
});

// logo.addEventListener("click", () => {
    
//     if(fotos.length !== 0){
//         if(contador >= fotos.length){
//             contador = 0;
//         }
//         logo.src = fotos[contador];
//         contador++;
//     }
// });

galeria.addEventListener("click", (e) => {
    let imagen = e.target.firstElementChild;
    if(e.target.classList[0] === "cuadro"){
        logo.src = imagen.src;
    }else if(e.target.classList[0] === "img"){
        logo.src = e.target.src;
    }

});

colorBlanco.addEventListener("click", () => {

    img.src = ropaBlanca[cont];
    texto.style.color = "#000";
    
});

colorNegro.addEventListener("click", () =>{

    img.src = ropaNegra[cont];
    texto.style.color = "#fff";

});

colorAzul.addEventListener("click", () => {

    img.src = ropaAzul[cont];
    texto.style.color = "#fff";

});

principal.addEventListener("click", (e) => {

    let tgt = e.target;

    if(tgt == atras){
        if(cont > 0){
            img.src = ropaNegra[cont - 1];
            cont--;
        }else{
            img.src = ropaNegra[ropaNegra.length - 1];
            cont = ropaNegra.length - 1;
        }
        img.classList.add("negra");
        img.classList.remove("blanca");
    }else if(tgt == adelante){

        if(cont < ropaNegra.length - 1){
            img.src = ropaNegra[cont + 1];
            cont++;
        }else{
            img.src = ropaNegra[0];
            cont = 0;
        }
        img.classList.add("negra");
        img.classList.remove("blanca");
    }
});

body.addEventListener("click", (e) => {

    if(e.target.classList[0] == "cruz"){
        fotos.splice(fotos.indexOf(e.target.parentNode.firstChild.nextSibling.src),1);
        // fotosNuevo = fotos.filter((item) => item !==  (e.target.parentNode.firstChild.nextSibling.src))
        e.target.parentNode.remove();
        contador = 0;
        if(fotos.length == 0){
            logo.src = "";
        }else{
            logo.src = fotos[fotos.length - 1];
        }
    }

    file.value = "";
});

const imagenLogo = document.querySelector(".imagenLogo");
const resolucion = document.querySelector(".resolucion");
const tamanio = document.querySelector(".tamanio");

function onDrag({movementX,movementY}){
    let getStyle = window.getComputedStyle(imagenLogo);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    
    imagenLogo.style.left = `${left + movementX}px`;
    imagenLogo.style.top = `${top + movementY}px`;
    
    // resolucion.style.visibility = "visible";
}

logo.addEventListener("mousedown", () => {
    logo.addEventListener("mousemove",onDrag);
});

document.addEventListener("mouseup", () => {
    logo.removeEventListener("mousemove", onDrag);
});

// let suma = 0;
// let resta = 9;
// let margin = 5;
// const mas = document.querySelector(".mas");
// const menos = document.querySelector(".menos");

// mas.addEventListener("click", () => {
    
//     suma++;
//     console.log(resta);
//     if(suma > 0 && suma > 5){
//         logo.style.transform = `scale(1.${suma},1.${suma})`;
//         resolucion.style.marginTop = `${margin}px`;
//         margin = margin + 5;
//     }else if(resta <= 9 && resta >= 5){
//         resta++;
//         console.log(logo.style.transform);
//         logo.style.transform = `scale(0.${suma},0.${suma})`;
//         resolucion.style.marginTop = `${margin}px`;
//         margin = margin + 5;
//     }

// });

// menos.addEventListener("click", () => {
    
//     console.log(suma);
    
//     if(resta > 5 && resta <= 9){
//         resta--;
//         console.log(logo.style.transform);
//         logo.style.transform = `scale(0.${resta},0.${resta})`;
//         resolucion.style.marginTop = `${margin}px`;
//         margin = margin - 5;
//     }else if(suma >= 0 && suma >= 5){
//         suma--;
//         logo.style.transform = `scale(1.${suma},1.${suma})`;
//         resolucion.style.marginTop = `${margin}px`;
//         margin = margin - 5;
//     }

// });



