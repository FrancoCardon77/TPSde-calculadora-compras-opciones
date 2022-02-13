/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let alambre;
    let largo;
    let ancho;
    let perimetro;

    largo = 2* parseFloat(document.getElementById("txtIdLargo").value);
    ancho = 2* parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = largo + ancho;
    
    document.getElementById("txtIdPerimetro").value = perimetro; 
    
    alambre = 3 * perimetro;
    
    alert(`El alambre a comprar para su terreno rectangular es: ${alambre} metros`);    

}
function Circulo () 
{
    let alambreNecesario;
    let diametro;
    let radio;

    diametro = parseFloat(document.getElementById("txtIdLargo").value);
    
    radio = diametro / 2;

    alambreNecesario = 3* radio;

    alert (`El alambre necesario para su terreno circular es: ${alambreNecesario} metros`);
}
function Materiales () 
{
    let contrapiso;
    let largo;
    let ancho;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    contrapiso = largo + ancho;

    cemento = 2 * contrapiso;
    cal = 3 * contrapiso;

    alert(`Para sus medidas va a precisar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);









	
}