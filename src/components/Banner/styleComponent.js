import styled from 'styled-components'

export const BannerCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  background-position: center;
  padding: 3em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media all and (max-width: 767px) {
    padding: 1.5em;
  }
`
export const BannerCardTypeContainer = styled.div`
  width: 40%;

  @media all and (max-width: 767px) {
    width: 80%;
  }
`

export const BannerCardImage = styled.img`
  height: 40px;
`

export const BannerCardButton = styled.button`
  background-color: transparent;
  border: none;
`
export const BannerCardGetNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.8em 1.5em;
  background-color: #fff;
`
export const BannerCardHeading = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 1em 0;
`
