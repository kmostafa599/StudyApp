import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import EditProfile from './pages/User/EditProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';


function App() {

  const authedUser = useContext(AuthContext)
  console.log(authedUser)
  return (
    <Routes>
      <Route path='/user' element={<PrivateRoute user={authedUser} />}>
        <Route path='chat' element={<Chat />} />
        <Route path='edit' element={<EditProfile />} />
      </Route>
      <Route path='/admin' element={<PrivateRoute user={authedUser} />}>
        <Route path='dashboard' element={<AdminDashboard />} />
      </Route>

      <Route path='/' element={<Homepage />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<SignUp />} />

    </Routes>


  );
}

export default App;
