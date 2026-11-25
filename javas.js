function calcular(operacao){
    let numero1 = parseFloat(document.getElementById("n1").value);
    let numero2 = parseFloat(document.getElementById("n2").value);

    let resultado;

    if (isNaN(numero1) || isNaN(numero2)){
        resultado = "Preencha os dois campos";
    }
    
    if (operacao === "+") {
        resultado = numero1 + numero2 
    }
    else if(operacao === "-"){
        resultado = numero1 - numero2
    }
    else if (operacao === "*"){
        resultado = numero1 * numero2
    }
    else if (operacao === "/"){

        if (numero2 === 0){
            resultado = "Operação invalida, TENTE NOVAMENTE";
        }
        else{
            resultado = numero1 / numero2
        }
    }
    else{
        resultado = "Operação invalida, TENTE NOVAMENTE";
    }

    document.getElementById("result").innerText = resultado;

    
}
