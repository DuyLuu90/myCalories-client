import React from 'react';
import ReactDOM from 'react-dom';
import MealInputform from '../../../component/forms/mealInputform/mealInputform';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MealInputform/>, div);
  ReactDOM.unmountComponentAtNode(div);
});