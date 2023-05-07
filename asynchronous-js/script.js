'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// old way of doing AJAX

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  let data;
  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Destructuring
    const {
      name: { common },
      currencies,
      flags,
      population,
      languages,
      region,
    } = data;

    //   console.log(common, population, region);
    //   console.log(Object.values(currencies)[0].name);
    //   console.log(Object.values(flags)[0]);
    //   console.log(Object.values(languages)[0]);

    //   const html = `
    //     <article class="country">
    //           <img class="country__img" src="${data.flags.png}" />
    //           <div class="country__data">
    //             <h3 class="country__name">${data['name']['common']}</h3>
    //             <h4 class="country__region">${data.region}</h4>
    //             <p class="country__row"><span>👫</span>${(
    //               +data.population / 1000000
    //             ).toFixed(1)}</p>
    //             <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    //             <p class="country__row"><span>💰</span>${data.currencies[0].name}
    //             </p>
    //           </div>
    //         </article>
    //     `;
    const html = `
    <article class="country">
          <img class="country__img" src="${Object.values(flags)[0]}" />
          <div class="country__data">
            <h3 class="country__name">${common}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${(
              +population / 1000000
            ).toFixed(1)}</p>
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
  });
};

getCountryData('portugal')
getCountryData('usa')
getCountryData('germany')