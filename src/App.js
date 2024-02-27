import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
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
            <Route path='*' element={<Navigate to='/'/>}></Route>
          </Routes>
        </BrowserRouter>
      </Store>
  );
}

export default App;
