import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from '../src/store/store';
import MainPage from './pages/mainPage';

import './globalStyles.css';
import ErrorBoundary from './components/ErrorBoundary';
import { YMaps } from '@pbe/react-yandex-maps';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <YMaps
          query={{
            lang: 'en_RU',
            apikey: import.meta.env.VITE_API_KEY,
          }}
        >
          <MainPage />
          <ToastContainer />
        </YMaps >
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
