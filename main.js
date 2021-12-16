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
    name: 'Tonic',
    details: ['CANOPY', 'Back End Dev', '2015'],
    smallDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: 'assets/photo1.png',
    imageUrlDesktop: 'assets/photo1dt.png',
    popupImageUrlMobile: 'assets/photo1.png',
    popupImageUrlDesktop: 'assets/mydesktop.png',
    technologiesPopup: [
      'html',
      'css',
      'javaScript',
      'github',
      'Ruby',
      'Bootstrap',
    ],
    technologies: ['html', 'css', 'javaScript'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    smallDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: 'assets/photo2.png',
    imageUrlDesktop: 'assets/modalDesktop3.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'css', 'javaScript'],
    popupImageUrlMobile: 'assets/photo2.png',
    popupImageUrlDesktop: 'assets/modalDesktop3.png',
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    smallDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: 'assets/photo3.png',
    imageUrlDesktop: 'assets/modalDesktop.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageUrlMobile: 'assets/photo3.png',
    popupImageUrlDesktop: 'assets/modalDesktop.png',
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Uber navigation',
    details: ['Uber', 'Lead developer', '2018'],
    smallDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrlMobile: 'assets/photo4.png',
    imageUrlDesktop: 'assets/modalDeskto2.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageUrlMobile: 'assets/images/photo4.png',
    popupImageUrlDesktop: 'assets/modalDeskto2.png',
    linkLive: '',
    linkSource: '',
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
}

function init() {
  for (let k = 0; k < projects.length; k += 1) {
    const project = projects[k];
    const template = document.createElement('template');
    const technologies = project.technologies.map(
      (t) => `<li class="langu">${t}</li>`,
    );

    template.innerHTML = `<div class="project-card desktop">
      <div class="mobile-image">
        <img src="${project.imageUrlMobile}" alt="First Card" />
      </div>
      <div class="desktop-image">
        <img src="${project.imageUrlDesktop}" alt="First card-desktop" />
      </div>
      <div class="contents-two">
        <h2 class="head">${project.name}</h2>
        <h4 class="desktop_show">${project.name}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail canopy">CANOPY</li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              Back End Dev
            </li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              2015
            </li>
            <li class="card-detail dcanopy2_face">CANOPY</li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              Back End Dev
            </li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              2015
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
