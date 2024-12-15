// local storage info
localStorage.setItem("name", "Login form");
localStorage.setItem("theme", "light-mode");

document.querySelector('.log').addEventListener('click', function (e) {
  e.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('Password');
  
  if (username.value.trim() === '' || password.value.trim() === '') {
    alert("Please fill in all fields!");
    return;
  }
  
  window.location.href = "/html/Index.html";
});

// theme part
const modeBtn = document.getElementById('mode');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.btn-light');
const checkbox = document.querySelector('input[type="checkbox"]');
const inputFields = document.querySelectorAll('.input-box input');

let currentTheme = localStorage.getItem("theme") || "light-mode";
body.classList.add(currentTheme);

modeBtn.addEventListener('click', () => {
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-white');
  wrapper.classList.toggle('bg-dark');
  wrapper.classList.toggle('text-white');
  button.classList.toggle('btn-dark');
  checkbox.classList.toggle('check-dark');

  inputFields.forEach(input => {
    const placeholderColor = body.classList.contains('bg-dark') ? '#ffffff' : '#000000';
    input.style.setProperty('--placeholder-color', placeholderColor);
  });
  
  currentTheme = body.classList.contains('bg-dark') ? "dark-mode" : "light-mode";
  
  localStorage.setItem("theme", currentTheme);
});

// password visibility
const passwordInputs = document.querySelectorAll('#Password');
const visibilityIcons = document.querySelectorAll('.bx.bxs-lock-alt');

visibilityIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const input = passwordInputs[index];
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.add('bx-show');
    } else {
      input.type = 'password';
      icon.classList.remove('bx-show');
    }
  });
});

// language part
const langBtn = document.getElementById('lang-btn');
const paragraph = document.getElementsByTagName('h1'); 
const remember = document.getElementById('remember');
const anchor = document.getElementsByTagName('a');
const account = document.getElementsByTagName('span');
const login = document.getElementsByClassName('log');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('Password');

// data for en-ru
let currentLang = localStorage.getItem("language") || "en";
const data = {
  en: {
    paragraph: ["Login"],
    remember: ["Remember me"],
    anchor: ["Forgot password?", "Register"],
    account: ["Don't have an account?"],
    login: ["Login"],
    placeholder: ["Username", "Password"]
  },
  ru: {
    paragraph: ["Авторизоваться"],
    remember: ["Запомнить меня"],
    anchor: ["Забыли пароль?", "Зарегистрироваться"],
    account: ["У вас нет учетной записи?"],
    login: ["Авторизоваться"],
    placeholder: ["Имя пользователя", "Пароль"]
  },
}

//  function for en-ru
const applyLanguage = () => {
  data[currentLang].paragraph.forEach((item, index) => {
    if (paragraph[index]) {
      paragraph[index].innerHTML = item; 
    }
  });

  data[currentLang].remember.forEach((item, index) => {
    if (remember[index]) {
        remember[index].innerHTML = item; 
    }
  });
  data[currentLang].anchor.forEach((item, index) => {
    if (anchor[index]) {
        anchor[index].innerHTML = item; 
    }
  });
  data[currentLang].account.forEach((item, index) => {
    if (account[index]) {
        account[index].innerHTML = item; 
    }
  });
  data[currentLang].login.forEach((item, index) => {
    if (login[index]) {
        login[index].innerHTML = item; 
    }
  });
  if (usernameInput) {
    usernameInput.placeholder = data[currentLang].placeholder[0];
  }
  if (passwordInput) {
    passwordInput.placeholder = data[currentLang].placeholder[1];
  }

  langBtn.innerHTML = currentLang === "ru" ? "en" : "ru";
};

const changeLang = (e) => {
  e.preventDefault();
  currentLang = currentLang === "en" ? "ru" : "en";
  localStorage.setItem("language", currentLang)

  applyLanguage();
};

langBtn.addEventListener('click', changeLang);

applyLanguage();
