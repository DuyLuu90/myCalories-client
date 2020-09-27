import React from 'react';
import ReactDOM from 'react-dom';
import RegPage from '../../routes/regPage/regPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});