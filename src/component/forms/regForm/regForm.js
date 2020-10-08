import React from 'react';
import AuthHelperService from '../../../services/AuthHelperService'
import {GeneralApiServices} from '../../../services/api-service'
import {validateName,validatePassword,validateUsername, BiometricComponent} from '../form-helpers'
import './regForm-style.css'

export default class RegForm extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => { },
        handleCancel: ()=>{},
        user:{}
    }
    
    state = { 
        error: null, statusMessage: false,
        userList:[],
        name:{value: this.props.user.full_name, touch:false}, 
        user_name:{value: this.props.user.user_name, touch: false}, 
        password:{value: this.props.user.password, touch: false},
        gender: {value:this.props.user.gender},
        weight: {value:this.props.user.weight},
        height: {value:this.props.user.height},
        age: {value:this.props.user.age},
    }

    componentDidMount(){
        GeneralApiServices.getAllItems('users').then(json=>{
            this.setState({userList:json})
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const {id}= this.props.user
        const { name, user_name,password, age,gender,height,weight } = ev.target
        const resetValue= ()=>{
            name.value=''
            user_name.value=''
            password.value=''
            age.value=''
            gender.value=''
            height.value=''
            weight.value=''
        }
        const data= {
            full_name: name.value,
            user_name: user_name.value, password: password.value,
            age: age.value, gender: gender.value,
            height: height.value,weight: weight.value
        }
        
        
        if (id) {
            for (let key of ['full_name','user_name','password','age','gender','height','weight']){
                if (!data[key]) delete data[key]
            }
            GeneralApiServices.patchItemById('users',id,data)
                .then(user=>{
                    resetValue()
                    
                }).catch(res=>this.setState({error: res.error}))
        }
        else {
            AuthHelperService.postUser(data)
            .then(user => {
                resetValue()
                this.props.onRegistrationSuccess()
            }).catch(res => this.setState({ error: res.message }))
        }   
        
    }

    onChange= e=>{
        const key= e.target.name;
        const newValue= e.target.value;
        this.setState({[key]:{value:newValue,touch:true}})
    }

    hideStatusMessage = ()=> this.setState({statusMessage:false})

    renderError(message){
        return (
            <div className='formError'>
                <span className='blank'></span>
                <span className='error'>{message}</span>
            </div>
        )
    }

    render() {
        const {user}= this.props
        const {name,user_name,password,userList}= this.state
        const usernameError= (user.user_name && !user_name.value)
            ? false
            : validateUsername(userList,user_name.value)
        const passwordError= (user.user_name && !password.value)
            ? false
            : validatePassword(password.value)
        const nameError= (user.user_name && (!name.value))
            ? false 
            : validateName(name.value)
        const submitButton= (user.user_name)? 'Save' : 'Register'
        
        return (
            <form className='form register-form' onSubmit={this.handleSubmit}>
                <div className='form_input'>
                    <label htmlFor="name">Name</label>
                    <input placeholder='Full Name' type="text" name='name' id='name' onChange={this.onChange}/>
                </div>
                {name.touch && this.renderError(nameError)}
                <div className='form_input'>
                    <label htmlFor="username">Email/Username</label>
                    <input type="text" name='user_name' id='user_name' onChange={this.onChange} required/>
                </div>
                {user_name.touch && this.renderError(usernameError)}
                <div className='form_input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' onChange={this.onChange} autoComplete="off"/>
                </div>
                {password.touch && this.renderError(passwordError)}
                <BiometricComponent />
                <div className='form_input'>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='form_control'>
                    <button type='button' onClick={this.props.handleCancel}>Cancel</button>
                    <button type='submit' disabled={(nameError)||(passwordError)||(usernameError)}>
                        {submitButton}
                    </button>
                </div>
            </form>
        )
    }
}