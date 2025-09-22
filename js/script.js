import {statistics} from './constants.js'
let header = document.querySelector('header');
let listElements = document.querySelectorAll('a')
window.addEventListener('scroll', () => {
    let height = window.scrollY

    if (height >= 40) {
        header.style.backgroundColor = "rgb(211, 211, 211)" 
        header.style.boxShadow = '0 2px 6px rgba(0,0,0, 0.5)';
        header.style.color = "#333"
        listElements.forEach(el => {
            el.style.color = "#333"
        })
    }
    else {
        header.style.backgroundColor = "" 
        header.style.boxShadow = '';
        header.style.color = ""
        listElements.forEach(el => {
            el.style.color = ""
        })
    }
})
let stats = document.querySelector(".statistics")
statistics.map((el) => {
    let div = document.createElement('div');
    let h1 = document.createElement("h1");
    let p = document.createElement("p")
    h1.textContent = el.value;
    p.textContent = el.title;
    div.appendChild(h1);
    div.appendChild(p);
    stats.appendChild(div)
})  