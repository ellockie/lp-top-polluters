import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('gets one of the elements representing headquarters of one of the pollutant', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId(/HeadQuarters-19/i)).toBeInTheDocument();
});
