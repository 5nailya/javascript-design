const modeBtn = document.getElementById('mode');
const passwordInputs = document.getElementsByClassName('pass');
const visibility = document.getElementsByClassName('mode');
const body = document.body;
const navbar = document.querySelector('.navbar');
const inputs = document.getElementsByTagName('input');

//                         dark-light mode
modeBtn.addEventListener('click', () => {
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-white');
  navbar.classList.toggle('navbar-dark');
  
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.toggle('bg-dark');
    inputs[i].classList.toggle('text-white');
  };
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.toggle('navbar-dark');
    navLink[i].classList.toggle('text-white');
};

});

//                     pasword visibility
for (let i = 0; i < visibility.length; i++) {
  visibility[i].onclick = function () {
    for (let j = 0; j < passwordInputs.length; j++) {
      if (passwordInputs[j].type === 'password') {
        passwordInputs[j].type = 'text';
      } else {
        passwordInputs[j].type = 'password';
      }
    }
  };
};

//                        en - ru translate
const navLink = document.querySelectorAll('.nav-link');
const langBtn = document.getElementById('language');
const paragraph = document.getElementsByTagName('h1'); 
const label = document.getElementsByTagName('label');
const button = document.getElementsByClassName('btn-primary');
let currentLang = "en"; 
const data = {
  en: {
    navLink: ["Home", "Pages", "Projects", "Blog", "Blocks", "Documentation", "Sign in"],
    paragraph: ["Login"],
    label: ["Email address"],
    button: ["Submit"]
  },
  ru: {
    navLink: ["Главная", "Страницы", "Проекты", "Блог", "Блоки", "Документация", "Зарегестрироваться"],
    paragraph: ["Авторизоваться"],
    label: ["Адрес электронной почты"],
    button: ["Подтвердить"]
  },
}

const changeLang = (e) => {
  e.preventDefault(); 

  currentLang = currentLang === "en" ? "ru" : "en";

  data[currentLang].navLink.forEach((item, index) => {
      if (navLink[index]) {
          navLink[index].innerHTML = item; 
      }
  });
  data[currentLang].paragraph.forEach((item, index) => {
    if (paragraph[index]) {
      paragraph[index].innerHTML = item; 
    }
  });
  data[currentLang].label.forEach((item, index) => {
    if (label[index]) {
      label[index].innerHTML = item; 
    }
  });
  data[currentLang].button.forEach((item, index) => {
    if (button[index]) {
      button[index].innerHTML = item; 
    }
  });

  langBtn.innerHTML = currentLang === "ru" ? "en" : "ru";
};

langBtn.addEventListener('click', changeLang);
