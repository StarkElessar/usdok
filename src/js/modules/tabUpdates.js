const tabUpdates = () => {
  const tabsContainer = document.getElementById('tabUpdates')

  if (tabsContainer) {
    const tabsControlButtons = tabsContainer.querySelectorAll('.tab-control__button')
    const tabsItems = tabsContainer.querySelectorAll('.tab-content__item')

    tabsControlButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const tabId = button.dataset.id
        const currentTabItem = tabsContainer.querySelectorAll(`[data-item="${tabId}"]`)

        tabsControlButtons.forEach((button) => {
          button.classList.remove('_active')
        })
        button.classList.add('_active')

        tabsItems.forEach((item) => {
          item.classList.remove('_show')
        })

        if (tabId === 'all') {
          tabsItems.forEach((item, index) => {
            item.classList.add('_show')
          })
        } else {
          currentTabItem.forEach((item, index) => {
            item.classList.add('_show')
          })
        }

        const visibleItems = Array.from(tabsContainer.querySelectorAll('._show'))
        const lastVisibleItem = visibleItems[visibleItems.length - 1]
        const updatesEventBlockElement = lastVisibleItem.querySelector('.updates-event')

        updatesEventBlockElement.style.borderBottom = '0'
      })
    })

    tabsItems.forEach((item) => {
      item.classList.add('_show')
    })
  }
}

export { tabUpdates }