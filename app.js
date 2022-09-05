/* eslint-disable no-plusplus */
const Bar = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('.anchor-link');
const Body = document.querySelector('body');

const cancelModal = document.querySelector('.cancels');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const width = window.innerWidth;

const cards = [
  {
    key: 0,
    name: 'Hoobank',
    option: ['HOOBANK', 'Full Stack Dev', '2022'],
    optionMobile: ['HOOBANK', 'Full Stack Dev', '2022'],
    description:
      'This is Hoobank project developed with React JS and Tailwind CSS. I built this project to showcase my skills and experience with React and tailwind CSS. It focuses on using dynamic and reusable Tailwind classes and React components to develope responsive user interface with little effort.',
    featuredImage: './images/Airshow.png',
    desktopImage: './images/Airshow.png',
    technologies: ['React JS', 'Tailwind CSS', 'JavaScript', 'Redux'],
    linktoliveversion: 'https://hoobank-9d24b.web.app/',
    linktosource: 'https://github.com/Mwapsam/Landing-page/',
  },
  {
    key: 1,
    name: 'ToDo-List',
    option: ['ToDo-List', 'Full Stack Dev', '2021'],
    optionMobile: ['ToDo-List', 'Full Stack Dev', '2021'],
    description:
      'This is a Microverse todo-list Project I built with pure JavaScript, HTML, CSS, Babel, and NPM Webpacks. A todo-list is simply a list of things that one wants to get done or that need to get done.',
    featuredImage: './images/interactive.png',
    desktopImage: './images/interactive.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    linktoliveversion: 'https://mwapsam.github.io/To-Do-List/',
    linktosource: 'https://github.com/Mwapsam/To-Do-List',
  },
  {
    key: 2,
    name: 'Math Magicians',
    option: ['CALCULATOR', 'Full Stack Dev', '2022'],
    optionMobile: ['CALCULATOR', 'Full Stack Dev', '2022'],
    description:
      'Math Magicians is a single page application (SPA) built with React for people who love mathematics. It helps to make calculations straightforward and easy',
    featuredImage: './images/fullsite.png',
    desktopImage: './images/fullsite.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    linktoliveversion: 'https://mathmagicians12.herokuapp.com',
    linktosource: 'https://github.com/Mwapsam/MathMagicians',
  },
  {
    key: 3,
    name: 'COVID19 Metrics',
    option: ['METRICS', 'Full Stack Dev', '2022'],
    optionMobile: ['METRICS', 'Full Stack Dev', '2022'],
    description:
      'COVID-19-Metrics is a Single page Application(S.P.A) built using React and redux in this project information on the COVID-19 virus is being fetched from an API. This Application shows data on COVID-19 specifically in African countries, the information is on COVID-19 cases, deaths, people tested and people that have recovered from the deadly virus.',
    featuredImage: './images/covidmetrics.png',
    desktopImage: './images/covidmetrics.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Github', 'Netlify'],
    linktoliveversion: 'https://metric-covid.herokuapp.com',
    linktosource: 'https://github.com/Mwapsam/Metrics-webapp',
  },
];

function grab(e) {
  return document.getElementById(e);
}

const Openpopup = ({
  name,
  description,
  featuredImage,
  desktopImage,
  technologies,
  linktoliveversion,
  linktosource,
  option,
  optionMobile,
}) => () => {
  let displayModal = '';
  modal.classList.add('show-modal');

  displayModal += `
         <div class="modal-head">
          <h3 class="modal-title">${name}</h3>
         </div>
         <ul class="card-detail-header-container">
             <li class="card-detail canopy-modal">${
  width > 1024 ? option[0] : optionMobile[0]
}</li>
             <li class="card-detail canopy-modal option-modal"><span class="circle-desktop"></span> ${
  width > 1024 ? option[1] : optionMobile[1]
}</li>
             <li class="card-detail canopy-modal option-modal"><span class="circle-desktop"></span>${
  width > 1024 ? option[2] : optionMobile[2]
} </li>
           </ul>
            
          <div class='modal-img-container' >
            <img src='${
  width > 1024 ? desktopImage : featuredImage
}' alt="modal picture" class="modal-img">
          </div>
          <div class="modal-text">
            <div class="popup-description">
            ${description}
            </div>
            <div>
              <ul class="anchor-div technologies-langu">
                <li><a href="#">${technologies[0]}</a></li>
                <li><a href="#">${
  technologies[1] ? technologies[1] : ''
}</a></li>
                <li><a href="#">${
  technologies[2] ? technologies[2] : ''
}</a></li>
                <li><a href="#">${
  technologies[3] ? technologies[3] : ''
}</a></li>
              </ul>
              <div class="modal-buttons ">
                <a href='${linktoliveversion}' class="source-btn mr source-desktop">
                  See Live
                  <img src="images/Live-icon.svg" class="iconlink" alt="live icon">
                </a>
                <a href='${linktosource}' class="source-btn mr">
                  See Source
                <img src="images/Github-icon.svg" class="iconlink" alt="Git hub">
                </a>
              </div>
            </div>
          </div>
      `;

  modalInner.innerHTML = displayModal;
};

