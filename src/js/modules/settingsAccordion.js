const settingsAccordion = () => {
  const settingsList = document.querySelector('.settings-accordion')

  if (settingsList) {
    const accordionItems = settingsList.querySelectorAll(
      '.settings-accordion__item'
    )

    accordionItems.forEach((item, index) => {
      const header = item.querySelector('.settings-accordion__menu-mobile')
      const content = item.querySelector('.settings-accordion__body')

      checkActiveClass(item)

      if (item.hasAttribute('data-open')) {
        item.classList.add('_is-open')
        content.style.height = `${content.scrollHeight}px`
      }

      header.addEventListener('click', () => {
        checkActiveClass(item)

        item.classList.toggle('_is-open')
        if (item.classList.contains('_is-open')) {
          content.style.height = `${content.scrollHeight}px`
        } else {
          content.style.height = 0
        }

        if (settingsList.dataset.autoClosing === 'true') {
          removeOpen(index)
        }
      })
    })

    function removeOpen(i) {
      accordionItems.forEach((item, index) => {
        if (i != index) {
          const content = item.querySelector('.settings-accordion__body')

          item.classList.remove('_is-open')
          content.style.height = 0
        }
      })
    }

    function checkActiveClass(element) {
      if (element.classList.contains('_active')) {
        element.classList.remove('_active')
      }
    }
  }
}

export { settingsAccordion }
