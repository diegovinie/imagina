import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import {TestContext} from '../../../store/StateContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContext><Cart/></TestContext>, div);
  ReactDOM.unmountComponentAtNode(div);
});
