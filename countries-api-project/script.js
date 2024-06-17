const countriesContainer = document.querySelector('.countries-container');
const filterByRegion = document.querySelector('.filter-by-region');
const searchInput = document.querySelector('.search-container input');
const themeChanger = document.querySelector('.theme-changer');

let allCountriesData;


function renderCountries(data){
    countriesContainer.innerHTML = '';
    data.forEach((country) => {

        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href = `/countries-api-project/country.html?name=${country.name.common}`

        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital ? country.capital[0] : "Not Available"}</p>
            </div>
        `
        countriesContainer.append(countryCard)
    });
}

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data)=>{
        renderCountries(data);
        allCountriesData = data;
    })


filterByRegion.addEventListener('change', (e)=>{
    console.log(filterByRegion.value);
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(renderCountries)
})

    // new URLSearchParams(window.location.search).get('name')

searchInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    const filteredCountries = allCountriesData.filter((country)=>{
        return country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    })
    // console.log(filteredCountries);
    renderCountries(filteredCountries)
})


themeChanger.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})