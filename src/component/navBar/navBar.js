import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './navBar-style.css'

export default class NavBar extends Component{
    static defaultProps={
        onLogoutSuccess: ()=>{},
        token:{}
    }

    state= {
        displayDropDown: false
    }
    onClickBar= ()=>{
        const boolean= (this.state.displayDropdown)? false: true
        this.setState({displayDropdown: boolean})
    }
    closeDropdown=()=>this.setState({displayDropdown: false})

    renderLogoutLink(){
        return(
            <div className='Header-logged-in' onClick={this.closeDropdown}>
                <Link onClick={this.props.onLogoutSuccess} to='/'aria-label='logout'>Logout</Link>
                <Link to={'/users/'+this.props.token.userid} className='blue'aria-label='home-page'>{this.props.token.full_name}</Link>
                {this.props.token.isAdmin && <Link to='/admin'aria-label='admin-page'> Admin</Link> }
            </div>
        )
    }
    renderLoginLink(){
        return(
            <div className='Header-not-logged-in' onClick={this.closeDropdown}>
                <Link to='/login' aria-label='login-page'>Login </Link>
                <Link to='/register' aria-label='registration-page' > Sign Up</Link>
                <Link to='/fitnesstips' aria-label='fitness-tips'>Fitness Tips</Link>
                {this.props.token.isAdmin && <Link to='/admin'aria-label='admin-page'> Admin</Link> }
            </div>
        )
    }
    render() {
        const nav= (this.props.token.hasAuthToken)? this.renderLogoutLink(): this.renderLoginLink()
        return (
            <nav className='app_nav'>
                <h1>
                    <Link to='/'aria-label='home-page'><FontAwesomeIcon className="running__icon" icon='running'/>
                        {' '}{' '}myCalories
                    </Link>
                </h1>
                <div className='menu'>
                    {(this.props.token.hasAuthToken)
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()} 
                </div>
                <div className='dropdown'>
                    <FontAwesomeIcon className='icon' icon='bars' onClick={this.onClickBar}/>
                    {this.state.displayDropdown && nav} 
                </div>
                   
            </nav>
        )
       
    }
}
