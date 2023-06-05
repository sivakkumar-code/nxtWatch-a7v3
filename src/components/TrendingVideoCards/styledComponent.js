import styled from 'styled-components'

export const VideoCardLiContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  margin: 2em 0;

  @media all and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const ThumbnailContainer = styled.div`
  width: 100%;
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const ChannelProfile = styled.img`
  width: 50px;
  margin-right: 1em;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   padding-top: 1em;
`

export const VideoDetailsTypeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoCardTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};

  @media all and (min-width: 1200px) {
    font-size: 2.5rem;
  }
  @media all and (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media all and (max-width: 600px) {
    font-size: 1.6rem;
  }
`

export const VideoCardPara = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.6em;
  margin-right: 0.6em;
  color: #64748b;

  @media all and (min-width: 1200px) {
    font-size: 2.1rem;
  }
  @media all and (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media all and (max-width: 600px) {
    font-size: 1.4rem;
  }
`
