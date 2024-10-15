const requestURL = '../json/dragons.json'; /*'http://localhost:3000/dragons';*/

async function fetchDragonsJsons() {
    const response = await fetch(requestURL);
    const dragons = await response.json();
    return dragons;
}

fetchDragonsJsons().then(dragon => {
    for (let index = 0; index < dragon.dragons.length; index++) {
        let dragon_name = dragon.dragons[index].name;
        let dragon_race = dragon.dragons[index].race;
        let dragon_ki = dragon.dragons[index].ki;
        let dragon_maxKi = dragon.dragons[index].maxKi;
        let dragon_gender = dragon.dragons[index].gender;
        let gragon_image = dragon.dragons[index].image;

        dragonSection.innerHTML += `
            <div>${dragon_name}</div>
            <p>${dragon_race} - ${dragon_gender}</p>
            <p>Base KI: ${dragon_ki}</p>
            <p>Total KI: ${dragon_maxKi}</p>
        `
    }
})