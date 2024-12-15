// const phone = {
//     brand:"ZTE",
//     model:"Nubia z50s Pro",
//     variantOne:{
//         price:1000,
//         color:"white",
//         ROM:"12/256",
//     },
//     variantTwo: {
//         price:1200,
//         color:"black",
//         ROM:"16/512",
//     },
//     pay:function(variant){
//         if (variant ===1 ){
//             return "ROM" + this.variantOne.ROM;
//         }else if(variant === 2){
//             return "ROM" + this.variantTwo.ROM;
//         }else {
//             return "Wrong"
//         }
//     }
// }

// console.log(phone.pay(1));
// console.log(phone.variantTwo);

// console.log(Math.round(3.5));
// console.log(Math.random()*100);
// console.log(Math.round(Math.random()*100));


// const users = ["Apple","Orange","Banana","Lemon","Pineapple"];

// i = Math.round(Math.random() * users.length);

// console.log(users[i])


// document.getElementsByTagName("h1")[2].innerHTML = "Not hello!";
// document.getElementsByTagName("h1")[1].innerText = "<i>Not hello</i>";

// const h1 = document.getElementsByTagName("h1")[0];
// h1.innerText = "<i>Not hello</i>";

// document.getElementById('idinfo').innerHTML = 'new value'
// document.getElementsByClassName('info')[1].innerHTML = 'new value'

// document.querySelector(".info").innerHTML = "new data";

// document.querySelectorAll(".info")[2].innerHTML = "new data";


// const headLineEI = document.querySelectorAll('h1');
// console.log(headLineEI.length);
// for (let i=0; i<headLineEI.length; i++ ){
//     headLineEI[i].innerHTML = "new data"
// }


// import { products } from './data.js';

// const elMap = (data)=> {
//     data.map ((item,index)=>(
//         headLineEI[index].innerHTML = item.title
//     ))
// }


// elMap(products);

const navLink = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang-btn');

const lang = {
    en: ["Home", "About", "Service", "Blog", "Contact"],
    ru: ["главная страница", "О нас", "Сервисы", "Блог", "Контакты"],
};

const changeLang = (event) => {
    // Prevent form submission
    event.preventDefault();

    if (langBtn.innerHTML === "En") {
        lang.ru.forEach((item, index) => {
            if (navLink[index]) {
                navLink[index].innerHTML = item;
            }
        });
        langBtn.innerHTML = "Ru";
    } else {
        lang.en.forEach((item, index) => {
            if (navLink[index]) {
                navLink[index].innerHTML = item;
            }
        });
        langBtn.innerHTML = "En";
    }
};

langBtn.addEventListener('click', changeLang);
