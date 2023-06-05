import styled from 'styled-components'

export const VideoCardLiContainer = styled.li`
  display: flex;
  flex-direction: column;
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
  padding-top: 1em;
`

export const VideoDetailsTypeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoCardTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};

  @media all and (min-width: 1200px) {
    font-size: 2rem;
  }
  @media all and (max-width: 960px) {
    font-size: 1.8rem;
  }
`

export const VideoCardPara = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.6em;
  color: #64748b;

  @media all and (max-width: 960px) {
    font-size: 1.4rem;
  }
`
