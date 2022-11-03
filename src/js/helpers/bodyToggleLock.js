export const bodyLock = () => {
  const pageWrapper = document.querySelector('.wrapper')
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  document.body.style.paddingRight = `${lockPaddingValue}px`
  document.body.classList.add('_lock')
}
export const bodyUnLock = () => {
  document.body.style.paddingRight = '0px'
  document.body.classList.remove('_lock')
}
