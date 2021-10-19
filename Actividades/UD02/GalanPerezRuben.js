// Actividad 1
function actividad1() {
    console.log("Hola mundo"); //Mostrar mensaje por consola
    document.getElementById("resultados").innerHTML = "Hola mundo"; //Introducir el texto en un parrafo con el id resultado
    alert("Hola mundo"); //Ventana emergente con el mensaje "Hola mundo"
}
//Actividad 2
function actividad2() {
    let cadena = "";
    let numeros = [];

    cadena = document.getElementById("entrada").ariaValueMax;
    numeros = cadena.split(",");
    if (numeros.some(mayor10)) {
        document.getElementById("resultados").innerHTML = "Existe un valor mayor que 10";
    } else {
        document.getElementById("resultados").innerHTML = "No existe ningun valor mayor que 10";
    }
}
//Actividad 3
function actividad3() {
    var input = document.createElement("input");
    input.setAttribute('type', 'date');
    var parent = document.getElementById("parentDiv");
    parent.appendChild(input);

    let fecha = document.getElementsByTagName("input").value;
    console.log(fecha);

}
// Actividad 4
function actividad4() {
   let sueldo = parseInt(prompt("Introduce tu sueldo: ")); //Pedir sueldo
   let antigu = parseInt(prompt("Introduce tu antigüedad: ")); //Perdir años de antigüedad

    if ((sueldo < 500 && antigu > 10)) { //Comprobar que el sueldo es menor que 500 y la antigüedad es mayor de 10 años
        document.getElementById("resultados").innerHTML = "Tu nuevo salario es de: " + (sueldo*3) + "€"; //Muestra el mensaje si cumple los requisitos anteriores
    } else { //Si no lo cumple
        if ((sueldo < 500 && antigu < 10)) { //Comprobar que el sueldo es menor que 500 y la antigüedad es menor de 10 años
            document.getElementById("resultados").innerHTML = "Tu nuevo salario es de: " + (sueldo*2) + "€"; //Muestra el mensaje si cumple el requisitio anterior
        } else { //Si no cumple ninguna de las anteriores
            document.getElementById("resultados").innerHTML = "Tu salario sigue igual"; //Muestra este mensaje si no cumple ningun requisito
        }
    }
}
// Actividad 5
function actividad5() {
    let nota = parseFloat(prompt("Introduce una nota: ")); //Pedir una nota

    if (nota >= 1 && nota < 3) { //Si la nota introducida es mayor o igual que 1 y menor que 3
        document.getElementById("resultados").innerHTML = "Muy deficiente"; //Muestra este mensaje si se cumple el requisito anterior
    } else if (nota >=3 && nota < 5) { //Si la nota introducida es mayor o igual que 3 y menor que 5
        document.getElementById("resultados").innerHTML = "Insuficiente"; //Muestra este mensaje si se cumple el requisito anterior
    } else if (nota >= 5 && nota < 6) { //Si la nota introducida es mayor o igual que 5 y menor que 6
        document.getElementById("resultados").innerHTML = "Bien"; //Muestra este mensaje si se cumple el requisito anterior
    } else if (nota >= 6 && nota < 9) { //Si la nota introducida es mayor o igual que 6 y menor que 9
        document.getElementById("resultados").innerHTML ="Notable"; //Muestra este mensaje si se cumple el requisito anterior
    } else if (nota >= 9 && nota <=10){ //Si la nota introducida es mayor o igual que 9 y menor o igual que 10
        document.getElementById("resultados").innerHTML = "Sobresaliente"; //Muestra este mensaje si se cumple el requisito anterior
    } else { //Si no cumple ninguno de los requisitos anteriores
        document.getElementById("resultados").innerHTML = "Nota incorrecta"; //Muestra este mensaje si introduce una nota incorrecta
    }
}
//Actividad 6
function actividad6() {

    let numero = parseInt(prompt("Introduce límite")); //Pedimos el número límite
    var pares = 2; //Creamos esta variable para establecer el límite inferior
    var cadena = ""; //Creamos esta variable para concatenar los resultados

    if (numero < 2) {
        document.getElementById("resultados").innerHTML = "Introduce un valor mayor o igual que 2";
    } else if (numero > 2){

        do { //Creamos un bucle para que vaya recorriendo los números

            if (pares % 2 == 0) { //Comprueba que el resto de la división es 0
                cadena = cadena + " " + pares; //Si se cumple se añade al resultado
            } //Si no cumple con el requisito no hace nada
            pares++; //Aumentamos el valor de la variable pares para que vaya subiendo de número en cada iteración del bucle hasta que llegue al límite que hemos introducido

        } while (numero != pares); //Condición que se debe cumplir para que se realize una nueva iteración
        
        document.getElementById("resultados").innerHTML = cadena; //Mostrar el resultado
    } else {
        document.getElementById("resultados").innerHTML = 2;
    }
}
//Actividad 7
function actividad7() {

    let numero = parseInt(prompt("Introduce límite")); //Pedimos el númeor límite
    var impares = 1; //Creamos esta variable para establece el límite inferior
    var cadena = ""; //Creamos esta variable para concatenar los resultados

    do { //Creamos un bucle para que vaya recorriendo los números

        if (impares % 2 != 0) { //Comprueba que el resto de la división no sea 0
            cadena = cadena + " " + impares; //Si se cumple se añade al resultado
        }
        impares++;  //Aumentamos el valor de la variable pares para que vaya subiendo de número en cada iteración del bucle hasta que llegue al límite que hemos introducido

    } while (numero != impares); //Condición que se debe cumplir para que se realize una nueva iteración
    
    document.getElementById("resultados").innerHTML = cadena; //Mostrar resultado
}
//Actividad 8
function actividad8() {

    var numero = parseInt(prompt("Introduce número")); //Pedimos un número al cual le sacaremos su tabla de multiplicar
    let cadena = ""; //Creamos esta variable para concatenar el resultado

    for (let i = 1; i <= 10; i++) { //Creamos este bucle para recorrer los números del 1 al 10 ambos incluidos
        cadena += numero + "*" + i + "=" + numero * i + "<br>"; //Concatenamos a la variable que hemos creado antes el resultado
    }
    document.getElementById("resultados").innerHTML = cadena ; //Mostrar el resultado
}
//Actividad 9
function actividad9() {

    var filas = parseInt(prompt("Introduce números de filas: ")); //Pedimos el número de filas
    var columnas = parseInt(prompt("Introduce números de columnas: ")); //Pedimos el número de columnas

    var tabla   = document.createElement("table"); //Creamos el elemento HTML tabla
    var tblBody = document.createElement("tbody"); //Creamos el elemento HTML del cuerpo de la tabla
  
    for (var i = 0; i < filas; i++) { //Creamos este bucle para crear tantas filas como el usuario introduzca en la variable filas
      var hilera = document.createElement("tr"); //Creamos el elemento HTML fila
  
      for (var j = 0; j < columnas; j++) { //Creamos este bucle para crear tantas columnas como el usuario introduzca en la variable columnas

        var celda = document.createElement("td"); //Creamos el elemento HTML columna
        var textoCelda = document.createTextNode("fila "+(i+1)+", columna "+(j + 1)); //Creamos una variable que contendra el siguiente texto
        celda.appendChild(textoCelda); //Introducimos el texto en la celda
        hilera.appendChild(celda); //Introducimos la celda en la fila
      }

      tblBody.appendChild(hilera); //Introducimos la fila en el cuerpo de la tabla
    }
  
    tabla.appendChild(tblBody); //Introducimos el cuerpo de la tabla en la tabla
    tabla.setAttribute("border", "2");
    document.getElementById("resultados").appendChild(tabla);
    tabla.setAttribute("border", "2"); //Le ponemos atributos a esa tabla
}
//Actividad 10
function actividad10() {
    var primo = parseInt(prompt("Introduce un número: ")); //Pedimos un número al usuario
    var esprimo = false; //Creamos una variable boolean;

    for (let i = 2; i <= primo/2; i++) { //Creamos un bucle para comprobar si el número es primo
        if (primo % i == 0) { //Comprobamos si el resto de la división es 0
            esprimo = true; //Si se cumple el requisito le cambiamos el valor a la variable a true
        }
    }

    if (esprimo || primo == 1) { //Comprobamos si el valor de la variable es true
        document.getElementById("resultados").innerHTML = "No es primo"; //Si se cumple el requisito muestra el siguiente mensaje
    } else { //Si el valor no es true
        document.getElementById("resultados").innerHTML = "Es primo"; //Muestra el siguiente mensaje
    }
}
//Actividad 11
function actividad11() {
    var numero1 = parseInt(prompt("Introduce operador 1")); //Pedimos un número al usuario
    var numero2 = parseInt(prompt("Introduce operador 2")); //Pedimos otro número al usuario

    function suma(numero1, numero2) { //Creamos una funcion suma que recoge 2 argumentos que son las variables anteriores
        return numero1 + numero2; //Devuelve la suma de los dos números
    }
    document.getElementById("resultados").innerHTML = suma(numero1, numero2); //Muestra el mensaje

}
//Actividad 12
function actividad12() {

    var numero = parseInt(prompt("Introduce año")); //Pedimos un año

    if (((numero % 4 == 0) && (numero % 100 != 0 )) || (numero % 400 == 0)) { //Comprobamos que se cumpla estos requisitos(Viene en la wikipedia)
        document.getElementById("resultados").innerHTML = "El año introducido es bisiesto"; //Si se cumplen los requisitos muestra este mensaje
    } else { //Si no se cumple
        document.getElementById("resultados").innerHTML = "El año introducido no es bisiesto"; //Muestra este mensaje
    }
}
//Actividad 13
function actividad13() {
    let numero1 = parseInt(prompt("Introduce altura: ")); //Pedimos la altura
    let numero2 =  parseInt(prompt("Introduce base: ")); //Pedimos la base

    document.getElementById("resultados").innerHTML = (2*numero1 + 2*numero2); //Muestra este mensaje

}
//Actividad 14
function actividad14() {

    numero = parseInt(prompt("Introduce un número para sacar el factorial")); //Pedimos un número
    total  = 1; //Creamos esta variable para ser el caso base
    var cadena  = ""; //Creamos esta variable para almcenar el resultado
    for (i=1; i<=numero; i++) { //Cremaos este bucle para recorrer los numeros de 1 al que usuario introduzca
		total = total * i; //Almacenamos el resultado en la varible total
        cadena =  cadena + " " + total; //Concatenamos el resultado
	}
    document.getElementById("resultados").innerHTML = numero + "!" + "=" + cadena; //Muestra este mensaje
}
function borrar(){
    document.getElementById("resultados").innerHTML = " "; //Para borrar el contenido del parrafo donde se encuentran los resultados
    document.getElementById("parentDiv").innerHTML = " "; //Para borrar el input de la fecha del ejercicio 2.2 Navidad
}