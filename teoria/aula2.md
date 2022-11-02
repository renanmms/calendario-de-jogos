# Aula 2 - CSS

## O que é CSS

- Cascading Style Sheets
- Serve para estilizar o HTML
- Representação visual para o cliente

## Declaração

- No CSS temos um conjunto de seletores que estilizamos com propriedades e valores.
- Abaixo temos um exemplo de sintaxe onde a tag `<body>` é estilizada com uma tela de fundo preta.

```

body {
	background-color: black;
}

```

- O seletor é a própria tag `<body>`, a propriedade é o `background-color`, e por fim o valor que é `black`.

## Cascata

- Caso haja mais de um seletor, o último seletor é o mais relevante.

```

body {
	background-color: black;
}

body {
	background-color: white;
}

body {
	background-color: red;
}

```

- No exemplo acima, o último seletor vai ser aplicado pois é o último que foi aplicado, portanto a tela de fundo fica com uma cor vermelha.
- Uma analogia, por exemplo, é uma casca de laranja, você só enxerga a casca mais superficial da fruta com a cor laranja, se tirar a casca vai ver uma cor branca, se tirar mais ainda vai ver a polpa.

## Especificidade

- Vimos como funciona a cascata, porém ela pode ser quebrada de acordo com a **especificadade** do seletor, que é um peso indicando qual estilo vai ser aplicado primeiro.

***Exemplo: ***

*index.html*

```

<p id="primeiro" > Isso é um parágrafo </p>
<p class="segunda" > Isso é um outro parágrafo </p>

```

*index.css*

```

#primeiro {
	color: green
}

.segundo {
	color: blue
}

p {
	color: red;
}

```

- No exemplo acima vemos duas tags de parágrafos no *index.html*, e três seletores no *index.css*, o seletor com maior peso é o `primeiro` e a `segunda`, então os parágrafos vão ficar com as cores verde e azul respectivamente.
- O último seletor, não vai ser aplicado por ter um peso menor na especificidade.	


## Box Model

- Todos os elementos HTML são como *caixas*, cada caixa possui o conteúdo, uma largura, altura, preenchimento, margem e bordas.

