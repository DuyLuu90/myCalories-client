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
                <h1 className='reg_header'>Registration</h1>
                <RegForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                    handleCancel= {this.handleCancel}
                />
            </section>
        )
    }
}