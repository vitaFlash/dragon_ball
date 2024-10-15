const requestURL = 'https://dragonball-api.com/api/characters';


async function fetchAllCharactersJsons() {
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
}

fetchAllCharactersJsons().then(item => {
    
    item.items.forEach(character => {
        let character_name = character.name;
        let character_race = character.race;
        let character_ki = character.ki;
        let character_maxKi = character.maxKi;
        let character_gender = character.gender;
        let character_image = character.image;

        characterSection.innerHTML += `
            <div class="caracter_card">
                <img src=${character_image} alt="...">
                <p>${character_name}</p>
                <p>${character_race} - ${character_gender}</p>
                <p>Base KI: ${character_ki}</p>
                <p>Total KI: ${character_maxKi}</p>
            </div>
            `
    }
    )
})