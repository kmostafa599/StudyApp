import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import EditProfile from './pages/User/EditProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserChat from './pages/User/UserChat';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import ProfilePage from './pages/User/ProfilePage';


function App() {
  let theme = createTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#000000',
        dark: '#000000',
      },
      secondary:{
        main:"#00FF00",
      },
      offline:{
        main:"red"
      },
    }
    });
  const authedUser = useContext(AuthContext)
  // console.log(authedUser)
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/user' element={<PrivateRoute user={authedUser} />}>
        <Route path='chat/:id' element={<UserChat/>} />
        <Route path='profile' element={<ProfilePage/>} />

        <Route path='edit' element={<EditProfile />} />
      </Route>
      {/* <Route path='/admin' element={<PrivateRoute user={authedUser} />}>
      </Route> */}
      
      <Route path='admin' element={<AdminDashboard />} >
        <Route path='dashboard' element={<AdminDashboard/>}/>
        <Route path='chats' element={<AdminDashboard/>}/>


        <Route path='users' element={<AdminDashboard/>}/>
      </Route>


      <Route path='/' element={<Homepage />} />
      <Route path='/auth/admin/login' element={<Login title='Admin Login'/>}/>

      <Route path='/auth/login' element={<Login title="Sign In"/>} />
      <Route path='/auth/signup' element={<SignUp />} />

    </Routes>
    </ThemeProvider>

  );
}

export default App;
