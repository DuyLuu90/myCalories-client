import React from 'react';
import './landingpage-style.css';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
	static defaultProps={
        token:{}
    }
	
	render() {
		const text= (this.props.token.hasAuthToken)
			? 	<Link to={'/users/'+this.props.token.userid} className='homePageLink'aria-label='home-page'>
					My Dashboard
				</Link>
			: <div className='quote'>STRIVE FOR<strong>PROGESS</strong>NOT FOR <strong>PERFECTION</strong></div>

		return (
			<div className="landing">
				<h3 className="landing__header">Keep track of your calorie intake to stay fit!</h3>
				<h4 className="landing__description">
					<Link className="landing__link" to={'/tour'}>
						Take a tour
					</Link>					
				</h4>
				<div className="landing__img">
					<h4>{text}</h4>
				</div>
			</div>
		);
	}
}
