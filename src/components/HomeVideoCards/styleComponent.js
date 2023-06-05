import styled from 'styled-components'

export const VideoCardLiContainer = styled.li``

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
  align-items: flex-start;
  padding-top: 1em;
`

export const VideoDetailsTypeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoCardTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`

export const VideoCardPara = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.6em;
  margin-right: 0.6em;
  color: #64748b;
`
