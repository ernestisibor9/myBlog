import {createStore} from "redux"
import {Provider} from "react-redux"
import newsReducer from "./reducers/newsReducer";
import News from "./components/News";
import './components/style.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const store = createStore(newsReducer)
  return (
    <BrowserRouter>
    <div>
      <Provider store={store}>
        <Routes>
          <Route path = '/' element={<News/>}/>
          <Route path = 'about' element={<About/>}/>
        </Routes>
      </Provider>
      <ToastContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
