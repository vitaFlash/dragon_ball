const requestURL = 'https://dragonball-api.com/api/characters';

async function fetchAllCharactersJsons() {
    let allCharacters = [];
    let currentURL = requestURL;
    let totalPages = 1;

    const firstResponse = await fetch(currentURL);
    const firstData = await firstResponse.json();
    
    allCharacters = allCharacters.concat(firstData.items);
    totalPages = firstData.meta.totalPages;
    currentURL = firstData.links.next;

    for (let page = 1; page < totalPages; page++) {
        const response = await fetch(currentURL);
        const data = await response.json();

        allCharacters = allCharacters.concat(data.items);
        currentURL = data.links.next;
    }
    return allCharacters;
}

fetchAllCharactersJsons().then(characters => {
    characters.forEach(character => {
        let character_name = character.name;
        let character_race = character.race;
        let character_ki = character.ki;
        let character_maxKi = character.maxKi;
        let character_gender = character.gender;
        let character_image = character.image;

        characterSection.innerHTML += `
            <div class="card">
                <img src="${character_image}" alt="${character_name}">
                <h2>${character_name}</h2>
                <p>${character_race} - ${character_gender}</p>
                <p>Base KI: ${character_ki}</p>
                <p>Total KI: ${character_maxKi}</p>
            </div>
        `;
    });
});