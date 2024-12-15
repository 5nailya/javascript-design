// info in localStorage
localStorage.setItem("name", "sign in");
localStorage.setItem("theme", "light");
localStorage.setItem("language", "en");

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (e) {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
          alert('Passwords do not match!');
      } else {
          window.location.href = "/html/Login Form.html";
      }
  });
});

// Password Visibility
const passwordInputs = document.querySelectorAll('#password, #confirm-password');
const visibility = document.querySelectorAll('.fa-lock');

visibility.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const input = passwordInputs[index]; 

    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  });
});

// Language switch (en - ru)
const langBtn = document.getElementById('lang-btn');
const heading = document.getElementsByTagName('h2'); 
const rememberLabels = document.getElementsByTagName('label');
const anchor = document.getElementsByTagName('a');
const accountText = document.getElementsByTagName('p');
const registerButton = document.getElementsByClassName('btn-block');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

let currentLang = localStorage.getItem("language") || "en"; 

const data = {
  en: {
    heading: ["Create Account"],
    rememberLabels: ["I agree to the Terms & Conditions"],
    anchor: ["Log in"],
    account: ["Already have an account?"],
    login: ["Register"],
    placeholder: ["Full Name", "Email", "Password", "Confirm Password"],
    label: ["Full Name", "Email", "Password", "Confirm Password", "Terms & Conditions"],
    registerButton: ["Register"]
  },
  ru: {
    heading: ["Создать аккаунт"],
    rememberLabels: ["Я согласен с условиями использования"],
    anchor: ["Войти"],
    account: ["Уже есть аккаунт?"],
    login: ["Зарегистрироваться"],
    placeholder: ["Полное имя", "Электронная почта", "Пароль", "Подтвердите пароль"],
    label: ["Полное имя", "Электронная почта", "Пароль", "Подтверждение пароля", "Правила и условия"],
    registerButton: ["Зарегистрироваться"]
  },
};

const changeLang = (e) => {
  e.preventDefault(); 

  currentLang = currentLang === "en" ? "ru" : "en";
  localStorage.setItem("language", currentLang);

  data[currentLang].heading.forEach((item, index) => {
    if (heading[index]) {
      heading[index].innerHTML = item; 
    }
  });

  data[currentLang].rememberLabels.forEach((item, index) => {
    if (rememberLabels[index]) {
        rememberLabels[index].innerHTML = item; 
    }
  });

  data[currentLang].anchor.forEach((item, index) => {
    if (anchor[index]) {
        anchor[index].innerHTML = item; 
    }
  });

  data[currentLang].account.forEach((item, index) => {
    if (accountText[index]) {
        accountText[index].innerHTML = item; 
    }
  });

  data[currentLang].registerButton.forEach((item, index) => {
    if (registerButton[index]) {
        registerButton[index].innerHTML = item; 
    }
  });

  const labels = document.querySelectorAll('label');
  data[currentLang].label.forEach((item, index) => {
    if (labels[index]) {
        labels[index].innerHTML = item; 
    }
  });

  if (fullname) {
    fullname.placeholder = data[currentLang].placeholder[0];
  }
  if (email) {
    email.placeholder = data[currentLang].placeholder[1];
  }
  if (password) {
    password.placeholder = data[currentLang].placeholder[2];
  }
  if (confirmPassword) {
    confirmPassword.placeholder = data[currentLang].placeholder[3];
  }

  langBtn.innerHTML = currentLang === "ru" ? "en" : "ru";
};

langBtn.addEventListener('click', changeLang);

changeLang({ preventDefault: () => {} });

// Dark/Light Mode
const modeBtn = document.getElementById('mode');
const body = document.body;
const wrapper = document.querySelector('.registration-container');
const button = document.querySelector('.btn-primary');
const checkbox = document.querySelector('input[type="checkbox"]');
const inputFields = document.querySelectorAll('.form-control');

let currentTheme = localStorage.getItem("theme") || "light";
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

    currentTheme = body.classList.contains('bg-dark') ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

console.log(data[currentLang].anchor);
