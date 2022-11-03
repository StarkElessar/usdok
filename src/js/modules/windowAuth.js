import { bodyLock, bodyUnLock } from '../helpers/bodyToggleLock'
import { toggleElementsWindowsAuth } from '../helpers/toggleElementsWindowsAuth'

export const windowAuth = () => {
  const openWindowAuthButton = document.querySelector('.header__login')
  const windowAuth = document.querySelector('[modal-open]')
  const loginLink = document.getElementById('login-link')
  const authLink = document.getElementById('auth-link')

  let isLogin = true

  openWindowAuthButton.addEventListener('click', () => {
    windowAuth.classList.add('_show')
    bodyLock()

    toggleElementsWindowsAuth(isLogin)
  })

  windowAuth.addEventListener('click', (event) => {
    const target = event.target

    if (
      target &&
      (target === windowAuth || target.closest('.modal__button-close'))
    ) {
      windowAuth.classList.remove('_show')
      bodyUnLock()
    }

    if (target && target === authLink) {
      isLogin = false
      toggleElementsWindowsAuth(isLogin)
    }

    if (target && target === loginLink) {
      isLogin = true
      toggleElementsWindowsAuth(isLogin)
    }
  })
}
