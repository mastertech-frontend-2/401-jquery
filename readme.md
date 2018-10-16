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

#### .css()

```
//retorna cor do primeiro elementos p da página
$('p').css('color');

//altera a cor dos elementos p para azul
$('p').css('color', 'blue');
```

Consulta ou altera o css dos elementos selecionados.
[ver documentação](https://api.jquery.com/css/)

#### .html()
Consulta ou altera o conteúdo interno da tag dos elementos selecionados.
[ver documentação](https://api.jquery.com/html/)

```
//retorna o conteúdo do primeiro elemento p
$('p').html();

//altera o conteúdo dos elementos p para Olá
$('p').html('Olá');
```

#### .val()
Consulta ou altera o conteúdo interno da tag dos elementos selecionados.
[ver documentação](https://api.jquery.com/val/)

```
//retorna o valor do primeiro elemento input
$('input').val();

//altera o valor dos elementos input para José
$('input').val('é');
```

## Eventos
O Jquery tem uma sintaxe própria para atribuição funções para eventos do browser:

```
$('button').click(() => {
    //conteúdo da função
});
```

Seguem alguns eventos comuns:
- .click()
- .mouseover()
- .mouseleave()
- .keyup()

**Documentação:**
[Eventos de mouse](https://api.jquery.com/category/events/mouse-events/)
[Eventos de teclado](https://api.jquery.com/category/events/keyboard-events/)
[Eventos de formulário](https://api.jquery.com/category/events/form-events/)