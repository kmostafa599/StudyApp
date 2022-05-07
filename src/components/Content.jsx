import * as React from 'react';

import Chat from '../pages/Chat';
import {
  useLocation
} from "react-router-dom";
import Users from '../pages/Users';
// import { Divider, Grid } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Content({ users, filter }) {
  const authedUser = useContext(AuthContext)
  console.log(authedUser)
  const route = useLocation()
  console.log(route.pathname)
  switch (route.pathname) {
    case "/admin/chats":
      return <Chat />
    case "/admin/users":
      return <Users users={users}/>
    default:
      return (
        // <Grid container spacing={2}>
        //   <Grid item xs={12}>
        //     <Users filter={filter} users={users} />
        //   </Grid>
        //   <Divider />
        //   <Grid item xs={12}>
        //     <Chat />
        //   </Grid>
        // </Grid>
        <div>
          Welcome Back !
        </div>
        );
  }
}