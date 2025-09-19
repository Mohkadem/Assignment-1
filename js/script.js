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