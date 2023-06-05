import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoDetailsMainContainer = styled.div`
  padding: 3em;
`
export const ReactVideoPlayerContainerDesktop = styled.div`
  width: 100%;
  @media all and (max-width: 767px) {
    display: none;
  }
`
export const ReactVideoPlayerContainerMobile = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    display: inline-block;
    width: 100%;
  }
`
export const VideoDetailsHeading = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.5em;
  margin-top: 1em;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`
export const VidDetailsViewsUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`
export const VidDetailsViewsDivContainer = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`
export const VidDetailsViewsLiContainer = styled.li`
  margin-right: 1em;
  font-size: 1.6rem;
  color: #64748b;
  font-weight: 500;
`
export const VidDetailsViewsPContainer = styled.p`
  margin-right: 1em;
  font-size: 1.6rem;
  color: #64748b;
  font-weight: 500;
`
export const TransparentBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.check ? ' #2563eb' : '#64748b')};
  font-size: 1.6rem;
  font-weight: 600;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (max-width: 566px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelPic = styled.img`
  width: 40px;
  margin-right: 1.5em;
`
export const ChannelDesContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ChannelName = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`

export const SubCount = styled.p`
  font-size: 1.6rem;
  color: #64748b;
`
export const Description = styled.p`
  margin-top: 1em;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  //   background-color: green;
`
export const FailureImage = styled.img`
  width: 400px;
  display: inline-block;
  margin-inline: auto;

  @media all and (max-width: 567px) {
    width: 300px;
  }
`
export const FailureHeading = styled.h1`
  font-size: 2rem;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
  text-align: center;
  margin-bottom: 0.6em;
  font-weight: 500;
`
export const FailurePara = styled.p`
  font-size: 1.6rem;
  color: #64748b;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1em;
`
export const RetryBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 1em 2em;
  color: #fff;
  font-weight: 600;
  font-size: 1.6rem;
`