function showWorks() {
  const works = [
    {
      title: 'Hoobank',
      options: ['HOOBANK', 'Full Stack Dev', '2022'],
      imgMobile: 'images/Airshow.png',
      imgDesktop: 'images/Airshow.png',
      description:
        'This is Hoobank project developed with React JS and Tailwind CSS. I built this project to showcase my skills and experience with React and tailwind CSS. It focuses on using dynamic and reusable Tailwind classes and React components to develope responsive user interface with little effort.',
      descriptionD:
        'This is Hoobank project developed with React JS and Tailwind CSS. I built this project to showcase my skills and experience with React and tailwind CSS. It focuses on using dynamic and reusable Tailwind classes and React components to develope responsive user interface with little effort.',
      languages: ` <li class="langu langu-a">HTML</li>
      <li class="langu langu-b">CSS</li>
      <li class="langu langu-c">JavaScript</li>
      <li class="langu2">HTML</li>
      <li class="langu2">CSS</li>
      <li class="langu2">JavaScript</li>`,
    },
    {
      title: 'ToDo-List',
      options: ['ToDo-List', 'Full Stack Dev', '2021'],
      imgMobile: 'images/interactive.png',
      imgDesktop: 'images/interactive.png',
      description:
        'This is a Microverse todo-list Project I built with pure JavaScript, HTML, CSS, Babel, and NPM Webpacks. A todo-list is simply a list of things that one wants to get done or that need to get done.',
      descriptionD:
        ' This is a Microverse todo-list Project I built with pure JavaScript, HTML, CSS, Babel, and NPM Webpacks. A todo-list is simply a list of things that one wants to get done or that need to get done.',
      languages: `<li class="langu">HTML</li>
      <li class="langu">CSS</li>
      <li class="langu">JavaScript</li>
      <li class="langu2">HTML</li>
      <li class="langu2">Webpack</li>
      <li class="langu2">CSS</li>
      <li class="langu2">JavaScript</li>`,
    },
    {
      title: 'Math-Magicians',
      options: ['CALCULATOR', 'Full Stack Dev', '2022'],
      imgMobile: 'images/fullsite.png',
      imgDesktop: 'images/fullsite.png',
      description:
        'Math Magicians is a single page application (SPA) built with React for people who love mathematics. It helps to make calculations straightforward and easy.',
      descriptionD:
      'Math Magicians is a single page application (SPA) built with React for people who love mathematics. It helps to make calculations straightforward and easy.',
      languages: `<li class="langu">HTML</li>
      <li class="langu">CSS</li>
      <li class="langu">React</li>
      <li class="langu2">HTML</li>
      <li class="langu2">React</li>
      <li class="langu2">CSS</li>
      <li class="langu2">JavaScript</li>`,
    },
    {
      title: 'COVID19-Metrics',
      options: ['METRICS', 'Full Stack Dev', '2022'],
      imgMobile: 'images/covidmetrics.png',
      imgDesktop: 'images/covidmetrics.png',
      description:
        'COVID-19-Metrics is a Single page Application(S.P.A) built using React and redux in this project information on the COVID-19 virus is being fetched from an API. This Application shows data on COVID-19 specifically in African countries, the information is on COVID-19 cases, deaths, people tested and people that have recovered from the deadly virus.',
      descriptionD:
        'COVID-19-Metrics is a Single page Application(S.P.A) built using React and redux in this project information on the COVID-19 virus is being fetched from an API. This Application shows data on COVID-19 specifically in African countries, the information is on COVID-19 cases, deaths, people tested and people that have recovered from the deadly virus.',
      languages: `<li class="langu">HTML</li>
      <li class="langu">CSS</li>
      <li class="langu">React</li>
      <li class="langu2">HTML</li>
      <li class="langu2">React</li>
      <li class="langu2">CSS</li>
      <li class="langu2">JavaScript</li>`,
    },
  ];

  for (let k = 0; k < works.length; k++) {
    const work = works[k];
    const template = document.createElement('template');

    if (k % 2 === 0) {
      template.innerHTML = `<div class="project-card desktop">
        <div class="mobile-image">
          <img src="${work.imgMobile}" alt="First Card">
        </div>
        <div class="desktop-image">
          <img src="${work.imgDesktop}" alt="First card-desktop">
        </div>


        <div class="contents-two">
          <h2 class="head">${work.title}</h2>
          <h4 class="desktop_show">${work.title}</h4>
          <div class="card-detail-box">
            <ul class="cards-container">
              <li class="card-detail canopy">${work.options[0]}</li>
              <li class="card-detail option  "><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

              <li class="card-detail dcanopy2_face">${work.options[0]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
            </ul>

            <p class="instruction">${work.description}</p>
            <p class="instruction-show">${work.description}</p>

            <div class="language1 inline">
              <ul>${work.languages}</ul>
            </div>
          </div>
          <button type="button" class="btn-one btns">See project</button>
        </div>
      </div>
    `.trim();
    } else {
      template.innerHTML = `<div class="project-card card-flex">
      <div class="mobile-image">
        <img src="${work.imgMobile}" alt="First Card">
      </div>
      <div class="desktop-image">
        <img src="${work.imgDesktop}" alt="First card-desktop">
      </div>


      <div class="contents">
        <h2 class="head">${work.title}</h2>
        <h4 class="desktop_show">${work.title}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail canopy">${work.options[0]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

            <li class="card-detail dcanopy2_face">${work.options[0]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
          </ul>

          <p class="instruction">${work.description}</p>
          <p class="instruction-show">${work.description}</p>

          <div class="language1 inline">
            <ul>${work.languages}</ul>
          </div>
        </div>
        <button type="button" class="btn-one btns">See project</button>
      </div>
    </div>
  `.trim();
    }
    const child = template.content.firstChild;
    grab('work').appendChild(child);
  }
}

