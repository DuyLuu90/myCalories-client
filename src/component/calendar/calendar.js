import React from 'react';
import Calendar from 'react-calendar';
import './react-calendar.scss';

export default class CalorieCalendar extends React.Component {

	state = {
		date: new Date(),
		currentDate: '',
		// hover:new Date(),
	};

	render() {
		const {getMealInfoByMonth,getSelectedDate}= this.props
		return (
			<Calendar className="react-calendar"
				value={this.state.date}
				onActiveStartDateChange={(date) =>getMealInfoByMonth(date)}
				onChange={(date) => {						
					getSelectedDate(date);
					//getMealInfoOfTheDay();
				}}
			/>
		);
	}
}
