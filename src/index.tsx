import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { CITIES_NAMES } from './const';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { store } from './store/store';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App citiesNames={CITIES_NAMES} />
    </Provider>
  </React.StrictMode>
);
