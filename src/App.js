import './App.css';
import LoginPage from './comonents/landing/loginPage'
import Portal from './comonents/landing/Portal'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './comonents/NotFound';
import { ProfileHome } from './comonents/ProfileHome';
import  UpdateProfile  from './comonents/UpdateProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='portal' element={<Portal/>}>
        <Route path='profile' element={<ProfileHome/>}/>
        <Route path='update' element={<UpdateProfile/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
