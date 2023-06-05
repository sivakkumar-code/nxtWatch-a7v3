import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu, GiGamepad, GiSave} from 'react-icons/gi'

import {AiFillHome, AiOutlineCloseCircle} from 'react-icons/ai'

import {FaGripfire} from 'react-icons/fa'

import {IoMdMoon, IoIosSunny, IoIosLogOut} from 'react-icons/io'

import ThemeContext from '../../context/ThemeContext'

import {
  NavHeaderContainer,
  DesktopUlContainer,
  DesktopNavContainer,
  WebsiteLogo,
  DesktopProfileImg,
  DesktopLiContainer,
  DesktopLogoutButton,
  DesktopThemeBtn,
  MobileNavContainer,
  TransparentButton,
  PopUpOnHamburgerClickContainer,
  MobileMenuCloseBtn,
  MobileMenuPopupUlContainer,
  MobileMenuPopupLiContainer,
  MobileMenuPopupParaName,
  PopUpLogoutContainer,
  PopUpLogoutHeading,
  PopUpLogoutBtn,
  PopUpLogoutBtnOutline,
  PopUpMainContainer,
} from './styledComponent'

class Header extends Component {
  state = {showMobileMenu: false}

  onHamburgerMenuClick = () => this.state({showMobileMenu: true})

  logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {showMobileMenu} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value

          const themeLogo = () =>
            isDarkTheme ? (
              <DesktopThemeBtn
                type="button"
                onClick={() => changeTheme()}
                data-testid="theme"
              >
                <IoIosSunny className="theme-icon white" />
              </DesktopThemeBtn>
            ) : (
              <DesktopThemeBtn
                type="button"
                onClick={() => changeTheme()}
                data-testid="theme"
              >
                <IoMdMoon className="theme-icon" />
              </DesktopThemeBtn>
            )

          const websiteLogo = () =>
            isDarkTheme ? (
              <Link className="nav-link" to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )

