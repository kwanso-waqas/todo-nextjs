import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'mobx-react';
import todoStore from '../lib/store/todoStore';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={todoStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
