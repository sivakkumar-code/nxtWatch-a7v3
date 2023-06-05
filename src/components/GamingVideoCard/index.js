import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  ThumbnailContainer,
  ThumbnailImg,
  ChannelDetailsContainer,
  VideoCardTitle,
  VideoCardPara,
} from './styledComponent'

const GamingVideoCard = props => {
  const {object} = props
  const {id, thumbnailUrl, title, viewCount} = object

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link className="nav-link" to={`/videos/${id}`}>
            <ChannelDetailsContainer>
              <ThumbnailContainer>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              </ThumbnailContainer>
              <ChannelDetailsContainer>
                <div>
                  <VideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoCardTitle>
                  <VideoCardPara>{viewCount} Watching Worldwide</VideoCardPara>
                </div>
              </ChannelDetailsContainer>
            </ChannelDetailsContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideoCard
