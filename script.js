let registrar = []

while (true) {
	let nome = prompt ('Digite o nome do Filme');
	let anos
	while (true) {
		anos = Number(prompt('Anos desde que foi lançado o Filme?'));
		if (! Number.isNaN (anos)) {
			break
		}
		alert('Data inválida, por favor digite um número');
	}

	let lucros = prompt('Qual foi a bilheteria').toLowerCase();
	lucros = lucros[0].toUpperCase() + lucros.slice(1);

	let filme = {
		nome, anos,
		milhões: lucros
	}
	registrar.push(filme);

	let novoRegistrar = confirm('Deseja adicionar um novo filme? Ok/Clr');
	if (novoRegistrar === false) {
		break
	}
}

console.table(registrar);
console.log(registrar);

let maisAntigos = osMaisAntigos(registrar);
console.log('Registro de filmes mais antigos:');

for(let filme of maisAntigos) {
	console.log(`${filme.nome}: ${filme.anos} anos desde o lançamento`)
}

let quantiaDeBilheteria = AgruparBilheteria(registrar)

for (let milhões of Object.keys(quantiaDeBilheteria)) {
	console.log(`Quantia na Bilheteria do Filme ${milhões}:`)
	for (let filme of quantiaDeBilheteria[milhões]) {
		console.log(`- ${filme.nome}`)
	}
}

function osMaisAntigos(registrar) {
	let maisAntigos = [ registrar[0] ]
	
	for (let registro of registrar.slice(1)) {
		if (registro.anos > maisAntigos[0].anos) {
			maisAntigos = [ registro ]
		}else if (registro.anos === maisAntigos[0].anos) {
			maisAntigos.push(registro)
		}
	}
	return maisAntigos
}

function AgruparBilheteria(registrar) {
	let quantiaDeBilheteria = {}

	for (let registro of registrar) {
		if (typeof quantiaDeBilheteria[registro.milhões] === 'undefined') {
			quantiaDeBilheteria[registro.milhões] = [registro]
		} else{
			quantiaDeBilheteria[registro.milhões].push(registro)
		}
	}

return quantiaDeBilheteria
}

	function Mensagem_html () {
    var Mensagem = document.querySelector ('section')
	var Mensagem1 = document.createElement ('p')
    Mensagem1.textContent = `Vão ser ${maisAntigos.length}  O(s) Filme(s) mais Antigo(s):`
    Mensagem.appendChild (Mensagem1)

	var Mensagem_filmes = document.createElement ('p')
    let lista_de_filmes = ""
    for (let i=0; i<nome.length-1;i++){
    lista_de_filmes = lista_de_filmes + `${nome[i].nome}, `
    }
    lista_de_filmes = lista_de_filmes.slice(0, -2) + ` e ${nome[nome.length-1].nome}`
    Mensagem_filmes.textContent = lista_de_filmes
    Mensagem.appendChild (Mensagem_filmes)
	
}