import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { CITIES_NAMES } from './const';
import { fetchOffersAction } from './store/api-actions';
import { store } from './store/store';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App citiesNames={CITIES_NAMES} />
    </Provider>
  </React.StrictMode>
);
