import styled from 'styled-components'

export const NotFoundBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  //   background-color: green;
`
export const NotFoundImage = styled.img`
  width: 400px;
  display: inline-block;
  margin-inline: auto;
  margin-bottom: 2em;

  @media all and (max-width: 567px) {
    width: 300px;
  }
`
export const NotFoundHeading = styled.h1`
  font-size: 2.3rem;
  color: ${props => (props.isDarkTheme ? '#fff' : '#383838')};
  text-align: center;
  margin-bottom: 0.6em;
  font-weight: 500;
`
export const NotFoundPara = styled.p`
  font-size: 1.6rem;
  color: #64748b;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1em;
`
