import React from 'react'
import { GeneralApiServices } from '../../../services/api-service'
import moment from 'moment';
import './mealInputform-style.css'
// import LogButton from '../Button'

export default class mealInputform extends React.Component {
	static defaultProps = {
		history: {
			push: () => { },
			selectedDate: new Date()
		},
		currentMealInfo: {},
		userId:''
	};
	
	state = {
		isLogged: true,
		meal:{
			id:'', alldaycalories:0,
			breakfast_food:'',breakfast_calories:0,
			lunch_food:'',lunch_calories:0,
			dinner_food:'',dinner_calories:0,
		},
		error:'',
	}

	updateCurrentMeal = () =>{
		const {currentMealInfo}= this.props
		const defaultMeal= {
			id:'', alldaycalories:0,
			breakfast_food:'',breakfast_calories:0,
			lunch_food:'',lunch_calories:0,
			dinner_food:'',dinner_calories:0,
		}
		if (currentMealInfo.id) {
			this.setState({meal: currentMealInfo})
		}
		else this.setState({meal: defaultMeal})
	}

	componentDidMount(){
		this.updateCurrentMeal()
	}
	componentDidUpdate(prevProps){
		if (this.props.currentMealInfo !== prevProps.currentMealInfo){
			this.updateCurrentMeal()
		}
	}
	
	getMealsAndCalories = (e) => {
		e.preventDefault();
		const {
			breakfast_food,
			breakfast_calories,
			lunch_food,
			lunch_calories,
			dinner_food,
			dinner_calories } = e.target;
		
		const total= Number(breakfast_calories.value)+Number(lunch_calories.value)+Number(dinner_calories.value)

		const MealsAndCalories = {
			alldaycalories: total,
			breakfast_food: breakfast_food.value,
			breakfast_calories: breakfast_calories.value,
			lunch_food: lunch_food.value,
			lunch_calories: lunch_calories.value,
			dinner_food: dinner_food.value,
			dinner_calories: dinner_calories.value,
		}

		//console.log(MealsAndCalories)
		const {userId,selectedDate,currentMealInfo,onAddMealSuccess} = this.props
		const {id}= currentMealInfo
		const date= moment(selectedDate).format('YYYY-MM-DD')

		if (userId) {
			if(id) {
				GeneralApiServices.patchItemById('meals',id,MealsAndCalories)
					.then(meal => {
						onAddMealSuccess()
					}).catch(res => console.log(res.message))
			}
			else {
				MealsAndCalories.userid= userId
				MealsAndCalories.dateofmeal= date;
				GeneralApiServices.postItem('meals', MealsAndCalories)
					.then((res) => {
						onAddMealSuccess()
					})
					.catch((res) => {
						this.setState({ error: res.message });
						alert(JSON.stringify(this.state.error));
					});
			}
		}
		else this.setState({error:'You have to login to track your calories'})
	}
	
	onChange= e=>{
		const {name,value}= e.target
		//this.setState({[key]:newValue})
		this.setState({meal:{...this.state.meal,[name]:value}})
    }

	renderCalorieForm(food,calorie){
		const {meal}=this.state
		return (
			<div className='meal_entries'>
				<input type='text' placeholder={food} name={food} 
					value={meal[`${food}`]} onChange={this.onChange}/>
				<input type='number'placeholder={calorie} name={calorie} 
					value={meal[`${calorie}`]} onChange={this.onChange}/>
			</div>
		)
	}

	render(){
		const breakfast= this.renderCalorieForm('breakfast_food','breakfast_calories')
		const lunch= this.renderCalorieForm('lunch_food','lunch_calories')
		const dinner= this.renderCalorieForm('dinner_food','dinner_calories')
		const {error}= this.state

		return(
			<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
				{breakfast}
				{lunch}
				{dinner}
				<div className="form_control">
					<button type="button" onClick={this.props.onAddMealSuccess}>Reset</button>
					<button type="submit">Submit</button>
				</div>
				{error && <div className='user__carb-form-error'>{error}</div>}
			</form>
		)
	}

	/*
	render() {
		return (
			<section className="meal_entry">
				<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
					<div>
						<label htmlFor="breakfast_food">Breakfast</label>
						<input placeholder="Meal" type="text" name="breakfast_food" id="breakfast_food" />
						<label htmlFor="breakfast_calories">Calories</label>
						<input placeholder="Calories" type="text" name="breakfast_calories" id="breakfast_calorie" />
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="lunch_food">Lunch</label>
						<input placeholder="Meal" type="text" name="lunch_food" id="lunch_food" />
						<label htmlFor="lunch_calories">Calories</label>
						<input placeholder="Calories" type="text" name="lunch_calories" id="lunch_calorie" />
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="dinner_food">Dinner</label>
						<input placeholder="Meal" type="text" name="dinner_food" id="dinner_food" />
						<label htmlFor="dinner_calories">Calories</label>
						<input placeholder="Calories" type="text" name="dinner_calories" id="dinner_calorie" />
						<button type="submit">Log</button>
					</div>
				</form>
			</section>
		);
	}*/
}

