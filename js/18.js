function sumar (num1, num2) { //num1 y num2 son parametros de la función 
    console.log(num1 + num2);
};
sumar(15,10); // Se le pasa los argumentos o valores relales
sumar(155,100);
sumar(52,25);
sumar(1,1);
sumar(0); //NaN: Not a Number
sumar(); //NaN


const sumar2 = function(num1, num2) {
    console.log(num1+num2);
};
sumar2(5,10);

function restar (num1 = 0 , num2 = 0) { //Se le pueden poner parametros predeterminados, en caso de que falten los argumentos
    console.log(num1 - num2);
};
restar(2,6);
restar(469,55);
restar(50); // Se evita de que el resultado salga nulo 
restar();