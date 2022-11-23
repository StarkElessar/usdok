const openChatWindow = () => {
  const dialogContainer = document.querySelector('.dialogs')

  if (dialogContainer) {
    const dialogsList = dialogContainer.querySelectorAll('.dialogs__item')
    const chatContainer = document.querySelector('.chat-block')
    const closeChatButton = chatContainer.querySelector('[data-close-chat]')

    dialogsList.forEach((dialog) => {
      dialog.addEventListener('click', () => {
        dialogContainer.classList.add('_chat-is-open')
        chatContainer.classList.add('_chat-is-open')
      })
    })

    closeChatButton.addEventListener('click', () => {
      console.log('click');
      dialogContainer.classList.remove('_chat-is-open')
      chatContainer.classList.remove('_chat-is-open')
    })
  }
}

export { openChatWindow }
