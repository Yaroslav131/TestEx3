import {Provider} from "react-redux"

import './globalStyles.css'
import store from "../src/store/store"
import MainPage from './pages/mainPage'

function App() {
  return (
    <Provider store={store}>
   <MainPage/>
   </Provider>

  )
}

export default App
