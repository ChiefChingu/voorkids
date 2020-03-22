class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__overlay")
    // this.siteHeader = document.querySelector(".site-header")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__overlay--is-visible")
    // this.siteHeader.classList.toggle("site-header--is-expanded")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }
}


export default MobileMenu


// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }

