const renderiza_string = function(elemento){
    const city = 'Brasil';
    const valor = elemento.value;
    const outro_valor = valor.concat("...");
    const vetor_da_string = valor.split('@');
    const string_do_vetor = vetor_da_string.join('-');
    const ultimos2Digitos = vetor_da_string[0].substring(0, 2);
    vetor_da_string[0] = ultimos2Digitos.padEnd(vetor_da_string[0].lenght, '*');
    const maskedNumber = vetor_da_string.join('@');

    console.log(valor);
    console.log(valor.trim());
    console.log(vetor_da_string);
    console.log(maskedNumber);

    const render = document.getElementById('render_string');
    render.innerHTML = `
    <p>${valor.toUpperCase()}</p>
    <p>${valor.toLowerCase()}</p>
    <p>${valor.substring(0, 4)}</p>
    <p>Começa com script? ${valor.startsWith("Script")}<p>
    <p>Termina com legal? ${valor.endsWith("legal")}<p>
    <p>Existe a palavra chuva? ${valor.trim().toLowerCase
    ().includes("chuva")}</p>
    <p>${outro_valor}</p>
    <p>${valor.replace("[email]", "enzo@local.br")}</p>
    <p>${valor.replaceAll("[telefone]", '9988-4455')}</p>
    <p>${valor.repeat(0)}</p>
    <p> A texto <b>${valor}</b> possui ${valor.length}
    caracteres</p>

    `;
}