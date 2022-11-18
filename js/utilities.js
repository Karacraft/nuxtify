//  loadTheme for Vuetify
const loadTheme = () => {
  if (localStorage.getItem('nuxtify-theme')) {
    const theme = JSON.parse(localStorage.getItem('nuxtify-theme'))
    console.info(theme + ' theme loaded.')
    return theme
  }
}

// saveTheme for Vuetify
const saveTheme = (theme) => {
  localStorage.setItem('nuxtify-theme', JSON.stringify(theme))
  console.info(theme + ' theme saved.')
}

const themeExists = () => {
  if (localStorage.getItem('nuxtify-theme')) {
    return true
  }
  return false
}

export {
  loadTheme,
  saveTheme,
  themeExists
}
