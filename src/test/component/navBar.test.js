import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../component/navBar/navBar'
import { MemoryRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><NavBar /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});