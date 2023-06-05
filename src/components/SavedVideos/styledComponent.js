import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 93vh;
  overflow-y: auto;
  //   flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media all and (max-width: 767px) {
    max-height: 94vh;
  }
`

export const TrendingMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 3em;
  flex-grow: 1;
`
export const TrendingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3em;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
`
export const TrendingLogoContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
`
export const TrendingMainHeading = styled.h1`
  font-size: 2rem;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
`
export const TrendingUlContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  padding: 2em 3em;

  @media all and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  //   background-color: green;
`
export const NoVideosImage = styled.img`
  width: 400px;
  display: inline-block;
  margin-inline: auto;
  margin-bottom: 2em;

  @media all and (max-width: 567px) {
    width: 300px;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 2rem;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
  text-align: center;
  margin-bottom: 0.6em;
  font-weight: 500;
`
export const NoVideosPara = styled.p`
  font-size: 1.6rem;
  color: #64748b;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1em;
`
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
