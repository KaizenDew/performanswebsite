
// Mobil menü butonu fonksiyonu
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

 //açık kalan mobil menüyü kapatır
window.onscroll = () => {
    navbar.classList.remove('active');
};