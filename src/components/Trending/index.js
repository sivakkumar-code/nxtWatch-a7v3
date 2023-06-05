import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {FaGripfire} from 'react-icons/fa'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavSidebar from '../NavSidebar'
import TrendingVideoCards from '../TrendingVideoCards'
import Banner from '../Banner'

import {
  TrendingBgContainer,
  ContentContainer,
  TrendingContainer,
  TrendingMainContentContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingMainHeading,
  TrendingUlContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryBtn,
  WrapperContainer,
} from './styledComponent'

const apiStatusTrending = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  searchResult: 'NO-SEARCH-RESULT',
}

class Trending extends Component {
  state = {
    closeBannerCard: false,
    whatToDisplay: apiStatusTrending.loading,
    videosArray: [],
  }

  componentDidMount() {
    this.fetchDataForTrending()
  }

  fetchDataForTrending = async () => {
    this.setState({whatToDisplay: apiStatusTrending.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: item.channel,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        whatToDisplay: apiStatusTrending.success,
        videosArray: updatedArray,
      })
    } else {
      this.setState({whatToDisplay: apiStatusTrending.failure})
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

  trendingFetchSuccess = isDarkTheme => {
    const {videosArray} = this.state

    return (
      <>
        <TrendingHeaderContainer isDarkTheme={isDarkTheme}>
          <TrendingLogoContainer>
            <FaGripfire className="trending-logo-icon" />
          </TrendingLogoContainer>
          <TrendingMainHeading isDarkTheme={isDarkTheme}>
            Trending
          </TrendingMainHeading>
        </TrendingHeaderContainer>
        <TrendingUlContainer>
          {videosArray.map(item => (
            <TrendingVideoCards key={item.id} object={item} />
          ))}
        </TrendingUlContainer>
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

  trendingFetchFailure = isDarkTheme => (
    <FailureContainer>
      {this.themeFailureImg(isDarkTheme)}
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryBtn type="button" onClick={() => this.fetchDataForTrending()}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  displayContent = isDarkTheme => {
    const {whatToDisplay} = this.state

    switch (whatToDisplay) {
      case apiStatusTrending.success:
        return this.trendingFetchSuccess(isDarkTheme)
      case apiStatusTrending.loading:
        return this.loadingView(isDarkTheme)
      case apiStatusTrending.failure:
        return this.trendingFetchFailure(isDarkTheme)
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
            <TrendingBgContainer>
              <Header />
              <ContentContainer>
                <NavSidebar />
                <TrendingContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {!closeBannerCard && (
                    <Banner removeBanner={this.removeBanner} />
                  )}
                  <TrendingMainContentContainer>
                    <WrapperContainer>
                      {this.displayContent(isDarkTheme)}
                    </WrapperContainer>
                  </TrendingMainContentContainer>
                </TrendingContainer>
              </ContentContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
