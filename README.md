# 🎁 Projeto Amigo Secreto  

Este é um pequeno aplicativo web que permite adicionar nomes de amigos a uma lista e sortear aleatoriamente um deles. Ideal para brincadeiras como "Amigo Secreto".  

## 🚀 Funcionalidades  
- Adicionar amigos à lista  
- Exibir os amigos cadastrados  
- Sortear aleatoriamente um dos amigos  
- Exibir o resultado na tela  

## 🛠️ Tecnologias Utilizadas  
- HTML  
- CSS  
- JavaScript  

## 📷 Demonstração  
![Preview do projeto](preview.png)  

## 📂 Estrutura do Projeto  
```plaintext
📂 amigo-secreto/
│-- 📄 index.html     # Estrutura básica do site  
│-- 🎨 style.css      # Estilização do projeto  
│-- 🎲 script.js      # Lógica de sorteio e manipulação do DOM  

⚙️ Como Executar
Clone este repositório para sua máquina local: git clone https://github.com/kaanoliveira/desafio_amigo_secreto.git
Abra o arquivo index.html no navegador.

📌 Explicação do Código
1️⃣ Adicionando Amigos
javascript
Copiar
Editar
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('nomeAmigo').value;
    if (nomeAmigo.trim() !== '') {
        listaDeAmigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById('nomeAmigo').value = ''; // Limpa o campo
    }
}
📌 Explicação:

Obtém o nome digitado no input
Verifica se o campo não está vazio
Adiciona à lista e chama atualizarLista() para exibir os nomes

2️⃣ Sorteando um Amigo
javascript
Copiar
Editar
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    document.getElementById('resultado').innerHTML = `🎉 Amigo sorteado: ${listaDeAmigos[indiceSorteado]}`;
}
📌 Explicação:

Verifica se há amigos na lista
Gera um número aleatório usando Math.random() e Math.floor()
Exibe o nome do amigo sorteado na tela

📜 Licença
Este projeto está sob a licença MIT.

👨‍💻 Autor
Criado por Kaan Oliveira.

