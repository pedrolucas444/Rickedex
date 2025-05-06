const cardGrid = document.getElementById('cardGrid');

const genderColors = {
    Male: '#4A90E2',
    Female: '#FF69B4',
    Genderless: '#9E9E9E',
    unknown: '#BDBDBD'
  };
  
  const speciesColors = {
    Human: '#2ECC71',
    Alien: '#9B59B6',
    Robot: '#F39C12',
    Animal: '#E67E22',
    Cronenberg: '#D35400',
    Disease: '#C0392B',
    'Mythological Creature': '#8E44AD', // Chave com espaço (igual à API)
    Humanoid: '#3498DB',
    unknown: '#7F8C8D',
    Poopybutthole: '#2980B9',
  };

async function fetchCharacters(url = 'https://rickandmortyapi.com/api/character') {
  const res = await fetch(url);
  const data = await res.json();

  data.results.forEach(character => {
    const card = document.createElement('div');

    const genderColor = genderColors[character.gender] || 'white';
    const speciesColor = speciesColors[character.species] || 'white';

    card.className = 'card';
    card.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <h2>${character.name}</h2>
    <div class="tags-container">
        <p class="tag" style="background-color: ${genderColor}; color: white;">${character.gender}</p>
        <p class="tag" style="background-color: ${speciesColor}; color: white;">${character.species}</p>
    </div>
`;

//   <button class="card-btn">Detalhes</button> botao que talvez vai ser usado depois


    cardGrid.appendChild(card);
  });

  // Paginação (carrega próxima página automaticamente)
  if (data.info.next) {
    fetchCharacters(data.info.next);
  }
  

}

fetchCharacters();
