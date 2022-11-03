export const toggleElementsWindowsAuth = (isLogin) => {
  const passwordRequiredField = document.getElementById('pas-req-field')
  const checkAcceptField = document.getElementById('check-accept-field')
  const labelHelpText = document.querySelector('.modal__footer-text')
  const authButton = document.getElementById('auth-button')
  const loginButton = document.getElementById('login-button')
  const loginLink = document.getElementById('login-link')
  const authLink = document.getElementById('auth-link')
  
  if (isLogin) {
    labelHelpText.innerText = 'Войти с помощью'
    passwordRequiredField.style.display = 'none'
    checkAcceptField.style.display = 'none'
    loginLink.style.display = 'none'
    authButton.style.display = 'none'
    loginButton.style.display = ''
    authLink.style.display = ''
  } else {
    labelHelpText.innerText = 'Зарегистрироваться с помощью'
    passwordRequiredField.style.display = ''
    checkAcceptField.style.display = ''
    loginLink.style.display = ''
    authButton.style.display = ''
    loginButton.style.display = 'none'
    authLink.style.display = 'none'
  }
}
