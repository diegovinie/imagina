import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {TestContext} from '../store/StateContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContext><Home/></TestContext>, div);
  ReactDOM.unmountComponentAtNode(div);
});
