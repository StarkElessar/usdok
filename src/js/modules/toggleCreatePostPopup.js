import { bodyLock, bodyUnLock } from '../helpers/bodyToggleLock'

export const toggleCreatePostPopup = () => {
  const createPostAction = document.querySelector('.new-post__form-action')
  const createPostPopup = document.querySelector('.create-popup')

  if (createPostAction) {
    createPostAction.onclick = (event) => {
      event.preventDefault()
      const target = event.target

      if (
        target &&
        (target.closest('textarea') ||
          target.closest('.new-post__add-file-group'))
      ) {
        createPostPopup.classList.add('_show')
        bodyLock()
      }
    }
  }

  if (createPostPopup) {
    createPostPopup.onclick = (event) => {
      const target = event.target

      if (
        target &&
        (target.classList.contains('_overlay') ||
          target.closest('.modal__button-close'))
      ) {
        createPostPopup.classList.remove('_show')
        bodyUnLock()
      }
    }
  }
}
