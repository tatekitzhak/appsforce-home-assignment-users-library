import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from '@/App';

import ReduxWrapper from '@/store/store'

ReactDOM.render(
    <ReduxWrapper>
      <App />
    </ReduxWrapper>,
  document.getElementById('root')
);
