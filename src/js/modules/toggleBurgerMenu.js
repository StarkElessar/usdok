import { bodyLock, bodyUnLock } from "../helpers/bodyToggleLock"

export const toggleBurgerMenu = () => {
  const burgerButton = document.querySelector('.header__icon-menu')
  const burgerMenuContainer = document.getElementById('sidebar')

  let isLock = false

  if (burgerButton) {
    burgerButton.onclick = () => {
      isLock = !isLock
      burgerMenuContainer.classList.toggle('_show')
      isLock ? bodyLock() : bodyUnLock()
    }
    
    burgerMenuContainer.onclick = () => {
      if (burgerMenuContainer.classList.contains('_show')) {
        isLock = false
        burgerMenuContainer.classList.remove('_show')
        bodyUnLock()
      }
    }
  }
}