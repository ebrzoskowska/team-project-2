import { PageContainer } from "../../styledComponents"
import Navbar from '../../components/navbar';
import { useState } from 'react';
import { updateUserDetails } from "../../utils";

export const Profile = ({ user, setUser}) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPass] = useState();

    return (
        <PageContainer>
            <Navbar />
            <h1>User settings</h1>
            <form onSubmit={(e) => updateUserDetails(e, email, username, pass, setUser)}>
            <label>
            Change username:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setUsername(e.target.value)} placeholder='New Username' />
            </label>
            <label>
            Change email:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setEmail(e.target.value)} placeholder='New Email' />
            </label>
            <label>
            Change password:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setPass(e.target.value)} placeholder='New Password' />
            </label>
            <button type="submit" >Update</button>
            </form>
           
        </PageContainer>
    )
};