var master = document.getElementById('master')
var dark = false

master.onclick = () => {
  if (dark) {
    console.log('Day Time (onClick)')
    master.innerHTML = '(master)'
    document.documentElement.style.setProperty('--main-bg-color', '#fff')
    document.documentElement.style.setProperty('--main-color', '#000')
    dark = false
  } else {
    console.log('Night Time (onClick)')
    master.innerHTML = '(dark)'
    document.documentElement.style.setProperty('--main-bg-color', '#000')
    document.documentElement.style.setProperty('--main-color', '#fff')
    dark = true
  }
}

function dayNight() {
  var currentTime = new Date().getHours()

  if (currentTime > 6 && currentTime <= 18) {
    console.log('Day Time')
    master.innerHTML = '(master)'
    document.documentElement.style.setProperty('--main-bg-color', '#fff')
    document.documentElement.style.setProperty('--main-color', '#000')
    dark = false
  } else {
    console.log('Night Time')
    master.innerHTML = '(master-dark)'
    document.documentElement.style.setProperty('--main-bg-color', '#000')
    document.documentElement.style.setProperty('--main-color', '#fff')
    dark = true
  }
}

dayNight()
