import { Provider } from "react-redux"

import store from "../src/store/store"
import MainPage from './pages/mainPage'

import './globalStyles.css'

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default App
