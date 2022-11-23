const openMessageInfo = () => {
  const chatContainer = document.querySelector('.chat-block')

  if (chatContainer) {
    const leftMessageButtons = chatContainer.querySelectorAll('.left-message__button-msg-setting')
    const rightMessageButtons = chatContainer.querySelectorAll('.right-message__button-msg-setting')

    if (leftMessageButtons) {
      leftMessageButtons.forEach((button) => {
        button.addEventListener('click', toggleMessageInfo)
      })
    }
    if (rightMessageButtons) {
      rightMessageButtons.forEach((button) => {
        button.addEventListener('click', toggleMessageInfo)
      })
    }

    function toggleMessageInfo() {
      const settingBlock = this.nextElementSibling

      settingBlock?.classList.toggle('_show')
    }
  }
}

export { openMessageInfo }