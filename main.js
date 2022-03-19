const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

// Modal Popup

const projects = [
  {
    name: 'Coin City',
    details: ['CANOPY', 'Back End Dev', '2015'],
    smallDescription:
      'Building my first Capstone project to apply the concepts learned in order to enhance my skills in HTML, CSS & JavaScript.',
    bigDescription:
      'Building my first Capstone project to apply the concepts learned in order to enhance my skills in HTML, CSS & JavaScript.',
    imageUrlMobile: 'assets/first-cap.png',
    imageUrlDesktop: 'assets/first-cap.png',
    // popupImageUrlMobile: 'assets/first-cap.png',
    // popupImageUrlDesktop: 'assets/first-cap.png',
    technologiesPopup: [
      'html',
      'css',
      'javaScript',
      'github',
      'Ruby',
      'Bootstrap',
    ],
    technologies: ['html', 'css', 'javaScript'],
    linkLive: 'https://mwapsam.github.io/capstone-m1/',
    linkSource: 'https://github.com/Mwapsam/capstone-m1',
  },
  {
    name: 'Space Travellers',
    details: ['SPACE-X', 'Full Stack Dev', '2022'],
    smallDescription:
      "This is a Space Travellers' website for making rocket reservations based on SpaceX API. It represents a fictional company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    bigDescription:
      "This is a Space Travellers' website for making rocket reservations based on SpaceX API. It represents a fictional company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    imageUrlMobile: 'assets/space-travellers.png',
    imageUrlDesktop: 'assets/space-travellers.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'css', 'javaScript'],
    // popupImageUrlMobile: 'assets/space-travellers.png',
    // popupImageUrlDesktop: 'assets/space-travellers.png',
    linkLive: 'https://space-travellers-hub.herokuapp.com/',
    linkSource: 'https://github.com/Mwapsam/Space-travellers',
  },
  {
    name: 'Pokemon',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    smallDescription:
      'This project is developed for Pokemon and fight game lovers to see their favorite Pokemon character and make comments on them. This project makes use of Poke API and involvement API to get Pokemon information to be rendered on the screen and to store and retrieve users likes and comments respectively.',
    bigDescription:
      'This project is developed for Pokemon and fight game lovers to see their favorite Pokemon character and make comments on them. This project makes use of Poke API and involvement API to get Pokemon information to be rendered on the screen and to store and retrieve users likes and comments respectively.',
    imageUrlMobile: 'assets/pokemon.png',
    imageUrlDesktop: 'assets/pokemon.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    // popupImageUrlMobile: 'assets/pokemon.png',
    // popupImageUrlDesktop: 'assets/pokemon.png',
    linkLive: 'https://ginohmk.github.io/JavascriptCapstone/',
    linkSource: 'https://github.com/Ginohmk/JavascriptCapstone',
  },
  {
    name: 'Bookstore',
    details: ['Uber', 'Lead developer', '2018'],
    smallDescription:
      'The Bookstore website manages the inventory of books by allowing users to display a list of books, add books and remove books from the store.',
    bigDescription:
      'The Bookstore website manages the inventory of books by allowing users to display a list of books, add books and remove books from the store.',
    imageUrlMobile: 'assets/bookstore.png',
    imageUrlDesktop: 'assets/bookstore.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    // popupImageUrlMobile: 'assets/bookstore.png',
    // popupImageUrlDesktop: 'assets/bookstore.png',
    linkLive: 'https://bookstore-js.herokuapp.com/',
    linkSource: 'https://github.com/Mwapsam/Bookstore',
  },
];

function g(e, isClass = false) {
  if (isClass) {
    return document.getElementsByClassName(e)[0];
  }
  return document.getElementById(e);
}

// eslint-disable-next-line no-unused-vars
function popup(projectIndex) {
  const project = projects[projectIndex];
  g('t').innerText = project.name;
  g('mImage', true).src = project.imageUrlMobile;
  g('mImageDsk', true).src = project.popupImageUrlDesktop;
  g('modalText', true).innerText = project.bigDescription;
  g('modalTextMobile', true).innerText = project.smallDescription;
  g('myModal').style.display = 'block';
  g('git', true).href = project.linkLive;
  g('hero', true).href = project.linkSource;
}

function init() {
  for (let k = 0; k < projects.length; k += 1) {
    const project = projects[k];
    const template = document.createElement('template');
    const technologies = project.technologies.map(
      (t) => `<li class="langu">${t}</li>`
    );

    let flexStart = 'start';
    let flexEnd = 'end';
    if (k % 2 !== 0) {
      flexStart = 'end';
      flexEnd = 'start';
    }

    template.innerHTML = `<div class="project-card desktop">
    <div class="content1 ${flexStart}">
      <div class="mobile-image">
        <img src="${project.imageUrlMobile}" alt="First Card" />
      </div>
      <div class="desktop-image">
        <img src="${project.imageUrlDesktop}" alt="First card-desktop" />
      </div>
      </div>
      <div class="contents-two ${flexEnd}">
        <h2 class="head">${project.name}</h2>
        <h4 class="desktop_show">${project.name}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail canopy">CANOPY</li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              Front End Dev
            </li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              2022
            </li>
            <li class="card-detail dcanopy2_face">PROJECT</li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              Front End Dev
            </li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              2022
            </li>
          </ul>
          <p class="instruction">${project.smallDescription}</p>
          <p class="instruction-show">${project.smallDescription}</p>
          <div class="language1 inline">
            <ul> ${unescape(technologies.join(''))}</ul>
          </div>
        </div>
        <button type="button" class="btn-one see-project" onclick="popup(${k})">
          See project
        </button>
      </div>
    </div>`;

    g('projects').appendChild(template.content.firstChild);
  }
}

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

// eslint-disable-next-line func-names
span.onclick = function () {
  modal.style.display = 'none';
};

// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

window.onload = init();

// Form Validation

const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.contact-form');
const formElement = form.querySelectorAll('input, textarea');

formElement.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
  });
});

document.getElementById('submit').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const emailValidation = /[A-Z]/.test(email);

  if (emailValidation) {
    errorMessage.style.display = 'block';
    e.preventDefault();
  }
});

// Local-Storage
const clientName = document.getElementById('fname');
const clientEmail = document.getElementById('email');
const clientMessage = document.getElementById('textarea');

function useLocalStorage() {
  const contactFormData = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}

const formInputs = document.querySelectorAll('input , textarea');
for (let j = 0; j < formInputs.length; j += 1) {
  formInputs[j].addEventListener('change', () => {
    useLocalStorage();
  });
}

const formData = JSON.parse(localStorage.getItem('contactFormData'));
if (formData !== null) {
  clientName.value = formData.name;
  clientEmail.value = formData.email;
  clientMessage.value = formData.message;
}
