import React from 'react';
import ReactDOM from 'react-dom';
import RegForm from '../../../component/forms/regForm/regForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegForm/>, div);
  ReactDOM.unmountComponentAtNode(div);
});