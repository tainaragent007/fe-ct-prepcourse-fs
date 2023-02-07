/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // 1) []
   // 2) [[], [], ...]
   // 3) [[clave, valor], [clave, valor], [clave, valor], ...]
   // Tu código:
   var array = []; 
   //OPCION 1: for
   //for(var clave in array||objeto) --> clave=index||key
   //for(var valor of array) --> valor = array[index]


   // for (var clave in objeto) {
   //    array.push([clave, objeto[clave]])
   // }
   // return array;



   //OPCION3: 
   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
// OPCION 1: for
   /*
   var objeto = { };
   var arrayLetras = string.split(""); ///--> ['a', 'd',...]
   var letrasOrdenadas = arrayLetras.sort(); //-->['a', 'a', 'a', ...]
   for (var letra of letrasOrdenadas){
      if(!objeto[letra]){
         objeto[letra] = 1;
      }else{
         objeto[letra] += 1;
      }
   }
   return objeto;
   */

// OPCION 2: forEach
   var objeto = {};
   var arrayLetras = string.split("");
   var letrasOrdenadas = arrayLetras.sort();

   letrasOrdenadas.forEach((letra) => {
      if (!objeto[letra]) {
         objeto[letra] = 1;
      } else {
         objeto[letra] += 1;
      }
   });
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   // var arrayString = string.split('');
   // var mayusculas = [];
   // var minusculas = [];
   // for (var letra of arrayString) {
// OPCION 1:
//       if (letra === letra.toLowerCase()) {
//          minusculas.push(letra);
//       } else {
//          mayusculas.push(letra);
//       }
//    }
//    return mayusculas.join('') + minusculas.join('');

// OPCION 2:
   // switch (letra) {
   //    case letra.toLowerCase():
   //       minusculas.push(letra);
   //       break;
   //    case letra.toUpperCase():
   //       mayusculas.push(letra);
   //       break;
   //    default:
   //       break;
   //    }
   // }
   // return mayusculas.join('') + minusculas.join('');

// OPCION 3:
   var mayuscula = "";
   var minuscula = ""; 
   for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayuscula = mayuscula + string[i];
      } else {
         minuscula = minuscula + string[i];
      }
   }
   return mayuscula + minuscula;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let alrevez = '';
   let newFrase = frase.split(' '); // [The, Henry, Challenge, is, close!]
   for(let i = 0; i < newFrase.length; i++){
      if(i !== 0) alrevez += ' ' + newFrase[i].split('').reverse().join('');
      else alrevez += newFrase[i].split('').reverse().join('');
   }
   return alrevez;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // OPCION 1: 
   // let newString = '';
   // let newNum = String(numero); 
   // for(let i = newNum.length - 1; i >= 0; i--){
   //    newString = newString + newNum[i]
   // }
   // if(newString == numero){
   //    return "Es capicua"
   // }else{
   //    return "No es capicua"
   // }
   let newString = '';
   let newNum = String(numero).split('').reverse().join('');
   if(Number(newNum) === numero){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // OPCION 1 
   // let newString = '';
   // for(let i = 0; i < string.length; i++){
   //    if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
   //       newString +=string[i]
   //    }
   // }
   // return newString;
   // OPCION 2
   return string.split('').filter((e)=> e !== 'a' && e !== 'b' && e !== 'c').join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // OPCION 1 
//    return arrayOfStrings.sort(function(a, b){
//       return a.length - buscoInterseccion.length
//    })


// sortArray(['Your', 'are', 'beautiful', 'looking'])
// OPCION 2 
   // return arrayOfStrings.sort(function(a,b){

   // if(a.length < b.length) return 1
   // else if(a.length > b.length) return -1
   // else return 0
   // })

   for(let i = 0; i < arrayOfStrings.length; i++){
      for(let j = i + 1; j < arrayOfStrings.length; j++){
         if(arrayOfStrings[i].length > arrayOfStrings[j].length){
            let aux = arrayOfStrings[i]
            arrayOfStrings[i] = arrayOfStrings[j]
            arrayOfStrings[j] = aux
         }
      }
   }
   return arrayOfStrings
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // OPCION 1
   var newArr = [];

   for(let i = 0; i < array1.length; i++){
      for(let j = 0; j <array2.length; j++){
        if(array1[i] === array2[j]){
          newArr.push(array1[i])
        }
      }
   }

return newArr;
// OPCION 2:
// var newArr = [];

// for(let i = 0; i < array1.length; i++){
//   if(array2.includes(array1[i])){
//     newArr.push(array1[i])
//   }
// }
// return newArr;

// OPCION 3: 
// var newArr = array1.filter(coinside => array2.indexOf(coinside) !== -1)
// return newArr;

}
buscoInterseccion([4,2,3], [1,3,4])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
