import { checkAuth, logout, updateNature, updateArchitecture, updateArt, defaultCity, getCity, updateSlogans, updateName } from '../fetch-utils.js';

const cityName = document.querySelector('#city-name');
const natureImage = document.querySelector('#nature-image');
const architectureImage = document.querySelector('#architecture-image');
const artImage = document.querySelector('#art-image');
const natureSelect = document.querySelector('#nature-select');
const architectureSelect = document.querySelector('#architecture-select');
const artSelect = document.querySelector('#art-select');
const nameForm = document.querySelector('#name-form');
const sloganForm = document.querySelector('#slogan-form');
const sloganSection = document.querySelector('#slogan-section');

// console.log(
//     cityName,
//     natureFigure,
//     architectureFigure,
//     artFigure,
//     natureSelect,
//     architectureSelect,
//     artSelect,
//     nameForm,
//     sloganForm,
//     sloganSection
// );

checkAuth();

const logoutButton = document.getElementById('logout');

window.addEventListener('load', async() => {
    const city = await getCity();
    if (!city) {
        await defaultCity();
    }
    displayCity(city);
    natureSelect.value = city.nature;
    architectureSelect.value = city.architecture;
    artSelect.value = city.art;
});

logoutButton.addEventListener('click', () => {
    logout();
});

natureSelect.addEventListener('change', async() => {
    await updateNature(natureSelect.value);
    const city = await getCity();
    displayCity(city);
});

architectureSelect.addEventListener('change', async() => {
    await updateArchitecture(architectureSelect.value);
    const city = await getCity();
    displayCity(city);
});

artSelect.addEventListener('change', async() => {
    await updateArt(artSelect.value);
    const city = await getCity();
    displayCity(city);
});

nameForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(nameForm);
    const cityName = data.get('name');

    await updateName(cityName);
    const city = await getCity();

    nameForm.reset();
    displayCity(city);
});

sloganForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(sloganForm);
    const slogan = data.get('slogan');

    const city = await getCity();
    const citySlogans = city.slogans;
    citySlogans.push(slogan);

    sloganForm.reset();
    updateSlogans(citySlogans);
    displayCity(city);
});

function displayCity(city) {
    cityName.textContent = city.name;
    natureImage.src = `../assets/nature-${city.nature}.jpg`;
    architectureImage.src = `../assets/architecture-${city.architecture}.jpg`;
    artImage.src = `../assets/art-${city.art}.jpg`;

    sloganSection.textContent = '';
    for (let slogan of city.slogans) {
        const sloganEl = document.createElement('span');
        sloganEl.textContent = slogan;
        sloganSection.append(sloganEl);
    }
}