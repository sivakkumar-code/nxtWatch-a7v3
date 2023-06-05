import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {GiGamepad} from 'react-icons/gi'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavSidebar from '../NavSidebar'
import GamingVideoCard from '../GamingVideoCard'

import Banner from '../Banner'

import {
  GamingBgContainer,
  ContentContainer,
  GamingContainer,
  GamingMainContentContainer,
  GamingHeaderContainer,
  GamingLogoContainer,
  GamingUlContainer,
  GamingMainHeading,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryBtn,
  WrapperContainer,
} from './styledComponent'

const apiStatusGaming = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {
    closeBannerCard: false,
    whatToDisplay: apiStatusGaming.loading,
    videosArray: [],
  }

  componentDidMount() {
    this.fetchDataForGaming()
  }

  fetchDataForGaming = async () => {
    this.setState({whatToDisplay: apiStatusGaming.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)
    if (response.ok) {
      const {videos} = responseData
      const updatedArray = videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        whatToDisplay: apiStatusGaming.success,
        videosArray: updatedArray,
      })
    } else {
      this.setState({whatToDisplay: apiStatusGaming.failure})
    }
  }

  removeBanner = () => this.setState({closeBannerCard: true})

  loadingView = isDarkTheme => (
    <div style={{textAlign: 'center'}} data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#fff' : '#000'}
        height="50"
        width="50"
      />
    </div>
  )

  gamingFetchSuccess = isDarkTheme => {
    const {videosArray} = this.state

    return (
      <>
        <GamingHeaderContainer isDarkTheme={isDarkTheme}>
          <GamingLogoContainer>
            <GiGamepad className="trending-logo-icon" />
          </GamingLogoContainer>
          <GamingMainHeading isDarkTheme={isDarkTheme}>
            Gaming
          </GamingMainHeading>
        </GamingHeaderContainer>
        <GamingUlContainer>
          {videosArray.map(item => (
            <GamingVideoCard key={item.id} object={item} />
          ))}
        </GamingUlContainer>
      </>
    )
  }

  themeFailureImg = isDarkTheme =>
    isDarkTheme ? (
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
      />
    ) : (
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
    )

  gamingFetchFailure = isDarkTheme => (
    <FailureContainer>
      {this.themeFailureImg(isDarkTheme)}
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryBtn type="button" onClick={() => this.fetchDataForGaming()}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  displayContent = isDarkTheme => {
    const {whatToDisplay} = this.state

    switch (whatToDisplay) {
      case apiStatusGaming.success:
        return this.gamingFetchSuccess(isDarkTheme)
      case apiStatusGaming.loading:
        return this.loadingView(isDarkTheme)
      case apiStatusGaming.failure:
        return this.gamingFetchFailure(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {closeBannerCard, videosArray} = this.state
    console.log(videosArray)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <GamingBgContainer>
              <Header />
              <ContentContainer>
                <NavSidebar />
                <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                  {!closeBannerCard && (
                    <Banner removeBanner={this.removeBanner} />
                  )}
                  <GamingMainContentContainer>
                    <WrapperContainer>
                      {this.displayContent(isDarkTheme)}
                    </WrapperContainer>
                  </GamingMainContentContainer>
                </GamingContainer>
              </ContentContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
