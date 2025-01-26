import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import {
  checkAuthAction,
  fetchFavoriteOffers,
  fetchOffersAction,
} from './store/api-actions';
import { store } from './store/store';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction()).then((response) => {
  if (response.meta.requestStatus === 'fulfilled') {
    store.dispatch(fetchFavoriteOffers());
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
