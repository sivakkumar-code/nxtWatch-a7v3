import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import Login from './components/Login'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: []}

  changeTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  addToSavedVideo = (id, obj) => {
    const {savedVideos} = this.state
    const findResult = savedVideos.find(item => item.id === id)
    if (findResult) {
      this.setState({savedVideos: savedVideos.filter(item => item.id !== id)})
    } else {
      this.setState({savedVideos: [...savedVideos, obj]})
    }
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state

    return (
      <>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            changeTheme: this.changeTheme,
            savedVideos,
            addToSavedVideo: this.addToSavedVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/bad-path" component={NotFound} />
            <Redirect to="/bad-path" />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
