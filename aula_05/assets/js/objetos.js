const pessoa = {
    nome: "",
    sobrenome:"",
    ano_nascimento: 1990
}; // objeto

const pessoas = []; // array

// pessoa.nome = "Gabriel";
pessoa.sobrenome = "Silva";
console.log("Objeto:", pessoa);

// validar se uma chave existe

if(pessoa.sobrenome == undefined){
    console.log("na validação 1 a chave não existe");
}

if(!("sobrenome" in pessoa)){
    console.log("na validação 2 a chave não existe");
}

if(!pessoa.hasOwnProperty("sobrenome")){
    console.log("na validação 3 a chave não existe");
}

pessoa.ano_nascimento = 1989;
pessoa.calculaIdade = function(){
    return 2023 - this.ano_nascimento; 
};

pessoa.fullName = function() {return `${this.nome} ${this.sobrenome}`};

// pessoa.fullName2 = function() {
//     let fullname = ""
//     if(this.hasOwnProperty("nome")){
//         fullname += this.nome;
//     }

//     if(this.hasOwnProperty("sobrenome")){
//         fullname += " " + this.sobrenome;
//     }
//     return fullname;
// }
// arrow function () => {}

pessoa.endereco = {
    logradouro : "Rua xyz",
    numero: 147,
    complemento: 'casa',
    bairro: "Centro",
};
pessoa.hobbies = ["ler", 'ouvir Heavy Metal', 'dormir'];
pessoa.status_ativo = true;

console.log('nome:  ', pessoa.nome);
console.log("ano_nascimento: ", pessoa['ano_nascimento']);
// console.log("idade: ", pessoa.calculaIdade());
// console.log("Full name: ", pessoa.fullName());

// Extração de chaves e valores para um array
const chaves_do_objeto = Object.keys(pessoa);
const valores_do_objeto = Object.values(pessoa);

console.log('chaves: ', chaves_do_objeto);
console.log('valores: ', valores_do_objeto);

pessoas.push(pessoa);
// pessoas.push(structuredClone(pessoa)); // structuredClone deepcopy não funciona para clonar funções
pessoas.push({...pessoa}); // spreed operator 
pessoas.push(JSON.parse(JSON.stringify(pessoa))); // funções JSON converte para string e depois em  objeto novamente

const outraPessoa = {...pessoa};
outraPessoa.nome = "Joker";

pessoas[1].nome = "Maria";
pessoas[2].nome = "João";
// pessoas[3].nome = "Ana";
pessoas[1].status_ativo = false;
// pessoas[3].status_ativo = false;
console.log(pessoas);