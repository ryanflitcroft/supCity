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
    // update value of city.nature in Supabase to option value
    await updateNature(natureSelect.value);
    // fetch current value of city.nature
    const city = await getCity();
    displayCity(city);
    // render and append img element to natureFigure
    // assign img src attribute to corresponding image
});

architectureSelect.addEventListener('change', async() => {
    // update value of city.architecture in Supabase to option value
    await updateArchitecture(architectureSelect.value);
    // fetch current value of city.architecture
    const city = await getCity();
    displayCity(city);
    // render and append img element to architectureFigure
    // assign img src attribute to corresponding image
});

artSelect.addEventListener('change', async() => {
    // update value of city.art in Supabase to option value
    await updateArt(artSelect.value);
    // fetch current value of city.art
    const city = await getCity();
    displayCity(city);
    // render and append img element to artFigure
    // assign img src attribute to corresponding image
});

nameForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(nameForm);
    const cityName = data.get('name');
    // update value of city.name in Supabase to input value
    // console.log(cityName);
    await updateName(cityName);
    const city = await getCity();
    console.log(city);
    displayCity(city);
    // fetch current value of city.name
    // change textContent of cityName to value of city.name
});

sloganForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(sloganForm);
    const slogan = data.get('slogan');

    const city = await getCity();
    const citySlogans = city.slogans;
    citySlogans.push(slogan);

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