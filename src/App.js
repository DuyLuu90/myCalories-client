import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TokenService from '../src/services/TokenService'
import {GeneralApiServices} from '../src/services/api-service'
import './app-style.css';
import HomePage from './routes/homepage/homepage';
import LandingPage from './routes/landingpage/landingpage';
import RegistrationPage from './routes/regPage/regPage';
import FitnessTipsPage from './component/fitness/fitness';
import LoginPage from './routes/loginpage/loginpage';
import NotFoundPage from './component/notfoundpage/notfoundpage';
import NavBar from './component/navBar/navBar';
import Footer from './component/footer/footer';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
      hasAuthToken: TokenService.hasAuthToken(),
      userid: '',
      isAdmin: false,
      full_name:''
    }
  }
  componentDidMount(){
    const authToken= TokenService.getAuthToken()
    if (authToken) {
      this.handleLoginSuccess()
    }
  }

  handleLoginSuccess = ()=>{
    const authToken=TokenService.getAuthToken()
    const userid=TokenService.parseJwt(authToken).user_id
    GeneralApiServices.getItemById('users',userid)
      .then(user=>this.setState({
        hasAuthToken: TokenService.hasAuthToken(),
        isAdmin: user.isAdmin,
        userid: userid,
        full_name: user.full_name
      }))
  }

  handleLogoutSuccess = ()=>{
    TokenService.clearAuthToken()
    this.setState({
      hasAuthToken: TokenService.hasAuthToken(),
      isAdmin: false,
      userid:'',
      full_name: ''
    })
  }
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavBar token = {this.state} onLogoutSuccess={this.handleLogoutSuccess}/>
        </nav>

        <main className="App_main">
          {this.state.hasError &&
            <p className='red'>
              An unknown error has occurred.
          </p>}
            <div className="content"> 
          <Switch>
            <Route
              exact
              path={'/'}
              component={(props) => <LandingPage {...props} />}
            />
            <Route
              path={'/home'}
              component={(props) => <HomePage {...props} userId={this.state.userid}/>}
            />
            <Route
              path={'/register'}
              component={(props) => <RegistrationPage {...props} />}
            />
            <Route
              path={'/login'}
              component={(props) => <LoginPage {...props} loginUpdate={this.handleLoginSuccess}/>}
            />
            <Route
              path={'/fitnesstips'}
              component={(props) => <FitnessTipsPage {...props} />}
            />
            <Route
              component={(props) => <NotFoundPage {...props} />}
            />
          </Switch>
            </div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>

      </div>
    )
  }

}

