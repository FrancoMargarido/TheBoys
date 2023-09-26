import React from 'react'
import Cart from '../../common/cart/cart'
import MenuH from '../../common/icons/MenuH'
import Close from '../../common/icons/Close'




const Nav = () => {

    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


return (
    <header>
    <nav className="nav container">
    <a href="" class="nav__logo">Vought</a>
    <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
            <li classNameName="nav__item">
                <a href="#home" className="nav__link active-link">Inicio</a>
            </li>
            <li className="nav__item">
                <a href="#about" className="nav__link">The 7</a>
            </li>
            <li className="nav__item">
                <a href="#discover" className="nav__link">Compound V</a>
            </li>
            <li className="nav__item">
                <a href="#place" className="nav__link">Side Effects</a>
            </li>

        </ul>

        <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
        </div>

    </div>

    <div className="nav__toggle" id="nav-toggle">
        <i className="ri-function-line"></i>
    </div>
        <div>
            <Cart/>

        </div>
</nav>
</header>
)
}

export default Nav