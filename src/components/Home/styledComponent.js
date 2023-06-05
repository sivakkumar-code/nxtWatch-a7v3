import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 93vh;
  overflow-y: auto;
  //   flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media all and (max-width: 767px) {
    max-height: 94vh;
  }
`

export const HomeMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  flex-grow: 1;
  //   background-color: red;
`
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const HomeMaCoSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  @media all and (max-width: 767px) {
    width: 100%;
  }
`
export const SearchInputEle = styled.input`
  padding: 0.4em 1em;
  height: 100%;
  flex-grow: 1;
`

export const SearchButton = styled.button`
  padding: 0.4em 2em;
`
export const FetchContentContainer = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  margin: 2em 0;

  @media all and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
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

export const NoVideosContainer = styled(FailureContainer)``

export const NoVideosImage = styled(FailureImage)``

export const NoVideosHeading = styled(FailureHeading)``

export const NoVideosPara = styled(FailurePara)``
