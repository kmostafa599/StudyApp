import React from 'react'

import { Grid } from '@mui/material'

import { useState } from 'react';
import Conversation from '../elements/Conversation';
import UsersList from '../elements/UsersList';
import { auth } from '../firebase';






const Chat = () => {
  const [online] = useState(true)
  const [chat, setChat] = useState("")

  const selectUser = user => {
    // setOnline(!online)
    setChat(user)
  }
  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <UsersList online={online} selectUser={selectUser} />
        </Grid>
        <Grid item xs={8} style={{ position: "relative" }}>
          <Conversation chat={chat} />
        </Grid>
      </Grid>


    </div>
  )
}

export default Chat