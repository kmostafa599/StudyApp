import React from 'react'
import { Badge, Divider,  List, ListItem, ListItemAvatar, ListItemText, Paper, Skeleton, Tooltip } from '@mui/material'
import { collection, query, onSnapshot, where} from 'firebase/firestore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from 'react';
import { useState } from 'react';
import {  db } from '../firebase'
// import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

//styles
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'transparent',
};


const UsersList = ({ selectUser, online }) => {
    const {authedUser} = useContext(AuthContext)
    // console.log(authedUser)
    const [list, setList] = useState([])
    // const location = useLocation()
    useEffect(() => {
        const usersRef = collection(db, 'users')

        const q = query(usersRef, where("uid", 'not-in', [authedUser.uid]))
        console.log(q)
        const unsub = onSnapshot(q, (querySnapshot) => {
            let users = []
            querySnapshot.forEach(query => {
                users.push(query.data())
            })
            setList(users)
        });
        return () => unsub()

    }, [])
    console.log(list)

    return (
        <div>
            <Paper className='w-fit md:w-full' style={{ height: "75vh", overflow: "auto" }}>
                <List className='w-fit md:w-full' sx={style} component="nav" aria-label="mailbox folders">
                    {list.map((user, key) => (
                        <div>
                            {/* <Box sx={{ display: 'flex' }}>
                        <Fade in={true}> */}
                            <ListItem key={key} className='w-fit' button onClick={() => selectUser(user)}>
                                <Tooltip title={user?.name}>
                                    <ListItemAvatar>
                                        <Badge color={user.isOnline ? "secondary" : "warning"} overlap="circular" badgeContent=" " variant="dot">
                                            {user.avatar ? <AccountCircleIcon style={{ width: "50px", height: "50px", backgroundImage: `url(${user.avatar || null})` }} /> :
                                                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                            }

                                        </Badge>
                                    </ListItemAvatar>
                                </Tooltip>
                                {user.name ?
                                    <ListItemText className='hidden md:block' primary={user.name} secondary="hello" />
                                    : <Skeleton
                                        animation="wave"
                                        height={10}
                                        width="80%"
                                        style={{ marginBottom: 6 }}
                                    />

                                }
                            </ListItem>
                            <Divider />
                            {/* </Fade> */}

                            {/* </Box> */}

                        </div>

                    ))
                        // : <Grid container spacing={2}>
                        //     <Grid item   >
                        //     <Skeleton animation="wave" variant="circular" width={40} height={40} />

                        //         </Grid>
                        //         <Grid item   >
                        //         <Skeleton style={{ marginLeft:"2rem"}} width={150} animation="wave" />

                        //         </Grid>                                              
                        // </Grid>
                    }




                </List>
            </Paper>


        </div>
    )
}

export default UsersList