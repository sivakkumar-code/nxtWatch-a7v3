import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideo: () => {},
})

export default ThemeContext
