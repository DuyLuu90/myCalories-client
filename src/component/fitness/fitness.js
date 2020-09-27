import React from 'react';
import './fitness-style.css'

export default class FitnessTipsPage extends React.Component {
	render() {
		return (
			<main className="fitnessTips" >
				<h1 className="header">Fitness Tips</h1>
				<div className="imgContainer">
					<h2 className="fitness__options">Healthy Meal Options</h2>
					<a target="_blank" href="https://tasty.co/article/hannahloewentheil/clean-eating-meal-plan" rel="noopener noreferrer">
					<img className="fitness__image" src="/assets/healthymeal.jpg" alt="Healthy meals"></img>
					</a>
				</div>
				<div className="imgContainer">
				<h2 className="fitness__options">Free Workouts</h2>
				<a target="_blank" href="https://www.muscleandstrength.com/workout-routines" rel="noopener noreferrer">
				<img className="fitness__image" src="/assets/workouts.jpg" alt="Workouts"></img>
				</a>
				</div>
			</main>

		)
	}
}
