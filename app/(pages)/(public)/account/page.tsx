'use client';
import * as React from 'react';
import { useAppSelector } from '@/app/hook';

const Profile = () => {

    const user = useAppSelector((state: any) => state.user.user);
    console.log("user from profile: ", user);


    return (
     <>
     <main>
        <h1>Profile</h1>
        <p>{user[0]?.firstName}</p> 
        <p>{user[0]?.lastName}</p> 
        <p>{user[0]?.email}</p>   
     </main>
     </>   
    )

};

export default Profile;