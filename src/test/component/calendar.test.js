import React from 'react';
import ReactDOM from 'react-dom';
import CalorieCalendar from '../../component/calendar/calendar'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalorieCalendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});