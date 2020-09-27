import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../component/footer/footer'
import { MemoryRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Footer /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});