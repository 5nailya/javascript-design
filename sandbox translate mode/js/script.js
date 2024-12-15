let navLink = document.querySelectorAll('.nav-link'); //+
let langBtn = document.querySelector('#lang-btn'); //+
let paragraphh = document.getElementsByClassName('paragraph'); //+
let ctitle = document.getElementsByClassName('card-title'); //+
let ech5 = document.getElementsByClassName('gr'); //+
let ech2 = document.getElementsByClassName('hh2'); //+
let button = document.getElementsByClassName('btn'); //+
let footer = document.getElementsByClassName('foot'); 
let currentLang = "en";

const data = {
    en: {
        lang: ["Home", "Pages", "Projects", "Blog", "Blocks", "Documentation", "Sign in"],

        ctitle: ["We bring solutions to make life easier", "Content Marketing", "Social Engagement", "Card 3", "Product Design", "Collect Ideas", "Data Analysis", "Finalize Product", "Finalize Product"],

        paragraphh: ["We are a creative company that focuses on long term relationships with customers.", "Why Choose Sandbox?", "Save Time and Money", "Financial Analyst", "Marketing Specialist", "Sales Manager", "WHAT MAKES US DIFFERENT?", "JOIN OUR COMMUNITY"],

        ech2: ["Here are a few reasons why our customers choose Sandbox.", "Save your time and money by choosing our professional team.", "We are trusted by over 5000+ clients. Join them now and grow your business."],

        ech5: ["We bring solutions to make life easier for our customers.", "Creativity", "Innovative Thinking", "Rapid Solutions", "Top-Notch Support"],

        footer: ["© 2024 MyWebsite", "All Rights Reserved", "Get in Touch", "Moonshine St. 14/05", "London", "United Kingdom", "info@email.com", "00 (123) 456 78 90", "Learn More", "About Us", "Our Story", "Projects", "Terms of Use", "Privacy Policy", "Our Newsletter", "Subscribe to our newsletter to get our news & deals delivered to you."],
        
        button: ["", "read more", "Learn More", "Learn More", "Learn More", "Learn More", "Learn More", "Get started", "Previous", "Next", "Get Started", "Join"]
    },
    ru: {
        lang: ["Главная", "Страницы", "Проекты", "Блог", "Блоки", "Документация", "Зарегестрироваться"],
        
        ctitle: ["Мы предлагаем решения, которые облегчают жизнь", "Контент-маркетинг", "Социальное взаимодействие", "Карточка 3", "Дизайн продукта", "Собирайте идеи", "Анализ данных", "Завершить продукт", "Завершить продукт"],
        
        paragraphh: ["Мы креативная компания, которая фокусируется на долгосрочных отношениях с клиентами.", "Почему выбирают Sandbox?", "Экономьте время и деньги", "Финансовый аналитик", "Специалист по маркетингу", "Менеджер по продажам", "ЧЕМ МЫ ОТЛИЧАЕМСЯ?", "ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ СООБЩЕСТВУ"],
        
        ech2: ["Вот некоторые из причин, по которым наши клиенты выбирают Sandbox.", "Экономьте свое время и деньги, выбрав нашу профессиональную команду.", "Нам доверяют более 5000+ клиентов. Присоединяйтесь к ним сейчас и развивайте свой бизнес."],
        
        ech5: ["Мы предоставляем решения, которые облегчают жизнь нашим клиентам", "Творчество", "Инновационное мышление", "Быстрые решения", "Первоклассная поддержка"],
        
        footer: ["© 2024 MyWebsite", "Все права защищены", "Свяжитесь с нами", "Moonshine St. 14/05", "Лондон", "Великобритания", "info@email.com", "00 (123) 456 78 90", "Узнать больше", "О нас", "Наша история", "Проекты", "Условия использования", "Политика конфиденциальности", "Наша рассылка", "Подпишитесь на нашу рассылку, чтобы получать наши новости и предложения."],
        
        button: ["", "читать дальше", "Узнать больше", "Узнать больше", "Узнать больше", "Узнать больше", "Узнать больше", "Начать", "Предыдущая", "Следующая", "Начать", "Присоединиться"],
    },
}

const changeLang = (e) => {
    e.preventDefault();

    currentLang = currentLang === "en" ? "ru" : "en"; // en olsa ru, ru olsa en olsun

    data[currentLang].lang.forEach((item, index) => {
        if (navLink[index]) {
            navLink[index].innerHTML = item; 
        }
    });

    data[currentLang].ctitle.forEach((item, index) => {
        if (ctitle[index]) {
            ctitle[index].innerHTML = item; 
        }
    });


    data[currentLang].paragraphh.forEach((item, index) => {
        if (paragraphh[index]) {
            paragraphh[index].innerHTML = item; 
        }
    });

    data[currentLang].ech2.forEach((item, index) => {
        if (ech2[index]) {
            ech2[index].innerHTML = item; 
        }
    });


    data[currentLang].ech5.forEach((item, index) => {
        if (ech5[index]) {
            ech5[index].innerHTML = item; 
        }
    });

    data[currentLang].button.forEach((item, index) => {
        if (button[index]) {
            button[index].innerHTML = item; 
        }
    });

    data[currentLang].footer.forEach((item, index) => {
        if (footer[index]) {
            footer[index].innerHTML = item; 
        }
    });

    langBtn.innerHTML = currentLang === "ru" ? "en" : "ru"; 
};

langBtn.addEventListener('click', changeLang);



//                         dark-light mode
const modeBtn = document.getElementById('mode');
const navbar = document.querySelector('.z');
const body = document.body;
const inputs = document.getElementsByTagName('input');
const cards = document.querySelectorAll('.card');
// let button = document.getElementsByClassName('btn'); //+
const images = document.querySelectorAll('img');


modeBtn.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-white');
    
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.toggle('navbar-dark');
        navLink[i].classList.toggle('text-white');
    };
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle('bg-dark');
        inputs[i].classList.toggle('text-white');
    };
    
    for (let j = 0; j < cards.length; j++) {
        cards[j].classList.toggle('bg-dark');
        cards[j].classList.toggle('text-white');
        cards[j].classList.remove('shadow');
    };

    for (let l = 0; l < images.length; l++) {
        images[l].classList.toggle('opacity-75');
    }


    for (let k = 0; k < button.length; k++) {
        if (button[k].classList.contains('btn-light')) {
            button[k].classList.remove('btn-light');
            button[k].classList.add('btn-secondary');
        } else {
            button[k].classList.remove('btn-secondary');
            button[k].classList.add('btn-light');
        }
    }
});