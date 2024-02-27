import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CreateBook } from './pages/CreateBook';
import { ViewBook } from './pages/ViewBook';
import { HomePage } from './pages/HomePage';
import Store from './store/Store';

function App() {
  return (
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/create' element={<CreateBook />}></Route>
            <Route path='/view/:id' element={<ViewBook />}></Route>
          </Routes>
        </BrowserRouter>
      </Store>
  );
}

export default App;
