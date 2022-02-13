/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = 5* (fahrenheit -32);

    fahrenheit = fahrenheit /9;
    





    alert(`la cantidad de centigrados son ${fahrenheit.toFixed(1)}.`);

    

	
}

function CentigradosFahrenheit () 
{
    let centigrados;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    centigrados = 32+ (centigrados * 9/5);

    alert(`la cantidad de fahrenheit es ${centigrados}`)
	
}
