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

    for (let page = 1; page < totalPages; page++) {
        const response = await fetch(currentURL);
        const data = await response.json();

        allPlanets = allPlanets.concat(data.items);
        currentURL = data.links.next;
    }
    return allPlanets;
}