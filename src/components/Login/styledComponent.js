import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  //   background-image: linear-gradient(#f22f1d, black);
`

export const LoginResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
`

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: gray;
  padding: 2em;
  border-radius: 7px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#fff')};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;

  @media all and (max-width: 767px) {
    min-width: 300px;
    padding: 1.5em;
  }
`

export const LoginWebsiteLogo = styled.img`
  height: 50px;
  display: inline-block;
  margin-inline: auto;
  @media all and (max-width: 550px) {
    height: 30px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1em;
`

export const LabelEle = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5em;
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
`

export const InputEle = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.6em 1em;
  border-radius: 7px;
  border: 1px solid #94a3b8;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#fff')};
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`
export const CHeckBoxInputEle = styled.input`
  margin-right: 1em;
`

export const CHeckBoxLabelEle = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
`
export const LoginBtn = styled.button`
  padding: 0.8em;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 7px;
  color: #ffffff;
`
export const ErrorPara = styled.p`
  color: #ff0b37;
  font-size: 1.4rem;
  margin-top: 0.3rem;
`
