//                   first method
// let image = document.querySelector('img');
// let langBtn = document.querySelector('button');

// langBtn.onclick = () => {
//     image.attributes[0].value = "https://i.pinimg.com/736x/85/03/54/850354b0fbd7529c0bdfeb0cb4522c9a.jpg";
// };

//                   second method
// let image = document.querySelector('img');
// let langBtn = document.querySelector('button');

// langBtn.onclick = () => {
//     if (image.attributes[0].value === "https://i.pinimg.com/736x/a3/82/d3/a382d337cbbab0b2a938e01675c74600.jpg") {
//         image.attributes[0].value = "https://i.pinimg.com/736x/85/03/54/850354b0fbd7529c0bdfeb0cb4522c9a.jpg";
//     }else {
//         image.attributes[0].value = "https://i.pinimg.com/736x/a3/82/d3/a382d337cbbab0b2a938e01675c74600.jpg"
//     }
// };
//                   third method

// let image = document.querySelector('img');
// let langBtn = document.querySelector('button');

// langBtn.addEventListener('click', () => {
//     image.attributes[0].value = "https://i.pinimg.com/736x/85/03/54/850354b0fbd7529c0bdfeb0cb4522c9a.jpg";
// });

//                   four method

// let originalSrc = image.src;
// let newSrc = "https://i.pinimg.com/736x/85/03/54/850354b0fbd7529c0bdfeb0cb4522c9a.jpg";

// function change() {
//     if (image.src === originalSrc) {
//         image.src = newSrc;
//     } else {
//         image.src = originalSrc;
//     }
// }

// langBtn.addEventListener('click', change);