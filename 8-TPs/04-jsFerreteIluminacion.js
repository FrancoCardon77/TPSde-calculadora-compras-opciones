/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let lamparitas;
  let precio = 35;
  let total;
  let precioTotal;
  let precioConDescuento;
  let marca;
  let mensaje;

  lamparitas = parseInt(document.getElementById("txtIdCantidad").value);
  precio = parseInt(precio);
  marca = document.getElementById("Marca").value;

  precioTotal = lamparitas * precio;

  if (lamparitas >= 6) {
    precioConDescuento = precioTotal * 50;
  } else if (lamparitas == 5) {
    if (marca == "ArgentinaLuz") {
      precioConDescuento = precioTotal * 40;
    } else {
      precioConDescuento = precioTotal * 40;
    }
  } else if (
    lamparitas == 4 &&
    (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
  ) {
    precioConDescuento = precioTotal * 25;
  } else if (lamparitas == 4) {
    precioConDescuento = precioTotal * 20;
  }
  if (lamparitas == 3 && marca == "ArgentinaLuz") {
    precioConDescuento = precioTotal * 15;
  } else if (lamparitas == 3 && marca == "FelipeLamparas") {
    precioConDescuento = precioTotal * 10;
  } else if (lamparitas == 3) {
    precioConDescuento = precioTotal * 5;
  }
  total = precioConDescuento / 100;
  if (total >= 120) {
    total = parseInt(total * 1.1);
    mensaje = `Usted pago 10% de IIBB.”, siendo ${total} el impuesto que se pagó. `;
    alert(`${mensaje}`);
  }

  document.getElementById("txtIdprecioDescuento").value = total;
}
