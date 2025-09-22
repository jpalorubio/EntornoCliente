// 1 Escribir el código necesario para que realice esta operación “v1 * v2 + v3” y muestre el
// resultado por consola. Siendo los valores de v1, v2 y v3: v1=2 v2=4 v3=5
// A continuación, hacer lo mismo, pero con esta operación “v1 + v2 * v3”. Antes de ejecutarlo,
// pensad qué resultado obtendremos. ¿Has acertado?
// ¿Qué orden sigue JS para realizar las operaciones? ¿Cómo podemos cambiarlo?

let v1 = 2;
let v2 = 4;
let v3 = 5;

let rdo = v1 * v2 + v3;
console.log(rdo); //13
let rdo2 = v1 + v2 * v3;
console.log(rdo2); //22

// 3. ¿Cuál sería el resultado de las siguientes operaciones? a=5; a/=2; a+=1; a*=3; a--; a++;

let a = 5;
console.log((a /= 2)); //2,5
console.log((a += 1)); //3,5
console.log((a *= 3)); //10.5
console.log(a--); //9.5
console.log(a++); //10,5

// 4. Suma tres números tecleados por usuario y calcula la media, mostrando en la consola:
// “La suma es: RESULTADO_SUMA”
// “La media es: MEDIA”
let n1 = parseInt(prompt("Introduce n1"));
let n2 = parseInt(prompt("Introduce n2"));
let n3 = parseInt(prompt("Introduce n3"));
let RESULTADO_SUMA = n1 + n2 + n3;
let MEDIA = RESULTADO_SUMA / 3;
console.log("La media de " + n1 + "," + n2 + " y " + n3 + " es " + MEDIA);

// 5. Pide al usuario una cantidad de "millas náuticas" y muestra la equivalencia en metros.

let millas_nauticas = parseInt(prompt("Introduce millas"));
let millas_a_metro = 1852;
let resultado_ej5 = millas_nauticas * millas_a_metro;
alert(
  millas_nauticas +
    " millas nauticas equivalen a: " +
    resultado_ej5 +
    " metros."
);

// 6. Dado el siguiente código:
// let a = 5;
// let b = a++;
// Y este otro:
// let a = 5;
// let b = ++a;
// ¿Tendrá la variable ‘b’ el mismo valor en ambos scripts? ¿Por qué?

let aa = 5;
let b = aa++;
alert(b);
let a2 = 5;
let b2 = ++a2;
alert(b2);

//No, porque el + detras primero asigna el valor y luego suma.

// 7. ¿Que mostrará el siguiente código en la consola? ¿Por qué?
// let foo = ‘hola’;
// console.log( parseInt(foo) );
let foo = "hola";
console.log(parseInt(foo));

//Lo primero es que hola al ser una cadena de caracteres deberia de ir con "", en segundo lugar al intentar pasearlo a entero dira NaN(no es un numero).

// 8. Mostrar un mensaje con alert, como el que vemos en la imagen
alert(
  "Esto es un texto con \"comillas dobles\" y 'comillas simples', y además,\n formado por varias líneas."
);
