const pegaInput = function(elemento){
    const render_number = document.getElementById ('render_number');

    let valor = new Number(elemento.value.replace(",","."));

    if(Number.isNaN(Number.parseInt(valor))){
        render_number.innerHTML = '<b style="color:red">Informe um número</b>';
        return;
    }
    render_number.innerHTML = `    
    ${typeof valor} <br>
    ${Number.parseInt(valor)} <br>
    ${Number.parseFloat(valor)} <br>
    ${valor.toPrecision(2)} <br>
    ${valor.toFixed(2)} <br>

    `; 
}