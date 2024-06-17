const countryName = new URLSearchParams(window.location.search).get('name');
const flagImage = document.querySelector('.country-details img');
const countryNameH1 = document.querySelector('.country-details h1');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies');
const languages = document.querySelector('.languages');
const borderCountries = document.querySelector('.border-countries');
const themeChanger = document.querySelector('.theme-changer');


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(res=>res.json())
.then(([country])=>{
    console.log(country);
    // console.log(Object.values(country.name.nativeName)[0].common);
    // console.log( Object.keys(country.name.nativeName));
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;

    if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    }
    else {
        nativeName.innerText = country.name.common;
    }

    population.innerText = country.population.toLocaleString('en-IN');
    region.innerText = country.region;
    subRegion.innerText = country.subregion ? country.subRegion : "Not Available";
    capital.innerText = country.capital ? country.capital.join(', ') : "Not Available";
    topLevelDomain.innerText = country?.tld.join(', ');

    if(country.currencies){
        currencies.innerText = Object.values(country.currencies).map(currency=>currency.name).join(', ')
    }
    else{
        currencies.innerText = "Not Avalilable";
    }

    languages.innerText = country.languages ? Object.values(country.languages).join(", ") : "Not Available";

    if(country.borders){
        country.borders.forEach((border)=>{
            console.log(border);
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then(([borderCountry])=>{
                // console.log(borderCountry);
                const borderCountryTag = document.createElement('a');
                borderCountryTag.href = `/countries-api-project/country.html?name=${borderCountry.name.common}`
                borderCountryTag.innerText = borderCountry.name.common;
                borderCountries.append(borderCountryTag)
            })
        })
    }
    else {
        borderCountries.style.display = 'none';
    }

})


themeChanger.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})