import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CreateBook } from './pages/CreateBook';
import { ViewBook } from './pages/ViewBook';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/create' element={<CreateBook />}></Route>
          <Route path='/view/:id' element={<ViewBook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
