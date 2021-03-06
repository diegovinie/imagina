import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TestContext} from './store/StateContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContext><App/></TestContext>, div);
  ReactDOM.unmountComponentAtNode(div);
});
