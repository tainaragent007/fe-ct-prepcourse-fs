/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

      // let primera = nombre[0].toUpperCase()
   // let resto = nomgre.substr(1)
   // return primera + resto

   // lo mas facil, solo con una linea de codigo
   // return nombre[0].toUpperCase() + nombre.substr(1)

   let primera = nombre[0].toUpperCase()
   for (let i = 1; i < nombre.length; i++){
      primera = primera+ nombre[i]

   }
   return primera;

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1, num2)
   // return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // let resultado = 0;
   // for(var i = 0; i < arrayOfNumbers; i++){
   //    resultado += arrayOfNumbers[i];
   // }
   // cb(resultado);
   let resultado = arrayOfNumbers.reduce(
      (acumulador, index)=>acumulador + index,
      0
   );
   cb(resultado);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   let nuevoArreglo = [];
   // for(let i = 0; i < array.length; i++){
   //    nuevoArreglo.push(cb(array[i]))
   // }
   array.forEach(element => {
      nuevoArreglo.push(cb(element))
   })

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   nuevoArreglo = array.map((element) => {
      return cb(element);
   })

   return nuevoArreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // 1). Metodo For Each
   let nuevoArray = [];
   // arrayOfStrings.forEach(element =>{
   // // if(element[0] === 'a' {...}) se puede usar [] o .charAt()
   //    if(element.charAt(0) === 'a'){
   //       nuevoArray.push(element);
   //    }
   // })
   return arrayOfStrings.filter(element => element[0] === 'a')
   // return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
