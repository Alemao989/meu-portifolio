function calcularSoma() {
    var numeroA = parseFloat(document.getElementById("numeroA").value);
    var numeroB = parseFloat(document.getElementById("numeroB").value);

    if (!isNaN(numeroA) && !isNaN(numeroB)){
        var resultado = numeroA + numeroB;
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " + numeroB + " é: " + resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, digite números válidos.";
    }

    }
     function limparTela() {
        document.getElementById("resultado").innerHTML ="";
       
        document.getElementById("numeroA").value = "";
        document.getElementById("numeroB").value = "";
     }


