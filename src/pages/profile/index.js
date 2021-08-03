import { PageContainer } from "../../styledComponents"
import Navbar from '../../components/navbar';
import { useState } from 'react';
import { updateUserDetails } from "../../utils";
import { deleteUser } from "../../utils";

export const Profile = ({ user, setUser}) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPass] = useState();

    return (
        <PageContainer>
            <Navbar />
            <h1>User settings</h1>
            <p>Please enter new username, email or password but all entries MUST be filled</p>
            <form onSubmit={(e) => updateUserDetails(e, email, username, pass, user, setUser)}>
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

            <h2>Delete Account</h2>
            <button type="submit"onClick={() => {
                deleteUser(user)
            }}>Delete Account</button>
           </PageContainer>
    )
};