/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let sumaDeLosTres;

    productoUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    productoTres = parseInt (document.getElementById("txtIdPrecioTres").value);

    sumaDeLosTres = productoUno + productoDos + productoTres;

    alert(sumaDeLosTres);
	
}
function Promedio () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let losTres;
    let promedio;

    productoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    losTres = productoUno + productoDos + productoTres;

    promedio = losTres / 3;




    alert(promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let sumaDeLosTres;
    let importeConSuma;
    let importeConIva;

    productoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
    productoTres = parseFloat (document.getElementById("txtIdPrecioTres").value);

    sumaDeLosTres = productoUno + productoDos + productoTres;

    importeConSuma = sumaDeLosTres * 21/100;

    importeConIva = sumaDeLosTres + importeConSuma;


    
    alert(importeConIva.toFixed(2));
	
}