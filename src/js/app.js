import { isWebp } from './modules'
import { toggleWindowAuth } from './modules/toggleWindowAuth'
import { textareaHeightAuto } from './helpers/textareaHeightAuto'
import { dropdownGroup } from './helpers/dropdownGroup'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { authenticate } from './modules/authenticate'
import { toggleCreatePostPopup } from './modules/toggleCreatePostPopup'
import { toggleArticlePostMenu } from './modules/toggleArticlePostMenu'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================

const { pathname } = location
const isDev = location.href === 'http://localhost:3000/'
const isAuth = isDev ? pathname === '/' : pathname === '/usdok/'

console.log(isDev, isAuth);

isAuth && toggleWindowAuth()
// authenticate(isAuth)
textareaHeightAuto('#new-post', 44)
toggleBurgerMenu()
dropdownGroup()
toggleCreatePostPopup()
toggleArticlePostMenu()