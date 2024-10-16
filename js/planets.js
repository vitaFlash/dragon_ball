const requestURL = 'https://dragonball-api.com/api/planets';

async function fetchAllPlanetsJsons() {
    let allPlanets = [];
    let currentURL = requestURL;
    let totalPages = 1;

    const firstResponse = await fetch(currentURL);
    const firstData = await firstResponse.json();
    
    allPlanets = allCharacters.concat(firstData.items);
    totalPages = firstData.meta.totalPages;
    currentURL = firstData.links.next;

    console.log(totalPages)

    for (let page = 1; page < totalPages; page++) {
        const response = await fetch(currentURL);
        const data = await response.json();

        allPlanets = allPlanets.concat(data.items);
        currentURL = data.links.next;
    }
    return allPlanets;
}

fetchAllPlanetsJsons().then(planets => {
    planets.forEach(planet => {
        let planet_name = planet.name;
        let planet_isDestroyed = planet.isDestroyed;
        let planet_description = planet.description;
        let planet_image = planet.image;

        planetSection.innerHTML += `
            <div class="planet_card">
                <img src="${planet_image}" alt="${planet_image}">
                <h2>${planet_name}</h2>
                <p>${planet_isDestroyed}</p>
                <p>Base KI: ${planet_description}</p>
            </div>
        `;
    });
});