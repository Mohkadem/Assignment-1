let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let height = window.scrollY

    if (height >= 40) {
        header.style.backgroundColor = "rgb(211, 211, 211, 0.3)" 
        header.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    }
    else {
        header.style.backgroundColor = "" 
        header.style.boxShadow = '';
    
    }
})