export const dropdownGroup = () => {
  document.addEventListener('click', ({ target }) => {
    const dropdown = target.closest('.custom-dropdown')

    if (dropdown) {
      const dropdownSelectButton = dropdown.querySelector('[data-dropdown-button]')
      const dropdownLabelButton = dropdown.querySelector('.custom-dropdown__label')
      const dropdownList = dropdown.querySelector('[data-dropdown-list]')
      const dropdownInput = dropdown.querySelector('input')

      console.log(target === dropdownSelectButton);

      if (!target.closest('[data-dropdown-button]')) {
        dropdownSelectButton.classList.remove('_active')
        dropdownList.classList.remove('_show')
      }
      if (target.closest('[data-dropdown-button]')) {
        dropdownSelectButton.classList.toggle('_active')
        dropdownList.classList.toggle('_show')
      }
      if (target.closest('[data-value]')) {
        dropdownLabelButton.innerText = target.dataset.value
        dropdownInput.value = target.dataset.value
        dropdownSelectButton.focus()
      }

      dropdown.addEventListener('keydown', ({ key }) => {
        if (key === 'Tab' || key === 'Escape') {
          dropdownSelectButton.classList.remove('_active')
          dropdownList.classList.remove('_show')
        }
      })
    }
  })
}
