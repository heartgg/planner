import React from 'react';
import ReactDOM from 'react-dom';
// TODO: Customize font using https://github.com/fontsource/fontsource/blob/master/packages/roboto/README.md
import '@fontsource/roboto';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './features/auth/auth-context';
import './index.css';

function render() {
  const rootElement = document.getElementById('root');

  const tree = (
    <React.StrictMode>
      <CssBaseline />
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  );

  if (rootElement?.hasChildNodes()) {
    ReactDOM.hydrate(tree, rootElement);
  } else {
    ReactDOM.render(tree, rootElement);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./App', render);
// }

render();
