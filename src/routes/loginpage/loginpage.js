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
            <header role="banner">
                <h1>Carb Counter</h1>
                <h3>Sign in to keep track of your calorie intake</h3>
            </header>
            <LoginForm 
                onLoginSuccess={this.handleLoginSuccess}
            />
        </section>
        )
    }
}
