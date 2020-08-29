div = document.getElementById('mostrarOcultar');
div.style.display = 'none';
mostrar = document.getElementById("mostrar");
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
    
    function enviar(){
        div = document.getElementById('mostrarOcultar');
        div.style.display = 'block';
        var nombre = document.getElementById('nombre').value;
        var rasa = document.getElementById('rasa').value;
        var edad = document.getElementById('edad').value;

        var suma= nombre  +'   |   ' + rasa + '   |   ' + edad;
        document.getElementById('suma').innerHTML = ''+suma;
 
    }