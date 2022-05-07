import React from 'react'
import Chat from '../Chat'
import { Header } from '../../components/User/Header'
const UserChat = () => {
    return (
        <div >
            <Header />
            <div style={{ margin: "1rem" }}>
                <Chat style={{ height: "100vh", }} />

            </div>
        </div>
    )
}

export default UserChat