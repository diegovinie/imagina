import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {TestContext} from '../../../store/StateContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContext><Navbar/></TestContext>, div);
  ReactDOM.unmountComponentAtNode(div);
});
