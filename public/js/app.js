document.querySelector('.banner-btn').addEventListener('click', () => {
  document.querySelector('.banner').style.display = 'none';
  document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;'
})

document.querySelector('.x-btn').addEventListener('click', () => {
  document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;'
  document.querySelector('.banner').style.display = 'flex'
  document.querySelector('.container').style.cssText = 'background:linear-gradient(rgba(0, 0, 0, 0.719), rgba(0, 0, 0, 0.555)),  url(./images/drew-graham-jL8v8KWGv3E-unsplash.jpg) no-repeat center; background-size: cover;'
})

document.querySelector('.x-btn-sign-up').addEventListener('click', () => {
  document.querySelector('.form-container-of-signup').style.cssText = 'opacity: 0; visibility: hidden;'
  document.querySelector('.banner').style.display = 'none';
  document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;'
  document.querySelector('.container').style.cssText = 'background:linear-gradient(rgba(0, 0, 0, 0.719), rgba(0, 0, 0, 0.555)),  url(./images/drew-graham-jL8v8KWGv3E-unsplash.jpg) no-repeat center; background-size: cover;'
})

// document.querySelector('.tour').addEventListener('click', function (e) {
//   location.assign('./landing.html')
// })

// document.querySelector('#direct2').addEventListener('click', function (e) {
//   location.assign('./landing.html')
// })

document.querySelector('#signUp').addEventListener('click', function () {
  document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;'
  document.querySelector('.form-container-of-signup').style.cssText = 'opacity: 1; visibility: visible;'
})

document.querySelector('#signUpNow').addEventListener('click', function () {
  location.assign('/sign-up')
  document.querySelector('.banner').style.display = 'none';
  document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;'
  document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;'
  document.querySelector('.form-container-of-signup').style.cssText = 'opacity: 1; visibility: visible;'
})

