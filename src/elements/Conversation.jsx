import { InputAdornment, OutlinedInput, Paper } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from 'react';

const Conversation = ({ chat }) => {
  const { authedUser } = useContext(AuthContext)
  const [image,setImage] = useState("")
  const location = useLocation()
  const user1 = authedUser.uid

  const formik = useFormik({
    initialValues: {
      message: '',
      
    },
    onSubmit: async values => {
      console.log(values)
      const user2 = chat.uid

      let url;
      if (image) {
        const imgRef = ref(
          storage,
          `images/${new Date().getTime()} - ${image.name}`
        );
        const snap = await uploadBytes(imgRef, image);
        const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        url = dlUrl;
      }

      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`
      console.log(user2)

      await addDoc(collection(db, 'messages', id, 'chat'), {
        text: values.message,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || ""
      }

      );
      values.message = ''
    },
  })
  return (
    <Paper style={{ height: "90%", background: location.pathname === `/user/chat/${authedUser.uid}` ? "#707070" : "" }}>
      {chat ? <div style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid grey", }}>{chat.name}</div> : <div>No chat yet!</div>}
      <div style={{ position: "absolute", bottom: "0px", width: "96%" }}>

        <Paper>
          <form onSubmit={formik.handleSubmit}>

            <Paper>
              <OutlinedInput
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                variant="filled"
                style={{ width: "100%", height: "2.5rem", background: location.pathname === `/user/chat/${authedUser.uid}` ? "#808080" : "" }}

                endAdornment={
                  <InputAdornment position="end">
                    <button type="submit"><SendIcon /></button>
                  </InputAdornment>

                }
                startAdornment={
                  <InputAdornment position="start">
                    <label htmlFor="image">
                      <AttachFileIcon />
                    </label>
                    <input
                      onChange={(e)=>setImage(e.target.files[0])}
                      
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*" 
                      style={{display:"none"}}
                      />          

                      </InputAdornment>

                }
              />
            </Paper>
          </form>
        </Paper>
      </div>
    </Paper>
  )
}

export default Conversation