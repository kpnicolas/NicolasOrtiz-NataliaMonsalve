div = document.getElementById('mostrarOcultar');
div.style.display = 'none';
function mostrar(){

    document.getElementById('mostrarOcultar').style.display="block";
    
    
    }
    
    function ocultar(){
    
        document.getElementById('mostrarOcultar').style.display="none";
    
    
    }
    
    function delRow(currElement) {
        var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(parentRowIndex);
    }
    
    function insRow(id) {
       var filas = document.getElementById("myTable").rows.length;
       var x = document.getElementById(id).insertRow(filas);
       var y = x.insertCell(0);
       var z = x.insertCell(1);
       y.innerHTML = '<input type="text" id="fname">';
       z.innerHTML ='<button id="btn" name="btn" > Delete</button>';
    }
    
    function sumar(){
        div = document.getElementById('mostrarOcultar');
div.style.display = 'block';
        var num1 = document.getElementById('n1').value;
        var num2 = document.getElementById('n2').value;
        var suma=parseInt(num1)+parseInt(num2);
        document.getElementById('suma').innerHTML = 'La suma es '+suma;
    }
    
    function restar(){
        div = document.getElementById('mostrarOcultar');
        div.style.display = 'block';
        var n1=document.getElementById('n1').value;
       var n2=document.getElementById('n2').value;
       var resta=parseInt(n1)-parseInt(n2);
       document.getElementById('resta').innerHTML= 'La resta es '+resta;
    }
    
    function dividir(){
        div = document.getElementById('mostrarOcultar');
div.style.display = 'block';
        var n1=document.getElementById('n1').value;
        var n2=document.getElementById('n2').value;
        var dividir=parseFloat(n1)/parseFloat(n2);
        document.getElementById('dividir').innerHTML= 'La divición es '+dividir;
     }
     
    
    