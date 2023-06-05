import styled from 'styled-components'

export const NavHeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 2em;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#fff')};

  @media all and (max-width: 767px) {
    padding: 1em;
  }
`

export const DesktopNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media all and (max-width: 767px) {
    display: none;
  }
`

export const DesktopUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const WebsiteLogo = styled.img`
  height: 50px;
  display: inline-block;
  padding: 1em;
`

export const DesktopProfileImg = styled.img`
  height: 40px;
  display: inline-block;
`

export const DesktopLiContainer = styled.li`
  margin-left: 1.5em;
`
export const DesktopLogoutButton = styled.button`
  padding: 0.5em 1.5em;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#fff' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#fff' : '#3b82f6')};
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#fff')};
  border-radius: 5px;
`
export const DesktopThemeBtn = styled.button`
  border: none;
  background-color: transparent;
`

export const MobileNavContainer = styled.div`
  display: none;

  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`
export const TransparentButton = styled(DesktopThemeBtn)``

export const PopUpOnHamburgerClickContainer = styled.div`
  position: fixed;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#fff')};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MobileMenuCloseBtn = styled(TransparentButton)`
  position: absolute;
  top: 60px;
  right: 60px;
`

export const MobileMenuPopupUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const MobileMenuPopupLiContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`
export const MobileMenuPopupParaName = styled.p`
  font-size: 1.8rem;
  margin-left: 0.7em;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`

export const PopUpLogoutContainer = styled(PopUpOnHamburgerClickContainer)`
  flex-direction: column;
  background-color: #231f2060;
`
export const PopUpLogoutHeading = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1em;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`
export const PopUpLogoutBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
  padding: 0.8em 1em;
  width: 80px;
  color: #fff;
  font-weight: 800px;
  font-size: 1.4rem;
  margin-inline: 1em;
`
export const PopUpLogoutBtnOutline = styled(PopUpLogoutBtn)`
  border: 1px solid ${props => (props.isDarkTheme ? '#cbd5e1' : '#64748b')};
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#64748b')};
  background-color: transparent;
`
export const PopUpMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#fff')};
  padding: 3rem;
  border-radius: 15px;
`
