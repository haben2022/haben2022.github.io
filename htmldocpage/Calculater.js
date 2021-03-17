"use strict"
/**
 * 
 */
function pageLoad(){
    let subTotal;
    let tipway;
    var total;
    var totalElem =document.getElementById('total');
    let calculate=document.getElementById("btnum")
    calculate.onclick=calccompute;
    
    function calccompute() {
         subTotal =Number(document.getElementById('subtotal').value); 
         tip=Number(document.getElementById('tipway').value); 
        total = (subTotal+subTotal*(tip/100));
        totalElem.innerHTML = '$' + total;
    }
}

function initial(){
    window.onload = pageLoad; 
}

initial();