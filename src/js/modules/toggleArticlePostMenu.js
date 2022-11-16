const toggleArticlePostMenu = () => {
  const showMoreSettingsPost = document.querySelectorAll('.button-more-info')

  showMoreSettingsPost.forEach((button) => {
    button.onclick = (event) => {
      const parentNodeContainer = event.target.closest('.article-post')
        || event.target.closest('.sidebar-post__header')
      const postMenu = parentNodeContainer.querySelector('.menu-post') || null
      
      if (postMenu) {
        postMenu.classList.toggle('_show')
      }
    }
  })
}

export { toggleArticlePostMenu }
