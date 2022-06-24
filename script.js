let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let resFinal = document.querySelector('#resFinal');
let valores = [];

function umNumero(numero) { //Para delimitar os números que podem ser adicionados
    if(Number(numero) >= 1 && Number(numero) <=100) {
        return true;
    } else {
        return false;
    }
}

function naLista(numero, lista) { //Para saber se o número está na lista (no array)
    if(lista.indexOf(Number(numero)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(umNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        resFinal.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let posi in valores) {
            soma += valores[posi];
            if(valores[posi] > maior) {
                maior = valores[posi];
            }else if(valores[posi] < menor) {
                menor = valores[posi];
            }
        }
        media = soma / total;
        resFinal.innerHTML = '';
        resFinal.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resFinal.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resFinal.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resFinal.innerHTML += `<p>Somando todos os valores ${soma}.</p>`;
        resFinal.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;

    }
}