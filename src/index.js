import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import { DatePicker } from 'antd';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();