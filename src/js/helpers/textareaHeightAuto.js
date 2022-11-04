export const textareaHeightAuto = (element, currentHeight) => {
  const textarea = document.querySelector(element)

  if (textarea) {
    textarea.addEventListener('keyup', (event) => {
      textarea.style.height = `${currentHeight}px`
      
      const textareaScrollHeight = event.target.scrollHeight
  
      textarea.style.height = `${textareaScrollHeight}px`
    })
  }
}