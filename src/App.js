
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
      <Route path='/searchstudent' element={<SearchStudent/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
