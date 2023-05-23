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

  //   console.log(common, population, region);
  //   console.log(Object.values(currencies)[0].name);
  //   console.log(Object.values(flags)[0]);
  //   console.log(Object.values(languages)[0]);

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

//* Old way using XMLHttpRequest()
/*
    const getCountryAndNeighbour = function (country) {
    // old way of doing AJAX
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

// Callback hell -> nested cb (bad code)
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

//* Modern Way using fetch()
/*
const request = fetch(`https://restcountries.com/v3.1/name/usa`);
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      // json() available on all response (resolved value) object that is coming from fetch() function
      // json() is also async function, so it will return a promise
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

// simplified code of above example using arrow function
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => {
        console.log(response.ok);

        // first promise rejection: Throwing error if 'response.ok' is false and displaying status code like 404, 200 etc.....
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);

        return response.json();
      }
      // error handling
      // err => alert(err)
    )
    .then(
      data => {
        renderCountry(data[0]);
        // const neighbour = data[0].borders[0];
        const neighbour = 'ljljl';
        if (!neighbour) return;

        // Country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      }
      // err => alert(err)
    )
    .then(
      response => {
        // first promise rejection: Throwing error if 'response.ok' is false and displaying status code like 404, 200 etc.....
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);
        return response.json();
      }
      // err => alert(err)
    )
    .then(data => renderCountry(data[0], `neighbour`))
    .catch(err => {
      console.error(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong 🔥🔥🔥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/
/*
// using DRY method for clean code (helper function)
// this function will return a promise
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // promise rejection: Throwing error if 'response.ok' is false and displaying status code like 404, 200 etc.....
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], `neighbour`))
    .catch(err => {
      console.error(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong 🔥🔥🔥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});
// getCountryData('australia');

// Wrong data - first promise rejection
// getCountryData('kjjos');

console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  // for (let i = 0; i < 100000; i++) {}
  console.log(res);
});

console.log('Test end');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🤑');
    } else {
      reject(new Error('You lost your money 😭'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// In most of the time, we only consume prmises. We usually build promises to wrap old callbacks based functions  into promises and this process is called promisifying (promisification)

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
.then(() => {
  console.log('1 second passed');
  return wait(1);
})
.then(() => {
  console.log('2 second passed');
  return wait(1);
})
.then(() => {
  console.log('3 second passed');
  return wait(1);
})
.then(() => {
    console.log('4 second passed');
    return wait(1);
  })
  .then(() => console.log('5 second passed'));
  
  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject(new Error('Problem!')).catch(x => console.error(x));
  */

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // same as above ↓↓↓
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&accept-language=english&format=json`
      );
    })
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

btn.addEventListener('click', whereAmI);
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&accept-language=english&format=json`
    );
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
      // create an error ↓↓↓
      // `https://restcountries.com/v3.1/name/${dataGeo.address.countryddd}`
    );
    if (!response.ok) throw new Error(`Problem getting country`);
    const data = await response.json();
    renderCountry(data[0]);

    // if any error occurs in above line then 'return' will not work because after error it will immediately go to 'catch()' block.
    return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
  } catch (err) {
    renderCountry(`💥💥💥 ${err.message}`);
    renderError(`${err.message} 💥💥💥`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: WILL GET LOCATION');
// const city = whereAmI();
// console.log(city);

// this mixes old and new method - async and then() method: which is not good 😬
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => {
//     // no matter it will execute
//     console.log('3: FINISHED GETTING LOCATION');
//   });

// using IIFE to avoid mixing old & new method - only using async function
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: FINISHED GETTING LOCATION');
})();
