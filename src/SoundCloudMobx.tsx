import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useStrict} from 'mobx';
import './styles/index.scss';
import {Provider} from 'mobx-react';
import * as stores from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components';
const {pollyfill} = require('./services/SmoothWindowScrollPollyfill');

pollyfill();

require('font-awesome/css/font-awesome.min.css');
useStrict(true);

const render = strs =>
  <Router>
    <Provider {...strs}>
      <Route render={({location}) => <App location={location} />} />
    </Provider>
  </Router>;
export {render};
ReactDOM.render(render(stores), document.getElementById('root'));
// Hot Module Replacement API
// if ((module as any).hot) {
//     (module as any).hot.accept('./components/index', () => {
//         ReactDOM.render(
//             render(),
//             document.getElementById('root')
//         );
//     });
// }
