import Swiper, { Pagination, Autoplay } from 'swiper'

const sliderPagePosts = () => {
  const postsPreviewContainer = document.querySelector('.page__posts-wrapper')

  if (postsPreviewContainer) {
    const articlePostsSwiper = postsPreviewContainer.querySelectorAll('.article-post__swiper')

    if (articlePostsSwiper.length > 0) {
      articlePostsSwiper.forEach((swiper) => {
        new Swiper(swiper, {
          modules: [Pagination, Autoplay],
          speed: 400,
          autoplay: {
            delay: 2000,
          },
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        })
      })
    }
  }
}

export { sliderPagePosts }