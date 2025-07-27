'use client'; // This tells Next.js to treat this as a client component

import { Provider } from 'react-redux';
import { store } from '../app/redux/store';

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
