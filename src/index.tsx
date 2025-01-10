import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { REVIEWS } from './mocks/reviews';
import { store } from './store/store';
import { CITIES } from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={REVIEWS} cities={CITIES} logged />
    </Provider>
  </React.StrictMode>
);
