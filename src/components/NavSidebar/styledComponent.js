import styled from 'styled-components'

export const NavSidebarBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 2em 1em;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#fff')};

  @media all and (max-width: 767px) {
    display: none;
  }
`

export const NavSidebarUlContainer = styled.ul`
  list-style-type: none;
`

export const NavSidebarLiContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  cursor: pointer;
`

export const NavSidebarLiContainerPara = styled.p`
  font-size: 1.8rem;
  margin-left: 1em;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`

export const NavSidebarFooterContainer = styled.div`
  //   background-color: green;
`

export const NavSidebarFooterUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const SocialLogoImg = styled.img`
  width: 30px;
  margin-right: 1.5em;
`
export const NavSidebarFooterHeading = styled.p`
  font-size: 1.8rem;
  margin: 1em 0;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`
