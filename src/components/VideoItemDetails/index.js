import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {GiSave} from 'react-icons/gi'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import NavSidebar from '../NavSidebar'

import {
  VideoDetailsBgContainer,
  ContentContainer,
  VideoDetailsContainer,
  ReactVideoPlayerContainerDesktop,
  ReactVideoPlayerContainerMobile,
  VideoDetailsMainContainer,
  VideoDetailsHeading,
  VidDetailsViewsUlContainer,
  VidDetailsViewsLiContainer,
  TransparentBtn,
  ViewsAndLikesContainer,
  ChannelPic,
  ChannelDesContainer,
  SubCount,
  ChannelName,
  Description,
  VidDetailsViewsDivContainer,
  VidDetailsViewsPContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './styledComponent'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    whatToDisplay: apiStatus.loading,
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({whatToDisplay: apiStatus.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok) {
      const {video_details: videoDetails} = responseData
      const updatedData = {
        id: videoDetails.id,
        description: videoDetails.description,
        channel: videoDetails.channel,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        whatToDisplay: apiStatus.success,
      })
    } else {
      this.setState({whatToDisplay: apiStatus.failure})
    }
  }

  videoLiked = () =>
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))

  videoDisliked = () =>
    this.setState(prevState => ({disliked: !prevState.disliked, liked: false}))

  videoSaved = (addToSavedVideo, id) => {
    const {videoDetails} = this.state
    this.setState(
      prevState => ({saved: !prevState.saved}),
      addToSavedVideo(id, videoDetails),
    )
  }

  getFormattedYear = date => formatDistanceToNow(new Date(date))

  fetchSuccess = (isDarkTheme, addToSavedVideo, savedVideos) => {
    const {videoDetails, liked, disliked, saved} = this.state
    const {channel, id} = videoDetails
    let alreadySaved = false
    if (savedVideos.find(item => item.id === id)) {
      alreadySaved = true
    }
    console.log(saved, alreadySaved)
    const {
      name,
      profile_image_url: proImgUrl,
      subscriber_count: subCount,
    } = channel

    return (
      <VideoDetailsMainContainer>
        <ReactVideoPlayerContainerDesktop>
          <ReactPlayer
            width="100%"
            height="600px"
            url={videoDetails.videoUrl}
          />
        </ReactVideoPlayerContainerDesktop>
        <ReactVideoPlayerContainerMobile>
          <ReactPlayer
            width="100%"
            height="300px"
            url={videoDetails.videoUrl}
          />
        </ReactVideoPlayerContainerMobile>
        <VideoDetailsHeading isDarkTheme={isDarkTheme}>
          {videoDetails.title}
        </VideoDetailsHeading>
        <div>
          <ViewsAndLikesContainer>
            <VidDetailsViewsDivContainer>
              <VidDetailsViewsPContainer>
                {videoDetails.viewCount}
              </VidDetailsViewsPContainer>
              <VidDetailsViewsPContainer>
                {this.getFormattedYear(videoDetails.publishedAt)}
              </VidDetailsViewsPContainer>
            </VidDetailsViewsDivContainer>
            <VidDetailsViewsUlContainer>
              <VidDetailsViewsLiContainer>
                <TransparentBtn
                  type="button"
                  onClick={this.videoLiked}
                  check={liked}
                >
                  <AiOutlineLike /> Likes
                </TransparentBtn>
              </VidDetailsViewsLiContainer>
              <VidDetailsViewsLiContainer>
                <TransparentBtn
                  type="button"
                  onClick={this.videoDisliked}
                  check={disliked}
                >
                  <AiOutlineDislike /> Dislikes
                </TransparentBtn>
              </VidDetailsViewsLiContainer>
              <VidDetailsViewsLiContainer>
                <TransparentBtn
                  type="button"
                  onClick={() => this.videoSaved(addToSavedVideo, id)}
                  check={(saved || alreadySaved) && alreadySaved}
                >
                  <GiSave />{' '}
                  {(saved || alreadySaved) && alreadySaved ? 'Saved' : 'Save'}
                </TransparentBtn>
              </VidDetailsViewsLiContainer>
            </VidDetailsViewsUlContainer>
          </ViewsAndLikesContainer>
          <ChannelDesContainer>
            <ChannelPic src={proImgUrl} alt="channel logo" />
            <div>
              <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
              <SubCount>{subCount} subscribers</SubCount>
              <div>
                <Description isDarkTheme={isDarkTheme}>
                  {videoDetails.description}
                </Description>
              </div>
            </div>
          </ChannelDesContainer>
        </div>
      </VideoDetailsMainContainer>
    )
  }

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

  vidDetailFetchFailure = isDarkTheme => (
    <FailureContainer>
      {this.themeFailureImg(isDarkTheme)}
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryBtn type="button" onClick={() => this.fetchVideoDetails()}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  displayContent = (isDarkTheme, addToSavedVideo, savedVideos) => {
    const {whatToDisplay} = this.state

    switch (whatToDisplay) {
      case apiStatus.success:
        return this.fetchSuccess(isDarkTheme, addToSavedVideo, savedVideos)
      case apiStatus.loading:
        return this.loadingView(isDarkTheme)
      case apiStatus.failure:
        return this.vidDetailFetchFailure(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {saved} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, addToSavedVideo, savedVideos} = value
          console.log(savedVideos)

          return (
            <VideoDetailsBgContainer>
              <Header />
              <ContentContainer>
                <NavSidebar />
                <VideoDetailsContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.displayContent(
                    isDarkTheme,
                    addToSavedVideo,
                    savedVideos,
                  )}
                </VideoDetailsContainer>
              </ContentContainer>
            </VideoDetailsBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails

// <ReactVideoPlayerContainerMobile>
//   <ReactPlayer
//     width="100%"
//     height="300px"
//     url={videoDetails.videoUrl}
//   />
// </ReactVideoPlayerContainerMobile>
