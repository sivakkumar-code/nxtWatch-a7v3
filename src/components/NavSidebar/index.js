import {Link} from 'react-router-dom'

import {GiGamepad, GiSave} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'

import {FaGripfire} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'

import {
  NavSidebarUlContainer,
  NavSidebarBgContainer,
  NavSidebarFooterContainer,
  NavSidebarFooterUlContainer,
  SocialLogoImg,
  NavSidebarFooterHeading,
  NavSidebarLiContainer,
  NavSidebarLiContainerPara,
} from './styledComponent'

const NavSidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <NavSidebarBgContainer isDarkTheme={isDarkTheme}>
          <NavSidebarUlContainer>
            <Link to="/" className="nav-link">
              <NavSidebarLiContainer>
                <AiFillHome
                  className={`nav-icon ${isDarkTheme ? 'white' : ''}`}
                />
                <NavSidebarLiContainerPara isDarkTheme={isDarkTheme}>
                  Home
                </NavSidebarLiContainerPara>
              </NavSidebarLiContainer>
            </Link>

            <Link to="/trending" className="nav-link">
              <NavSidebarLiContainer>
                <FaGripfire
                  className={`nav-icon ${isDarkTheme ? 'white' : ''}`}
                />
                <NavSidebarLiContainerPara isDarkTheme={isDarkTheme}>
                  Trending
                </NavSidebarLiContainerPara>
              </NavSidebarLiContainer>
            </Link>

            <Link to="/gaming" className="nav-link">
              <NavSidebarLiContainer>
                <GiGamepad
                  className={`nav-icon ${isDarkTheme ? 'white' : ''}`}
                />
                <NavSidebarLiContainerPara isDarkTheme={isDarkTheme}>
                  Gaming
                </NavSidebarLiContainerPara>
              </NavSidebarLiContainer>
            </Link>

            <Link to="/saved-videos" className="nav-link">
              <NavSidebarLiContainer>
                <GiSave className={`nav-icon ${isDarkTheme ? 'white' : ''}`} />
                <NavSidebarLiContainerPara isDarkTheme={isDarkTheme}>
                  Saved Videos
                </NavSidebarLiContainerPara>
              </NavSidebarLiContainer>
            </Link>
          </NavSidebarUlContainer>
          <NavSidebarFooterContainer>
            <NavSidebarFooterHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </NavSidebarFooterHeading>
            <NavSidebarFooterUlContainer>
              <li>
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </li>
              <li>
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </li>
              <li>
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </li>
            </NavSidebarFooterUlContainer>
            <NavSidebarFooterHeading isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </NavSidebarFooterHeading>
          </NavSidebarFooterContainer>
        </NavSidebarBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavSidebar
