'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  // Destructuring
  const {
    name: { common },
    currencies,
    flags,
    population,
    languages,
    region,
  } = data;

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${Object.values(flags)[0]}" />
  <div class="country__data">
            <h3 class="country__name">${common}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${(
              +population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(currencies)[0].name
            }
            </p>
            </div>
            </article>
            `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// Coordinates 2: 19.037, 72.873
// Coordinates 3: -33.933, 18.474

const whereAmI = function (lat, lng) {
  // first request
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&accept-language=english&format=json`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with nominatim (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);

      // another request
      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
