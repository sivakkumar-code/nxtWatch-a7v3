import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardLiContainer,
  ThumbnailContainer,
  ThumbnailImg,
  ChannelProfile,
  ChannelDetailsContainer,
  VideoDetailsTypeContainer,
  VideoCardTitle,
  VideoCardPara,
} from './styleComponent'

const HomeVideoCards = props => {
  const {object} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = object
  const {name, profile_image_url: proImgUrl} = channel

  const getFormattedYear = date => formatDistanceToNow(new Date(date))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link className="nav-link" to={`/videos/${id}`}>
            <VideoCardLiContainer>
              <ThumbnailContainer>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              </ThumbnailContainer>
              <ChannelDetailsContainer>
                <ChannelProfile src={proImgUrl} alt="channel logo" />
                <div>
                  <VideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoCardTitle>
                  <VideoCardPara>{name}</VideoCardPara>
                  <VideoDetailsTypeContainer>
                    <VideoCardPara>{viewCount}</VideoCardPara>
                    <VideoCardPara>{publishedAt}</VideoCardPara>
                  </VideoDetailsTypeContainer>
                </div>
              </ChannelDetailsContainer>
            </VideoCardLiContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeVideoCards

// getFormattedYear(publishedAt).slice(7)
