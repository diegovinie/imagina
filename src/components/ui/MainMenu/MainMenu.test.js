import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';
import {TestContext} from '../../../store/StateContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContext><MainMenu/></TestContext>, div);
  ReactDOM.unmountComponentAtNode(div);
});
