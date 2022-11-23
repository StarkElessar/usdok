import { isWebp } from './modules'
import { toggleWindowAuth } from './modules/toggleWindowAuth'
import { textareaHeightAuto } from './helpers/textareaHeightAuto'
import { dropdownGroup } from './helpers/dropdownGroup'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { toggleCreatePostPopup } from './modules/toggleCreatePostPopup'
import { toggleArticlePostMenu } from './modules/toggleArticlePostMenu'
import { tabUpdates } from './modules/tabUpdates'
import { settingsPage } from './modules/settingsPage'
import { openChatWindow } from './modules/openChatWindow'
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

toggleWindowAuth()
textareaHeightAuto('#sendMessage', 55)
toggleBurgerMenu()
dropdownGroup()
toggleCreatePostPopup()
toggleArticlePostMenu()
tabUpdates()
openChatWindow()

settingsPage()
window.onresize = () => settingsPage


console.log('Я работаю, я JS я подключился!')