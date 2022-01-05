import { checkAuth, logout, updateNature, updateArchitecture, updateArt, defaultCity, getCity } from '../fetch-utils.js';

const cityName = document.querySelector('#city-name');
const natureFigure = document.querySelector('#nature-figure');
const architectureFigure = document.querySelector('#architecture-figure');
const artFigure = document.querySelector('#art-figure');
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
    console.log(city);
});

logoutButton.addEventListener('click', () => {
    logout();
});

natureSelect.addEventListener('change', async() => {
    // update value of city.nature in Supabase to option value
    await updateNature(natureSelect.value);
    const city = await getCity();
    console.log(city);
    // fetch current value of city.nature
    // render and append img element to natureFigure
    // assign img src attribute to corresponding image
});

architectureSelect.addEventListener('change', async() => {
    // update value of city.architecture in Supabase to option value
    await updateArchitecture(architectureSelect.value);
    const city = await getCity();
    console.log(city);
    // fetch current value of city.architecture
    // render and append img element to architectureFigure
    // assign img src attribute to corresponding image
});

artSelect.addEventListener('change', async() => {
    // update value of city.art in Supabase to option value
    await updateArt(artSelect.value);
    const city = await getCity();
    console.log(city);
    // fetch current value of city.art
    // render and append img element to artFigure
    // assign img src attribute to corresponding image
});

nameForm.addEventListener('submit', async() => {
    // update value of city.name in Supabase to input value
    // fetch current value of city.name
    // change textContent of cityName to value of city.name
});

sloganForm.addEventListener('submit', async() => {
    // fetch current value of city.slogans
    // push input value to city.slogans locally
    // insert current value of city.slogans (local) to city.slogans in Supabase
});