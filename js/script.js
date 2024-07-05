
//array
const perro1 = {
    nombre: "Kenkel",
    sexo: "Macho",
    edad: "2 meses",
    tamanio: "Pequenio",
    personalidad: "Mimoso"
}
const perro2 = {
    nombre: "Mily",
    sexo: "Hembra",
    edad: "4 anios",
    tamanio: "Mediano",
    personalidad: "Timida"
}
const perro3 = {
    nombre: "Tania",
    sexo: "Hembra",
    edad: "1 anio",
    tamanio: "Mediano",
    personalidad: "Divertida"
}
const perro4 = {
    nombre: "Apolo",
    sexo: "Macho",
    edad: "7 Meses",
    tamanio: "Mediano",
    personalidad: "Mimoso"
}

const gato1 = {
    nombre: "Menta",
    sexo: "Hembra",
    edad: "3 Meses",
    tamanio: "Pequenio",
    personalidad: "Mimoso"
}

const gato2 = {
    nombre: "Ruru",
    sexo: "Hembra",
    edad: "1 anio",
    tamanio: "Mediano",
    personalidad: "Miedoso"
}

const gato3 = {
    nombre: "Moncho",
    sexo: "Macho",
    edad: "11 meses",
    tamanio: "Grande",
    personalidad: "Jugueton"
}

const Perros = [perro1, perro2, perro3, perro4]
const Gatos = [gato1, gato2, gato3]

//funciones
function agregarGato(){
const otroGato = {
    nombre: prompt("Tiene algun nombre o lo llama de alguna manera?"),
    sexo: prompt ("Es macho o hembra?"),
    edad: prompt ("Es cachorro o adulto?"),
    tamanio: prompt ("Su tamanio es pequenio, mediano o grande?"),
    personalidad: prompt ("Como lo describiria? carinoso, miedoso, jugueton, etc.")
}

Gatos.push(otroGato)
console.log(Gatos)
}

function agregarPerro(){
    const otroPerro= {
        nombre: prompt("Tiene algun nombre o lo llama de alguna manera?"),
        sexo: prompt ("Es macho o hembra?"),
        edad: prompt ("Es cachorro o adulto?"),
        tamanio: prompt ("Su tamanio es pequenio, mediano o grande?"),
        personalidad: prompt ("Como lo describiria? carinoso, miedoso, jugueton, etc.")
    }
    
    Perros.push(otroPerro)
    console.log(Perros)
    }

function adoptar() {
    let Eleccion = prompt ("Le gustaria adoptar \n 1 - perro \n 2 - gato")
    if (Eleccion == "1") {
        console.log(Eleccion)
        alert ("A continuacion le dejamos una lista con los perros que hay en el refugio para adopcion")
        console.log(Perros)
        alert("Para mas informacion comunicarse al 11-67358921")
    }else if (Eleccion == "2") {
        console.log(Eleccion)
        alert ("A continuacion le dejamos una lista con los gatos que hay en el refugio para adopcion")
        console.log(Gatos)
        alert("Para mas informacion comunicarse al 11-67358921")
    }
}

function aniadirAnimal(){
    let Animal = prompt ("Se trata de \n 1 - Perro \n 2 - Gato")
        if (Animal == "2") {
            agregarGato()
        
        } else if (Animal == "1"){
            agregarPerro()       
        }
    alert("Muchas gracias! Lo sumamos a la lista de mascotas en adopcion")
}

let Continua = true
while (Continua) {

let Servicio = prompt ("Hola! Muchas gracias por visitarnos. \nIngrese: \n 1 para adopcion de mascotas \n 2 para informarnos sobre animal perdido \n 3 para salir")

//no logre que me tome el switch, solo entra en la opcion default
// switch (Servicio){
//     case 1:
//         adoptar()
//         break
//     case 2:
//         aniadirAnimal()   
//         break
//     case 3:
//         Continua = false
//         break
//     default:
//         alert("No es una opcion correcta")
//     }

    if(Servicio ==1){
        adoptar()
    }
    else if (Servicio ==2){
        aniadirAnimal()
    }
    else if (Servicio ==3){
        Continua = false
    }
    else{
        alert("No es una opcion correcta")

    }

}

