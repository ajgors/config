const div = document.querySelector('.hamburger__div');

function openNav(){
    document.querySelector('.hamburger__overlay').classList.toggle('hamburger__overlay--toggle')
    div.style.toggle('transform')
}

