const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');



const handleCLick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--acitve')
}
hamburger.addEventListener('click', handleCLick)