/* eslint-disable */
import React from 'react'

export function validateName(name='') {
    const validLetters= /^[A-Za-z]+$/
    if(name.length===0 ) {
        return `Name is required`
    }
    if(name.length<3) {
        return `Name is too short`
    }
    if(!validLetters.test(name)) {
        return `Names must contain only valid letters`
    }
    
    return null
}

export function validatePassword(password='') {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
    if(password.length===0) {
        return 'Password is required'
    }
    if(password.length<8){
        return 'Password must be longer than 8 characters'
    }
    if(password.length>72){
        return 'Password must be shorter than 72 characters'
    }
    if(password.startsWith(' ')||password.endsWith(' ')){
        return 'Password must not start or end with empty spaces'
    }
    if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)){
        return 'Password must contain 1 upper case,lower case,number and special character'
    }
    return null

}

export function validateUsername(userList=[],username='') {
    const usernameExists= userList.find(user=>user.user_name===username)
    if (username.length===0) return 'Username is required'
    if (usernameExists) return 'Username already exists'
    return null
}

export  function ValidationError(props) {
    if(props.message) {
      return <div className="error"><span>{props.message}</span></div>
    }
    return <></>
}

export function BiometricComponent(){
    return (
        <div className='form_input'>
            <header>Biometric:</header>
            <div className='biometric'>
                <input placeholder='Age' type="number" name='age' id='age' min='5'max='125' required/>
                <input placeholder='Height (in)' type="number" name='height' id='height'min='40'max='105' required/>
                <input placeholder='Weight (lb)' type="number" name='weight' id='weight' min='30'max='900' required/>
            </div>
        </div>
    )
}

export function BiometricSelection(){
    const createArray=(from,to)=>{
        let array=[]
        for (let i=from; i<=to;i++){
            array.push[i]
        }
        return array
    }
    const ageOptions=()=>{
        const array= createArray(5,125)
        const options= array.map((i)=><option key={i} value={i}>{i}</option>)
        return (
            <select id="age" name="age">
                {options}
            </select>
        )
    }
    const weightOptions=()=>{
        const array= createArray(30,900)
        const options= array.map((i)=><option key={i} value={i}>{i}</option>)
        return (
            <select id="weight" name="weight">
                {options}
            </select>
        )
    }
    const heightOptions=()=>{
        const array= createArray(40,105)
        const options= array.map((i)=><option key={i} value={i}>{i}</option>)
        return (
            <select id="height" name="height">
                {options}
            </select>
        )
    }
    const age= ageOptions()
    const weight= weightOptions()
    const height= heightOptions()
    return (
        <div className='bio_select'>
            <h3>Biometric</h3>
            <div>
                <header>Gender</header>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <header>Age</header>
                {age}
            </div>
            <div>
                <header>Weight</header>
                {weight}
            </div>
            <div>
                <header>Height</header>
                {height}
            </div>
        </div>
    )
}




  
