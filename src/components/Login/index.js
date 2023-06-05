import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import {
  LoginBgContainer,
  LoginResponsiveContainer,
  LoginMainContainer,
  LoginWebsiteLogo,
  FormContainer,
  InputContainer,
  LabelEle,
  InputEle,
  ShowPasswordContainer,
  CHeckBoxInputEle,
  CHeckBoxLabelEle,
  LoginBtn,
  ErrorPara,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errMsg: '',
  }

  readUserName = e => this.setState({username: e.target.value})

  readPassword = e => this.setState({password: e.target.value})

  showPasswordFun = e => this.setState({showPassword: e.target.checked})

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = this.props
    history.replace('/')
  }

  sendLoginRequest = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const requestBody = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(requestBody),
    }
    const response = await fetch(url, options)
    const responseDate = await response.json()
    console.log(responseDate)
    if (response.ok) {
      this.loginSuccess(responseDate.jwt_token)
    } else {
      this.setState({errMsg: responseDate.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const getWebsiteLogo = () =>
            isDarkTheme ? (
              <LoginWebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <LoginWebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            )

          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <LoginResponsiveContainer>
                <LoginMainContainer isDarkTheme={isDarkTheme}>
                  {getWebsiteLogo()}
                  <FormContainer onSubmit={this.sendLoginRequest}>
                    <InputContainer>
                      <LabelEle isDarkTheme={isDarkTheme} htmlFor="username">
                        USERNAME
                      </LabelEle>
                      <InputEle
                        isDarkTheme={isDarkTheme}
                        placeholder="Username"
                        id="username"
                        type="text"
                        value={username}
                        onChange={this.readUserName}
                      />
                    </InputContainer>
                    <InputContainer>
                      <LabelEle isDarkTheme={isDarkTheme} htmlFor="password">
                        PASSWORD
                      </LabelEle>
                      <InputEle
                        isDarkTheme={isDarkTheme}
                        placeholder="Password"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={this.readPassword}
                      />
                    </InputContainer>
                    <ShowPasswordContainer>
                      <CHeckBoxInputEle
                        id="show-password"
                        type="checkbox"
                        checked={showPassword}
                        onChange={this.showPasswordFun}
                      />
                      <CHeckBoxLabelEle
                        isDarkTheme={isDarkTheme}
                        htmlFor="show-password"
                      >
                        Show Password
                      </CHeckBoxLabelEle>
                    </ShowPasswordContainer>
                    <LoginBtn type="submit">Login</LoginBtn>
                    {errMsg.length !== 0 && <ErrorPara>*{errMsg}</ErrorPara>}
                  </FormContainer>
                </LoginMainContainer>
              </LoginResponsiveContainer>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
