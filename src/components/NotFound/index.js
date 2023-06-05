import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundBGContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)

      const themeNotFoundImg = () =>
        isDarkTheme ? (
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
            alt="not found"
          />
        ) : (
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
          />
        )

      return (
        <NotFoundBGContainer isDarkTheme={isDarkTheme}>
          <NotFoundContainer>
            {themeNotFoundImg()}
            <NotFoundHeading isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundPara isDarkTheme={isDarkTheme}>
              We are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundContainer>
        </NotFoundBGContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
