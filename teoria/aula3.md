# Aula 3 - Linguagem de Programação Javascript

## Ensinar o cmoputador

- Algoritmos são uma sequência de passos para atingir um objetivo

- Lógica de Programação corresponde a maneira de pensar

- Sintaxe corresponde a maneira correta de escrever um algoritmo

## Javascript: perdendo o medo de programar

- Linguagem de programação que é interpretada e executada nos browsers

- HTML é a estrutura, CSS é o estilo e o JS é a inteligência

- Não é Java, apesar dos nomes serem parecidos, são linguagens de programação diferentes!


### Por que Javascript?

- Muito utilizado para aplicativos WEB 

- Sites de empresas famosas utilizam o JS

- Moderna e Viva

### Instruções e sintaxe 

- Toda linguagem de programação é escrita com esses 2 princípios:

- Instruções
- Sintaxe

### Variáveis e Tipos de Dados

- Variáveis são espaços de memória onde são armazenados valores

- Elas podem possuir alguns tipos como por exemplo, números, texto, booleano, ponto flutuante, inteiro, etc.

```

// let são valores que podem ser alterados

let idade = 20;
idade = 22;

// const são valores que não podem ser alterados

const cor = 'Pardo';

```


### Funções

- São blocos de código que executam uma certa tarefa

- Facilitam o agrupamento de código, deixando-o mais organizado e com maior manutenibilidade

- Facilita no Reuso de código

```

function sayHello(){
	alert("Olá!");
}

const celular = {
    modelo: "Iphone 7",
    informacoes: function mostrarModelo() {
        alert(`O modelo do celular é ${celular.modelo}`);
    }
}

```

## Tudo é objeto!

- Objetos contém atributos e propriedades que podem ser colocadas

- Objetos também podem possuir métodos	


```

const celular = {
    modelo: "Iphone 7",
    informacoes: function mostrarModelo() {
        alert(`O modelo do celular é ${celular.modelo}`);
    }
}

```

