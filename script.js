const cardGrid = document.getElementById('cardGrid');
const characterDetails = document.getElementById('characterDetails');
const searchInput = document.querySelector('.searchbar');
let todosOsPersonagens = [];

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
  'Mythological Creature': '#8E44AD',
  Humanoid: '#3498DB',
  unknown: '#7F8C8D',
  Poopybutthole: '#2980B9',
};

async function fetchCharacters(url = 'https://rickandmortyapi.com/api/character') {
  const res = await fetch(url);
  const data = await res.json();

  todosOsPersonagens = [...todosOsPersonagens, ...data.results];

  renderCharacters(todosOsPersonagens);

  if (data.info.next) {
    fetchCharacters(data.info.next);
  }
}

function renderCharacters(lista) {
  cardGrid.innerHTML = ''; // Limpa os cards existentes

  lista.forEach(character => {
    criarCard(character);
  });
}

function criarCard(character) {
  const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);

  const cardElement = clone.querySelector('.card'); // Seleciona o elemento card dentro do clone
  const img = clone.querySelector('img');
  const h2 = clone.querySelector('h2');
  const genderTag = clone.querySelector('.gender');
  const speciesTag = clone.querySelector('.species');

  img.src = character.image;
  img.alt = character.name;
  h2.textContent = character.name;

  genderTag.textContent = character.gender;
  genderTag.style.backgroundColor = genderColors[character.gender];

  speciesTag.textContent = character.species;
  speciesTag.style.backgroundColor = speciesColors[character.species];

  // Adiciona o evento de clique diretamente ao cardElement
  cardElement.addEventListener('click', () => {
    showCharacterDetails(character);
  });

  cardGrid.appendChild(clone);
}

function showCharacterDetails(character) {
  // Exibe os detalhes no card grande
  const detailImage = document.getElementById('detailImage');
  const detailName = document.getElementById('detailName');
  const detailStatus = document.getElementById('detailStatus');
  const detailSpecies = document.getElementById('detailSpecies');
  const detailGender = document.getElementById('detailGender');
  const detailLocation = document.getElementById('detailLocation');
  const detailOrigin = document.getElementById('detailOrigin');

  detailImage.src = character.image;
  detailName.textContent = character.name;
  detailStatus.textContent = `Status: ${character.status}`;
  detailSpecies.textContent = `Espécie: ${character.species}`;
  detailGender.textContent = `Gênero: ${character.gender}`;
  detailLocation.textContent = `Localização: ${character.location.name}`;
  detailOrigin.textContent = `Origem: ${character.origin.name}`;

  // Torna visível o card grande
  characterDetails.style.display = 'block';
}

document.getElementById('closeDetails').addEventListener('click', () => {
  // Fecha o card de detalhes
  characterDetails.style.display = 'none';
});

searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();
  const filtrados = todosOsPersonagens.filter(p =>
    p.name.toLowerCase().includes(termo)
  );

  renderCharacters(filtrados);
});

fetchCharacters();