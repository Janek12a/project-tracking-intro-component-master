const openNav = document.querySelector(".burger-icon")
const closeNav = document.querySelector(".exit-icon")
const nav= document.querySelector('.nav')
const burger =document.querySelector('.nav-btn')


const showNav = () => {
    openNav.classList.toggle('hide')
    closeNav.classList.toggle('hide')
    nav.classList.toggle('hide')
}

burger.addEventListener('click', showNav)

