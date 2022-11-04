export const authenticate = (flagIsAuth) => {
  const buttonLogin = document.querySelector('.header__login')
  const userProfileLabel = document.querySelector('.header__profile')
  const menu = document.querySelector('.menu')

  if (flagIsAuth) {
    buttonLogin.classList.add('_hide')
    userProfileLabel.classList.remove('_hide')
    menu.classList.remove('_hide')
  } else {
    buttonLogin.classList.remove('_hide')
    userProfileLabel.classList.add('_hide')
    menu.classList.add('_hide')
  }
}