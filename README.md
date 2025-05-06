# Rickedex

A Rickedex é um projeto que tem como objetivo aprender sobre o uso e importação de API, além de praticar minhas habilidades com as tecnologias Html, Css e Javascript. A aplicação permite que o usuário:
- Faça pesquisa de personagens ou localizações específicas da série de Rick and Morty.
- Utilize a barra de pesquisa para buscas com nome
- Utilize filtros de personagem, espécie ou gênero.

# Tecnologias implementadas

## HTML e CSS

### Fonts
font: Poppins.
font-weight: Textos comuns: 400(Normal); Títulos: 500(Medium); Botões: 400(Medium);

### Estilização de botão

### Estilização de background

#### A respeito do background utilizei um tema light e um tema dark.

#### Tema light:
background-color:
text-color:
card-background:

#### Tema dark:
background-color:
text-color:
card-background:

# API Endpoints

## Requisição de Get em todos os personagens
```
GET https://rickandmortyapi.com/api/character
```
## Requisição de Get em um personagem específico
```
GET https://rickandmortyapi.com/api/character/2
```

```
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}
```

## Requisição de Get para filtrar certas características
Para filtrar características após a requisição se deve adiionar `?` e depois o campo e o valor dele `<query>=<value>` . Caso tenha mais de um filtro utilize `&` .
```
GET https://rickandmortyapi.com/api/character/?name=rick&status=alive
```

```
"info": {
    "count": 29,
    "pages": 2,
    "next": "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        //...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
```
