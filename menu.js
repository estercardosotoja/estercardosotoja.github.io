let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('menu-mobile')
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const contactPopup = document.getElementById('contactPopup');


btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

openPopupBtn.addEventListener('click', function() {
    contactPopup.style.display = 'block';
});

closePopupBtn.addEventListener('click', function() {
    contactPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === contactPopup) {
        contactPopup.style.display = 'none';
    }
});