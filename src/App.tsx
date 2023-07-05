import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { YMaps } from '@pbe/react-yandex-maps';

import store from '@store/store';
import MainPage from './pages/mainPage';

import './globalStyles.css';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <YMaps
          query={{
            lang: 'en_RU',
            apikey: "18f172d7-21c0-4d35-bac0-a89f15490ad1",
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
