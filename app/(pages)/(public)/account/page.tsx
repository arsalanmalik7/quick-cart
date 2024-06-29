'use client';
import { useAppSelector, useAppDispatch } from '@/app/hook';
import { UserRound, Mail, MapPin } from 'lucide-react'
import { Alert, Modal } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { removeUser } from '@/app/(features)/user/userSlice';
import { useRouter } from 'next/navigation';

const Profile = () => {

    const user = useAppSelector((state: any) => state.user.user)
    const dispatch = useAppDispatch();
    const router = useRouter();


    const logoutHandler = async () => {

        try {
            const response = await axios.get('/api/auth/logout');
            console.log(response);
            dispatch(removeUser(user[0].id));
            setModalText('Logout successful. Redirecting...');
            setTimeout(() => {
                setConfirmLoading(false);
                setOpen(false);
                router.push('/account/login');
            }, 2000);
        } catch (error) {
            console.error(error);
            setModalText('Error logging out. Please try again.');
            setConfirmLoading(false);
        }


    }

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to logout?');


    const firstName = user[0]?.firstName;
    const lastName = user[0]?.lastName;
    const email = user[0]?.email;

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {

        setModalText('Logging out...');
        setConfirmLoading(true);
        logoutHandler();

    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const textStyle = {
        fontSize: '1rem',
    };


    return (
        <>
            <main className=' flex flex-col items-center gap-2 justify-center'>

                {/* profile section */}
                <section>
                    <div className=' border-2 border-gray-400 bg-slate-50 p-4 mx-2 mt-4 flex flex-col justify-center items-center rounded'>
                        <h1 className=' text-3xl  p-2 m-2 '>Account Details:</h1>
                        <p className='text-lg text-green-500 p-2 m-2 flex gap-1'><UserRound /> {firstName} {lastName}</p>
                        <p className='text-lg text-green-500 p-2 m-2 flex gap-1'><Mail /> {email}</p>
                        <p className='text-lg text-green-500 p-2 m-2 flex gap-1'><MapPin /> Pakistan</p>
                        <button onClick={showModal} className='bg-red-500 text-white p-2 m-2 rounded- w-full rounded-full hover:bg-red-400 '>Logout</button>
                        <Modal
                            title="Title"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p>{modalText}</p>
                        </Modal>
                    </div>
                    <div>
                        <h1 className=' text-3xl text-center px-4 py-2 m-2 border-4 border-blue-400 rounded-full bg-blue-200'>Addresses:</h1>
                        {
                            user[0]?.addresses?.length > 0 ?
                                user[0]?.addresses?.map((address: any) => (
                                    <div key={address.id} className='border-2 p-2 m-2 rounded-lg'>
                                        <p>{address.address}</p>
                                    </div>
                                ))
                                :
                                <div className=' m-4 flex justify-center items-center gap-2 '>
                                    <Alert message="No addresses found" type="warning" closable style={textStyle} />
                                    <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-400 '>Add new Address</button>
                                </div>
                        }
                    </div>

                    {/* order history section */}
                </section>
                <div className=' self-start w-full'>
                    <h1 className=' text-4xl p-2 border-b-4  border-blue-500 mx-2 rounded'>Order History</h1>
                </div>
                <section>
                </section>

            </main>
        </>
    )

};

export default Profile;