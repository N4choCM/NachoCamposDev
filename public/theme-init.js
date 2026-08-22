(function () {
  try {
    var theme = JSON.parse(localStorage.getItem('theme') || '"dark"')
    document.documentElement.classList.add(theme === 'light' ? 'light' : 'dark')
  } catch (e) {
    document.documentElement.classList.add('dark')
  }
})()
