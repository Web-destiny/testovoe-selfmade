let burgerMenuButton = document.querySelector('#nav-icon3')
let customNavBox = document.querySelector('.custom-nav__box')
let backCustomLayout = document.querySelector('.back-custom__layout')

burgerMenuButton.addEventListener('click', function (){
    burgerMenuButton.classList.toggle('open')
    customNavBox.classList.toggle('show-custom-menu')
    backCustomLayout.classList.toggle('back-layout')
})
backCustomLayout.addEventListener('click', function (){
    burgerMenuButton.classList.remove('open')
    customNavBox.classList.remove('show-custom-menu')
    backCustomLayout.classList.remove('back-layout')
})
