/*
calcular el sueldo semanal de un trabajador con base en las horas que trabaja
Ej: Carol gana 10000 por hora y trabaja 20 horas a la semana
2000000
*/

function salaryrweek(hours, payment){
  return = hours * payment;
}

/*
calcular la cantidad de digitos de un numero, por ej: 1986, deberá retornar 4 */

function numberOfDigits(number){
  var counter = 0;
  var digits = number.toString(); // "1986"

  for (var i = 0; i< digits.lenght; i++){
      counter++;
  }
  return counter;
}

/*
"natalia".split("")
(7) ["n", "a", "t", "a", "l", "i", "a"]
"natalia".split("").reverse().join("")
"ailatan"
*/

/*
verificando si una palabra es palindrome
*/

function palindrome(word){ //arepera
  var long = word.length; // long = 7
  for(var i = 0; i< word.length; i++){  // 0<7
    if(word[i] !== word[long -1-i]) { // arepera [0] "a" !== arepera[7-1-0]
      return false;
    }
    else{
    return true;
    }
  }
}
