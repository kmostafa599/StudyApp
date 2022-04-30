import React from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import axios from 'axios'

const Chat = () => {
  const navigate = useNavigate()
  const didMountRef = useRef(false)

  const authedUser = useContext(AuthContext)
  const [ loading, setLoading ] = useState(true)
  console.log(authedUser)
  console.log("chat",authedUser.currentUser.email)
  async function handleLogout() {
    await auth.signOut()
    navigate("/")
  }
  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }
  useEffect(()=>{
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!authedUser.currentUser || authedUser.currentUser === null) {
        navigate("/")
        return
      }
      // Get-or-Create should be in a Firebase Function
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '746c40e6-91ef-4b40-a9d1-d215239c5e01',
          "user-name": authedUser.currentUser.email,
          "user-secret": authedUser.currentUser.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', authedUser.currentUser.email)
        formdata.append('username', authedUser.currentUser.email)
        formdata.append('secret', authedUser.currentUser.uid)

        getFile(authedUser.currentUser.providerData[0].photoURL)
        .then(avatar => {
          // formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": "192b0d82-0046-472d-a10a-ed1d27c5a792" }}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }
  },[authedUser.currentUser])
  // if (!authedUser.currentUser || loading) return <div>Loading</div>

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Study App
        </div>

        <div className='logout-tab'>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID='746c40e6-91ef-4b40-a9d1-d215239c5e01'
        userName={authedUser.currentUser.email}
        userSecret={authedUser.currentUser.uid}
      />
    </div>
  )
}

export default Chat