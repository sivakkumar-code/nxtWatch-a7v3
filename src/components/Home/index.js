import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {IoSearchOutline} from 'react-icons/io5'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavSidebar from '../NavSidebar'
import HomeVideoCards from '../HomeVideoCards'
import Banner from '../Banner'

import {
  HomeBgContainer,
  ContentContainer,
  HomeContainer,
  HomeMainContentContainer,
  HomeMaCoSearchContainer,
  SearchInputEle,
  SearchButton,
  FetchContentContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryBtn,
  WrapperContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponent'

const apiStatusHome = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  searchResult: 'NO-SEARCH-RESULT',
}

class Home extends Component {
  state = {
    search: '',
    closeBannerCard: false,
    whatToDisplay: apiStatusHome.loading,
    videosArray: [],
  }

  componentDidMount() {
    this.fetchDataForHome()
  }

  fetchDataForHome = async () => {
    this.setState({whatToDisplay: apiStatusHome.loading})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
      if (videos.length !== 0) {
        const updatedArray = videos.map(item => ({
          id: item.id,
          channel: item.channel,
          publishedAt: item.published_at,
          thumbnailUrl: item.thumbnail_url,
          title: item.title,
          viewCount: item.view_count,
        }))
        this.setState({
          whatToDisplay: apiStatusHome.success,
          videosArray: updatedArray,
          search: '',
        })
      } else {
        this.setState({whatToDisplay: apiStatusHome.searchResult, search: ''})
      }
    } else {
      this.setState({search: '', whatToDisplay: apiStatusHome.failure})
    }
  }

  removeBanner = () => this.setState({closeBannerCard: true})

  readSearchInput = e => this.setState({search: e.target.value})

  searchBtnClick = () => this.fetchDataForHome()

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

  homeFetchSuccess = () => {
    const {videosArray} = this.state

    return (
      <FetchContentContainer>
        {videosArray.map(item => (
          <HomeVideoCards key={item.id} object={item} />
        ))}
      </FetchContentContainer>
    )
  }

  renderNoVideos = isDarkTheme => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeading isDarkTheme={isDarkTheme}>
        No Search results found
      </NoVideosHeading>
      <NoVideosPara isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </NoVideosPara>
      <RetryBtn type="button" onClick={() => this.fetchDataForHome()}>
        Retry
      </RetryBtn>
    </NoVideosContainer>
  )

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

  homeFetchFailure = isDarkTheme => (
    <FailureContainer>
      {this.themeFailureImg(isDarkTheme)}
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryBtn type="button" onClick={() => this.fetchDataForHome()}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  displayContent = isDarkTheme => {
    const {whatToDisplay} = this.state

    switch (whatToDisplay) {
      case apiStatusHome.success:
        return this.homeFetchSuccess()
      case apiStatusHome.loading:
        return this.loadingView(isDarkTheme)
      case apiStatusHome.failure:
        return this.homeFetchFailure(isDarkTheme)
      case apiStatusHome.searchResult:
        return this.renderNoVideos(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {closeBannerCard, videosArray, search} = this.state
    console.log(videosArray)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeBgContainer>
              <Header />
              <ContentContainer>
                <NavSidebar />
                <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                  {!closeBannerCard && (
                    <Banner removeBanner={this.removeBanner} />
                  )}
                  <HomeMainContentContainer>
                    <HomeMaCoSearchContainer>
                      <SearchInputEle
                        type="search"
                        placeholder="Search"
                        onChange={this.readSearchInput}
                        value={search}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.searchBtnClick}
                        data-testid="searchButton"
                      >
                        <IoSearchOutline />
                      </SearchButton>
                    </HomeMaCoSearchContainer>
                    <WrapperContainer>
                      {this.displayContent(isDarkTheme)}
                    </WrapperContainer>
                  </HomeMainContentContainer>
                </HomeContainer>
              </ContentContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
