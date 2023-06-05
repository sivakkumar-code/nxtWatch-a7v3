import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardLiContainer,
  ThumbnailContainer,
  ThumbnailImg,
  ChannelDetailsContainer,
  VideoDetailsTypeContainer,
  VideoCardTitle,
  VideoCardPara,
} from './styledComponent'

const TrendingVideoCards = props => {
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
                <VideoCardTitle isDarkTheme={isDarkTheme}>
                  {title}
                </VideoCardTitle>
                <VideoCardPara>{name}</VideoCardPara>
                <VideoDetailsTypeContainer>
                  <VideoCardPara>{viewCount}</VideoCardPara>
                  <VideoCardPara>{publishedAt}</VideoCardPara>
                </VideoDetailsTypeContainer>
              </ChannelDetailsContainer>
            </VideoCardLiContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideoCards

// getFormattedYear(publishedAt)
