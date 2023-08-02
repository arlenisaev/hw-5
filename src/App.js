import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from './page/userRegisterPage/UserRegister';
import UserListPage from './page/usersListPage/UsersListPage';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<UserRegister/>}/>
        <Route path={'/users'} element={<UserListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
