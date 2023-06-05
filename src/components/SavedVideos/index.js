import {GiSave} from 'react-icons/gi'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavSidebar from '../NavSidebar'
import TrendingVideoCards from '../TrendingVideoCards'

import {
  TrendingBgContainer,
  ContentContainer,
  TrendingContainer,
  TrendingMainContentContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingMainHeading,
  TrendingUlContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
  WrapperContainer,
} from './styledComponent'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const renderSavedVideos = () => (
        <>
          <TrendingHeaderContainer isDarkTheme={isDarkTheme}>
            <TrendingLogoContainer>
              <GiSave className="trending-logo-icon" />
            </TrendingLogoContainer>
            <TrendingMainHeading isDarkTheme={isDarkTheme}>
              Saved Videos
            </TrendingMainHeading>
          </TrendingHeaderContainer>
          <TrendingUlContainer>
            {savedVideos.map(item => (
              <TrendingVideoCards key={item.id} object={item} />
            ))}
          </TrendingUlContainer>
        </>
      )

      const renderNoVideos = () => (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </NoVideosHeading>
          <NoVideosPara isDarkTheme={isDarkTheme}>
            You can save your videos while watching them
          </NoVideosPara>
        </NoVideosContainer>
      )

      const displayContent = () => {
        if (savedVideos.length === 0) {
          return renderNoVideos()
        }
        return renderSavedVideos()
      }

      return (
        <TrendingBgContainer>
          <Header />
          <ContentContainer>
            <NavSidebar />
            <TrendingContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              <TrendingMainContentContainer>
                <WrapperContainer>{displayContent()}</WrapperContainer>
              </TrendingMainContentContainer>
            </TrendingContainer>
          </ContentContainer>
        </TrendingBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
