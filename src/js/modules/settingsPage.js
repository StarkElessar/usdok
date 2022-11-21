import { settingsAccordion } from "./settingsAccordion"

const settingsPage = () => {
  const settingsContainer = document.getElementById('settingsTable')
  
  if (settingsContainer) {
    const settingsMenuButtons = Array.from(settingsContainer.querySelectorAll('[data-menu-settings]'))
    const settingsContentItems = Array.from(settingsContainer.querySelectorAll('.settings-accordion__body'))
    const settingsList = Array.from(settingsContainer.querySelectorAll('[data-type-settings]'))

    window.innerWidth < 768 && settingsAccordion()

    window.addEventListener('resize', () => {
      settingsContentItems.forEach((item) => item.style.height = null)
      settingsList.forEach((itemLi) => {
        itemLi.classList.remove('_active')
        itemLi.classList.remove('_is-open')
      })
      
      settingsAccordion()
      if (window.innerWidth > 768) {
        settingsList[0].classList.add('_active')
      } else {
        settingsList[0].classList.add('_is-open')

        const contentFirstItem = settingsList[0].querySelector('.settings-accordion__body')
        contentFirstItem.style.height = `${contentFirstItem.scrollHeight}px`
      } 
    })

    settingsMenuButtons.forEach((button) => {
      button.addEventListener('click',  () => {
        const settingId = button.dataset.menuSettings
        const settingCurrentItem = settingsContainer.querySelector(`[data-type-settings="${settingId}"]`)

        settingsMenuButtons.forEach((button) => button.classList.remove('_active'))
        settingsList.forEach((item) => item.classList.remove('_active'))

        button.classList.add('_active')
        settingCurrentItem.classList.add('_active')
      })
    })
  }
}

export { settingsPage }