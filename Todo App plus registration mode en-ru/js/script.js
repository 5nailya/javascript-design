localStorage.setItem("name", "Todo App");
localStorage.setItem("theme", "light-mode");

// Main elements
const body = document.body;
const formElements = document.querySelectorAll('.carousel-item form');
const clearButtons = document.querySelectorAll('.carousel-item .btn.ms-3');
const langBtn = document.querySelector('.lang-btn');
const modeBtn = document.querySelector('.mode');
const carouselControlPrev = document.querySelector('.carousel-control-prev');
const carouselControlNext = document.querySelector('.carousel-control-next');

// Theme light-dark beginning
let currentTheme = localStorage.getItem("theme") || "light-mode";
body.classList.add(currentTheme);

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    currentTheme = body.classList.contains('dark-mode') ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", currentTheme);

    controlButtonsTheme();
});

// Carousel buttons color switch
const controlButtonsTheme = () => {
    const lightColor = 'lightblue';
    const darkColor = 'darkblue';

    const newColor = body.classList.contains('dark-mode') ? darkColor : lightColor;
    carouselControlPrev.querySelector('.carousel-control-prev-icon').style.backgroundColor = newColor;
    carouselControlNext.querySelector('.carousel-control-next-icon').style.backgroundColor = newColor;
};

controlButtonsTheme();

// Language data
const data = {
    en: {
        paragraph: "Todo App",
        placeholder: "Add your new todo",
        amount: "You have {count} pending tasks",
        all: "Clear All"
    },
    ru: {
        paragraph: "Список дел",
        placeholder: "Добавьте новую задачу",
        amount: "У вас {count} невыполненных задач",
        all: "Очистить все"
    }
};

let currentLang = localStorage.getItem("language") || "en";

// Language part
const applyLanguage = () => {
    formElements.forEach((form) => {
        const header = form.querySelector('h1');
        const input = form.querySelector('input');
        const taskInfo = form.querySelector('.task-info');
        const clearBtn = form.querySelector('.btn.ms-3');

        if (header) header.textContent = data[currentLang].paragraph;
        if (input) input.setAttribute('placeholder', data[currentLang].placeholder);
        if (taskInfo) {
            const count = taskInfo.querySelector('.count');
            if (count) {
                taskInfo.innerHTML = data[currentLang].amount('{count}', count.textContent);
            }
        }
        if (clearBtn) clearBtn.textContent = data[currentLang].all;
    });

    langBtn.textContent = currentLang === 'ru' ? 'en' : 'ru';
};

// Language switch
langBtn.addEventListener('click', (e) => {
    e.preventDefault();

    currentLang = currentLang === "en" ? "ru" : "en";
    localStorage.setItem("language", currentLang);

    applyLanguage();
});

applyLanguage();

// Count number of items
const updateTaskCount = (form) => {
  const ul = form.querySelector('ul');
  const taskInfo = form.querySelector('.task-info');
  
  if (!ul || !taskInfo) return;
  
  const totalTasks = ul.getElementsByTagName('li').length;
  const crossedOutTasks = ul.querySelectorAll('.crossed-out').length;
  const pendingTasks = totalTasks - crossedOutTasks;
  
  taskInfo.innerHTML = data[currentLang].amount.replace('{count}', pendingTasks);
};

// Main form part beginning
formElements.forEach((form) => {
  const input = form.querySelector('input');
  const ul = form.querySelector('ul');
  const clearButton = form.querySelector('.btn.ms-3');
  
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!input || !input.value.trim()) return;
    // main function
    const li = document.createElement('li');
    const bin = document.createElement('img');
    bin.src = "/picture/trash-can-black-symbol.png";
    bin.alt = "Delete";
    bin.classList.add('delete');
    li.classList.add('listyle');
    li.textContent = input.value.trim();
    li.appendChild(bin);
    ul.appendChild(li);
  
    updateTaskCount(form);
    input.value = "";
  
    // bin button
    bin.onclick = (e) => {
      e.stopPropagation();

      // animation for bin
      li.classList.add('delete-animation');
      
      // animation work function
      li.addEventListener('animationend', () => {
          li.remove();
          updateTaskCount(form);
      });
    };

    
    // cross out line 
    li.onclick = () => {
      li.classList.toggle('crossed-out');
      updateTaskCount(form);
    };
  };
  
  // To delete all elements
  clearButton.onclick = (e) => {
    e.preventDefault();
    if (confirm("Do you want to clear all Todo?")) {
        ul.innerHTML = "";
        updateTaskCount(form);
    }
  };
  
  updateTaskCount(form);
});