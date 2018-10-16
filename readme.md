# Jquery

## Sintaxe básica

Ao incluir o script do Jquery, a variável global `$` fica disponível para realizarmos operações com a biblioteca. O `$` é uma função que é utilizada para selecionar elementos na página, de forma similar ao document.querySelectorAll.

```
//seleciona todos os elemento p da página
$('p')

//seleciona todos os elementos com a classe azul da página 
$('.azul')
```

> Note o retorno da função `$` é sempre um vetor

## Operações mais comuns

- .css()

Consulta ou altera o css dos elementos selecionados.
docs: https://api.jquery.com/css/