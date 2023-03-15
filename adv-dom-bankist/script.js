'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
 **************************************************
 */
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // returns nodelist
console.log(allSections);

document.getElementById('section--1');

// returns HTML Collection & it changes if you remove from html document
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating & inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// only one could be shown in web page ↓
header.prepend(message); // adds first child of selected element
// header.append(message); // adds last child of selected element

// duplicating the same element at multiple places in web page ↓
// header.append(message.cloneNode(true));

// before & after ↓
// header.before(message);
// header.after(message);

// Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    // old way of removing element
    // message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// using this will only work if you set the inline style through JS
console.log(message.style.height);
console.log(message.style.backgroundColor);

// using this we can get styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// changing property value
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non standard attributes
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Relative & absolute sources
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use this ↓
// bcoz it overwrites existing class & allows only one class on an element
logo.className = 'jonas';