          return (
            <NavHeaderContainer isDarkTheme={isDarkTheme}>
              <DesktopNavContainer>
                <div>{websiteLogo()}</div>
                <DesktopUlContainer>
                  <DesktopLiContainer>{themeLogo()}</DesktopLiContainer>
                  <DesktopLiContainer>
                    <DesktopProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </DesktopLiContainer>
                  <DesktopLiContainer>
                    <div>
                      <Popup
                        modal
                        trigger={
                          <DesktopLogoutButton
                            type="button"
                            isDarkTheme={isDarkTheme}
                          >
                            Logout
                          </DesktopLogoutButton>
                        }
                      >
                        {close => (
                          <PopUpLogoutContainer isDarkTheme={isDarkTheme}>
                            <PopUpMainContainer isDarkTheme={isDarkTheme}>
                              <PopUpLogoutHeading isDarkTheme={isDarkTheme}>
                                Are you sure, you want to logout
                              </PopUpLogoutHeading>
                              <div style={{textAlign: 'center'}}>
                                <PopUpLogoutBtnOutline
                                  type="button"
                                  onClick={() => close()}
                                  isDarkTheme={isDarkTheme}
                                >
                                  Cancel
                                </PopUpLogoutBtnOutline>
                                <PopUpLogoutBtn
                                  type="button"
                                  onClick={this.logoutUser}
                                >
                                  Confirm
                                </PopUpLogoutBtn>
                              </div>
                            </PopUpMainContainer>
                          </PopUpLogoutContainer>
                        )}
                      </Popup>
                    </div>
                  </DesktopLiContainer>
                </DesktopUlContainer>
              </DesktopNavContainer>

              <MobileNavContainer>
                <div>{websiteLogo()}</div>
                <DesktopUlContainer>
                  <DesktopLiContainer>{themeLogo()}</DesktopLiContainer>
                  <DesktopLiContainer>
                    <div>
                      <Popup
                        modal
                        trigger={
                          <TransparentButton
                            type="button"
                            onClick={this.onHamburgerMenuClick}
                          >
                            <GiHamburgerMenu
                              className={`theme-icon ${
                                isDarkTheme ? 'white' : ''
                              }`}
                            />
                          </TransparentButton>
                        }
                      >
                        {close => (
                          <PopUpOnHamburgerClickContainer
                            isDarkTheme={isDarkTheme}
                          >
                            <MobileMenuPopupUlContainer>
                              <Link to="/" className="nav-link">
                                <MobileMenuPopupLiContainer>
                                  <AiFillHome
                                    className={`theme-icon ${
                                      isDarkTheme ? 'white' : ''
                                    }`}
                                  />
                                  <MobileMenuPopupParaName
                                    isDarkTheme={isDarkTheme}
                                  >
                                    Home
                                  </MobileMenuPopupParaName>
                                </MobileMenuPopupLiContainer>
                              </Link>

                              <Link to="/trending" className="nav-link">
                                <MobileMenuPopupLiContainer>
                                  <FaGripfire
                                    className={`theme-icon ${
                                      isDarkTheme ? 'white' : ''
                                    }`}
                                  />
                                  <MobileMenuPopupParaName
                                    isDarkTheme={isDarkTheme}
                                  >
                                    Trending
                                  </MobileMenuPopupParaName>
                                </MobileMenuPopupLiContainer>
                              </Link>

                              <Link to="/gaming" className="nav-link">
                                <MobileMenuPopupLiContainer>
                                  <GiGamepad
                                    className={`theme-icon ${
                                      isDarkTheme ? 'white' : ''
                                    }`}
                                  />
                                  <MobileMenuPopupParaName
                                    isDarkTheme={isDarkTheme}
                                  >
                                    Gaming
                                  </MobileMenuPopupParaName>
                                </MobileMenuPopupLiContainer>
                              </Link>

                              <Link to="/saved-videos" className="nav-link">
                                <MobileMenuPopupLiContainer>
                                  <GiSave
                                    className={`theme-icon ${
                                      isDarkTheme ? 'white' : ''
                                    }`}
                                  />
                                  <MobileMenuPopupParaName
                                    isDarkTheme={isDarkTheme}
                                  >
                                    Saved Videos
                                  </MobileMenuPopupParaName>
                                </MobileMenuPopupLiContainer>
                              </Link>
                            </MobileMenuPopupUlContainer>
                            <MobileMenuCloseBtn
                              type="button"
                              onClick={() => close()}
                            >
                              <AiOutlineCloseCircle
                                className={`theme-icon ${
                                  isDarkTheme ? 'white' : ''
                                }`}
                              />
                            </MobileMenuCloseBtn>
                          </PopUpOnHamburgerClickContainer>
                        )}
                      </Popup>
                    </div>
                  </DesktopLiContainer>
                  <DesktopLiContainer>
                    <div>
                      <Popup
                        modal
                        trigger={
                          <TransparentButton type="button">
                            <IoIosLogOut
                              className={`theme-icon ${
                                isDarkTheme ? 'white' : ''
                              }`}
                            />
                          </TransparentButton>
                        }
                      >
                        {close => (
                          <PopUpLogoutContainer isDarkTheme={isDarkTheme}>
                            <PopUpMainContainer
                              isDarkTheme={isDarkTheme}
                              style={{width: '80%'}}
                            >
                              <PopUpLogoutHeading isDarkTheme={isDarkTheme}>
                                Are you sure, you want to logout
                              </PopUpLogoutHeading>
                              <div style={{'text-align': 'center'}}>
                                <PopUpLogoutBtnOutline
                                  type="button"
                                  onClick={() => close()}
                                  isDarkTheme={isDarkTheme}
                                >
                                  Cancel
                                </PopUpLogoutBtnOutline>
                                <PopUpLogoutBtn
                                  type="button"
                                  onClick={this.logoutUser}
                                >
                                  Confirm
                                </PopUpLogoutBtn>
                              </div>
                            </PopUpMainContainer>
                          </PopUpLogoutContainer>
                        )}
                      </Popup>
                    </div>
                  </DesktopLiContainer>
                </DesktopUlContainer>
              </MobileNavContainer>
            </NavHeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
