// lista vazia para adicionar nomes dos amigos
let listadeamigos = [];

//função para adicionar amigo
function adicionarAmigo() {
    //seleciona nome digitado(input) pelo ID do html
    const inputAmigo = document.querySelector('#amigo');
    //recebe valor digitado
    const nomeAmigo = inputAmigo.value.trim(); //trim() remove espaços extras 

// Verifica se o campo não está vazio
    if (nomeAmigo !== '') {
        // Adiciona o nome à lista de amigos
        listadeamigos.push(nomeAmigo);
        // Atualiza a lista exibida na página
        atualizarLista();

        // Limpa o campo de input
        inputAmigo.value = '';
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de recriar

    // Adiciona cada nome à lista como um item <li>
    listadeamigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


//Função para sortear amigos e validar lista de amigos 

function sortearAmigo() {
    // Capturar elemento HTML onde o resultado do sorteio será exibido
    const resultado = document.getElementById('resultado');
    // Verificar se há amigos na lista
    if (listadeamigos.length === 0){
        resultado.innerHTML = 'A lista de amigos está vazia.';
        return; // Sai da função se não houver amigos 
    }
    //Gera um indice aleatorio entre 0 e o ultimo indice do array 
    const indiceAleatorio = Math.floor(Math.random() * listadeamigos.length);

    //Acessando o amigo sorteado
    const amigoSorteado = listadeamigos[indiceAleatorio];

    //Exibe o nome do amigo sorteado no HTML
    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}





    



