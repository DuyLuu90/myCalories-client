import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TokenService from '../src/services/TokenService'
import {GeneralApiServices} from '../src/services/api-service'
import './app-style.css';
//ROUTES:
import HomePage from './routes/homepage/homepage';
import LandingPage from './routes/landingpage/landingpage';
import DemoPage from './routes/DemoPage/DemoPage'
import RegistrationPage from './routes/regPage/regPage';
import FitnessTipsPage from './component/fitness/fitness';
import LoginPage from './routes/loginpage/loginpage';
//COMPONENTS:
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
    const {hasError,userid} = this.state
    return (
      <div className="App">
        <NavBar token = {this.state} onLogoutSuccess={this.handleLogoutSuccess}/>

        <main className="App_main">
          {hasError &&<div className='red'>An unknown error has occurred.</div>}
          <div className="content"> 
            <Switch>
              <Route exact path={'/'} component={(props) => <LandingPage {...props} token={this.state}/>}/>
              <Route path={'/tour'} component={DemoPage}/>
              <Route path={'/users/:id'} component={(props) => <HomePage {...props} userId={userid}/>}/>
              <Route path={'/register'}component={(props) => <RegistrationPage {...props} />}/>
              <Route path={'/login'} component={(props) => <LoginPage {...props} loginUpdate={this.handleLoginSuccess}/>}/>
              <Route path={'/fitnesstips'}component={(props) => <FitnessTipsPage {...props} />}/>
              <Route component={(props) => <NotFoundPage {...props} />}/>
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

