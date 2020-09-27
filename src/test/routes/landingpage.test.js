import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../../routes/landingpage/landingpage';
import { MemoryRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LandingPage/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});