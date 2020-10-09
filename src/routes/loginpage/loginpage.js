import React from 'react'
import LoginForm from '../../component/forms/loginform/loginform'
import './loginpage-style.css';

export default class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
        loginUpdate:()=>{}
    }

    handleLoginSuccess = () => {
        const { history,loginUpdate } = this.props
        loginUpdate()
        history.push('/')
    }

    render() {
        return (
        <section className="login_page">
            <h1>Sign in</h1>
            <LoginForm 
                onLoginSuccess={this.handleLoginSuccess}
            />
        </section>
        )
    }
}
