import Swiper, { Pagination, Autoplay } from 'swiper'

const sliderPostDetail = () => {
  const swiperContainer = document.querySelector('.full-post__swiper')

  if (swiperContainer) {
    new Swiper(swiperContainer, {
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
  }
}

export { sliderPostDetail }
