import React, {Component} from 'react'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './footer-style.css'

export default class Footer extends Component{
    render(){
        return (
            <div className='app_footer'> 
                <div>
                    <FontAwesomeIcon className='icon' icon='copyright'/>
                    <span>{' '}Thinkful 2020</span>
                </div>
                <a href='mailto:myCalories2020@gmail.com'aria-label='email' target={'_blank'} rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon='envelope'/>
                            {' '}{' '}EMAIL US
                </a>
                
            </div>
        )
    }
}