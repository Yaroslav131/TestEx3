import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from '../src/store/store';
import MainPage from './pages/mainPage';

import './globalStyles.css';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainPage />
        <ToastContainer />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