function closePopup() {
  modal.classList.remove('show-modal');
}

document.addEventListener('DOMContentLoaded', () => {
  const modalButton = document.querySelectorAll('.btns');
  modalButton.forEach((button, i) => {
    button.addEventListener('click', Openpopup(cards[i]));
  });
});

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  Body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  Body.classList.remove('noscroll');
}

Bar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closePopup);

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

window.onload = showWorks();
const saveData = (data) => localStorage.setItem('last_info', JSON.stringify(data));
const formContainer = document.querySelector('.con-form');
const mailInput = document.getElementById('mail');
const messageError = document.querySelector('.error-message');
const msgInput = document.querySelector('#msg');
const nameInput = document.querySelector('#names');

let data = {};
const savedData = JSON.parse(localStorage.getItem('last_info'));
if (savedData) {
  mailInput.value = savedData.email;
  msgInput.value = savedData.msg;
  nameInput.value = savedData.names;
  data = savedData;
}

mailInput.addEventListener('input', () => {
  data.email = mailInput.value;
  saveData(data);
});

msgInput.addEventListener('input', () => {
  data.msg = msgInput.value;
  saveData(data);
});

nameInput.addEventListener('input', () => {
  data.names = nameInput.value;
  saveData(data);
});

formContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  data.names = formContainer.elements.name.value;
  data.email = formContainer.elements.email.value;
  data.msg = formContainer.elements.msg.value;
  if (mailInput.value === mailInput.value.toLowerCase()) {
    messageError.textContent = '';
    saveData(data);
  } else {
    messageError.innerHTML = '*email must be in lower case <br> * form not sent';
  }
});
