import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import HomeScreen from './screens/HomeScreen'
import Header from './Header'
import { Footer } from './Footer'
import LoginScreen from './screens/LoginScreen'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {},[dispatch])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
          </Route>
          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>
          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin" />
              ) : (
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            )}
          </Route>
          <Route exact path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
