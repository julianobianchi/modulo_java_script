const veiculos =[
    {modelo : "Passeio", marca: "Nissam"},
    {modelo : "Passeio", marca: "BMW"},
    {modelo : "Passeio", marca: "Fiat"},
    {modelo : "Esportivo", marca: "Honda"},
    {modelo : "Esportivo", marca: "Porshe"},
    {modelo : "Esportivo", marca: "Tesla"},
    
];
const exibe_veiculos = function(){
    const render = document.querySelector('#render');
    render.innerText = "";

    for(veiculo of veiculos){
        render.innerHTML += `
        <div style="width: 25%; margin:10px;">
            <h1>Modelo: <b>${veiculo.modelo}</b></h1>
            <h2>Modelo: <b>${veiculo.marca}</b></h2>
        </div>
        `;

    }
}