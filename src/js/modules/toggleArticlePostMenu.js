const toggleArticlePostMenu = () => {
  const showMoreSettingsPost = document.querySelectorAll('.article-post__more-info')

  showMoreSettingsPost.forEach((button) => {
    button.onclick = (event) => {
      console.log(event.target.closest('.article-post'));
      const parentNodeContainer = event.target.closest('.article-post')
      const postMenu = parentNodeContainer.querySelector('.article-post__menu') || null
      
      if (postMenu) {
        postMenu.classList.toggle('_show')
      }
    }
  })
}

export { toggleArticlePostMenu }
