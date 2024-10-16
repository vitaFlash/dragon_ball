document.getElementById('planetsButton').addEventListener('click', function() {
    window.location.href = 'planets.html';
  });
const requestURL = 'https://dragonball-api.com/api/characters';
let totalPages = 0;

async function fetchAllCharactersJsons() {
    const response = await fetch(requestURL);
    const data = await response.json();
    totalPages = data.meta.totalPages
    console.log(totalPages)
    return data
}

fetchAllCharactersJsons().then(item => {
    console.log(totalPages)
    item.items.forEach(character => {
        let character_name = character.name;
        let character_race = character.race;
        let character_ki = character.ki;
        let character_maxKi = character.maxKi;
        let character_gender = character.gender;
        let character_image = character.image;

        characterSection.innerHTML += `
            <div class="card">
                <img src=${character_image} alt="...">
                <h2>${character_name}</h2>
                <p>${character_race} - ${character_gender}</p>
                <p>Base KI: ${character_ki}</p>
                <p>Total KI: ${character_maxKi}</p>
            </div>
            `
    }
    )
})