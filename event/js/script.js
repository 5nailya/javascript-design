// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click',()=>{
//     h1.innerHTML = "Test"
// })



// btn.onmouseover=()=>{
//     h1.innerHTML = "Hello"
// }



// btn.onmouseout=()=>{
//     h1.innerHTML = "Hello"
// }



// btn.onmouseup=()=>{
//     h1.innerHTML = "Hello"
// }



// btn.onmouseup=()=>{
//     h1.innerHTML = "Hello"
// }
// btn.onmousedown=()=>{
//     h1.innerHTML = "test"
// }



// const input = document.querySelector('input');

// input.onkeyup = ()=>{
//     input.style.height = 'auto';
//     input.style.transition = '.5s';
//     input.style.backgroundColor = "black";
//     input.style.color = "white";


// }
// input.onkeydown = ()=>{
//     input.style.height = '200px';
//     input.style.transition = '.5s';
//     input.style.backgroundColor = "green";
//     input.style.color = "white";
// }



// const btn = document.querySelector('button');
// const del = document.querySelector('#delete');
// const h1 = document.querySelector('h1');
// const image = document.querySelector('img');
// btn.onclick = ()=> {
//     // h1.style.color = "green";
//     // h1.attributes[0].value = 'green';
//     // h1.className = "green";
//     // image.attributes[0].value = 'https:img.freepik.com/premium-photo/close-up-portrait-cat_1048944-6523411.jpg';
//     // h1.classList.add('green', 'red') //ad
//     // h1.classList.toggle('green')
//     // h1.classList.toggle('hide')

    
// }
// del.onclick = ()=> {
//     h1.classList.remove('green')  //remove

// }


const nav = document.querySelector('nav');
const modeBtn = document.querySelector('#mode');

modeBtn.onclick = ()=>{
    nav.className = "navbar navbar-expand-lg bg-dark navbar-dark"
}