import React from 'react';
import RegForm from '../../component/forms/regForm/regForm'
import './regPage-style.css'
export default class RegPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }
    handleCancel= ()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <section>
                <header role="banner" className="reg_page">
                    <h3>Sign up keep track of your calorie intake and stay fit!</h3>
                </header>
                <RegForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                    handleCancel= {this.handleCancel}
                />
            </section>
        )
    }
}