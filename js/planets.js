const requestPlanetsURL = 'https://dragonball-api.com/api/planets';

async function fetchAllPlanetsJsons() {
    let allPlanets = [];
    let currentPlanetsURL = requestPlanetsURL;
    let totalPlanetsPages = 1;

    const firstPlanetResponse = await fetch(currentPlanetsURL);
    const firstData = await firstPlanetResponse.json();
    
    allPlanets = allPlanets.concat(firstData.items);
    totalPlanetsPages = firstData.meta.totalPages;
    currentPlanetsURL = firstData.links.next;

    console.log(totalPlanetsPages)

    for (let page = 1; page < totalPlanetsPages; page++) {
        const response = await fetch(currentPlanetsURL);
        const data = await response.json();

        allPlanets = allPlanets.concat(data.items);
        currenPlanetstURL = data.links.next;
    }
    return allPlanets 
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
                <p>Description: ${planet_description}</p>
            </div>
        `;
    });
});