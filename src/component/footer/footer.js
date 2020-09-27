
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
                <Link to='myCalories2020@gmail.com'aria-label='email'><FontAwesomeIcon className='icon' icon='envelope'/>
                            {' '}{' '}EMAIL US
                </Link>
                
            </div>
        )
    }
}