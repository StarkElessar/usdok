import { bodyLock, bodyUnLock } from '../helpers/bodyToggleLock'
import { toggleElementsWindowsAuth } from '../helpers/toggleElementsWindowsAuth'

export const toggleWindowAuth = () => {
  const openWindowAuthButton = document.querySelector('.button_auth')
  const windowAuth = document.querySelector('[modal-open]')

  let isLogin = true

  if (windowAuth) {
    openWindowAuthButton.addEventListener('click', () => {
      console.log('click')
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

      if (target && target.closest('#auth-link')) {
        isLogin = false
        toggleElementsWindowsAuth(isLogin)

        document.body.classList.add('_is-register')
      }

      if (target && target.closest('#login-link')) {
        isLogin = true
        toggleElementsWindowsAuth(isLogin)
        document.body.classList.remove('_is-register')
      }
    })
  }
}
