import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-style';

import App from './app';

ReactDOM.render(
  <>
  <GlobalStyles />
  <App />
  </>,
  document.getElementById('root')
);


// Or can import {render} from 'react-dom' and use is Directly