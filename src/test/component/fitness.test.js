import React from 'react';
import ReactDOM from 'react-dom';
import FitnessTipsPage from '../../component/fitness/fitness'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FitnessTipsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});