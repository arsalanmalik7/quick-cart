'use client';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { addUser } from '@/app/(features)/user/userSlice';

const GetProfile = () => {

    const router = useRouter();
    const user = useAppSelector((state: any) => state.user.user);
    const dispatch = useAppDispatch();
    const [hasFetchedProfile, setHasFetchedProfile] = useState(false);

    useEffect(() => {
        const getProfileFunction = async () => {

           
            if (!user || hasFetchedProfile) {
                return;
            }

            try {
                const response = await axios.get("/api/profile", {
                    withCredentials: true
                });
                console.log(response.data);

                // Dispatch the profile data if needed
                dispatch(addUser(response.data));

                // Mark as fetched
                setHasFetchedProfile(true);
            } catch (error) {
                console.error(error);
                router.push("/account/login");
                
            }
        };

        // Call the function only if user is defined
        if (user) {
            getProfileFunction();
        }
        
    }, []);

    return null; // Return null since this component does not render anything to the DOM
};

export default GetProfile;
