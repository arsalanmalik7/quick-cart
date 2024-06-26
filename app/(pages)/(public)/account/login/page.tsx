'use client';
import type { FormProps } from 'antd';
import { Button, Form, Input, message, Alert, Divider } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, } from '@/app/hook';
import { addUser, removeUser } from '@/app/(features)/user/userSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {

    type FieldType = {
        email?: string;
        password?: string;
    };

    const router = useRouter();

    const user = useAppSelector((state: any) => state.user.user);
    const dispatch = useAppDispatch();


    const [messageApi, contextHolder] = message.useMessage();

    const [isLoginErr, setIsLoginErr] = useState(false);
    const [errMesasage, setErrMessage] = useState("");


    const success = (message: any) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };



    const onLoginFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log('Login Success:', values);
        const { email, password } = values;
        console.log(email, password);

        await loginSubmitHandler(email, password);

    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const loginSubmitHandler = async (email?: string, password?: string) => {
        console.log('login Submit:', email, password);

        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password
            });

            console.log("login Response:", response.data);
            const message = response.data.message;
            success(message);
            setIsLoginErr(false);
            dispatch(addUser(response.data.user));

            if (response.data.user.isAdmin === true) {
                router.push('/admin');
            } else {
                router.push('/')

            }


        } catch (err: any) {
            console.log('login err:', err.response.data);
            const message = err.response.data.message;
            setErrMessage(message);
            setIsLoginErr(true);
            // Handle error
        }
    };


    return (
        <>
            {contextHolder}
            <main className=" flex flex-col items-center justify-center  gap-10 bg-slate-100 p-6">

                {/* login form */}
                <h1 className="font-bold text-center text-4xl mb-6 p-2 border-b-4 rounded border-blue-400">Login</h1>

                <div className="flex flex-col items-center p-10 shadow-2xl rounded-lg border-2  justify-center">

                    <div className=' flex mb-7 justify-center items-center  p-2 rounded-lg'>
                        <MountainIcon className="w-9 h-9 text-green-500" />
                        <span className="text-3xl font-bold text-green-500">Quick Cart</span>
                    </div>
                    <Form
                        name="login"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onLoginFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        className=" w-full flex flex-col  gap-8"
                    >
                        <p className=' text-center mb-5 italic font-semibold  '>Sign in in to your account.</p>


                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            className="m-2 p-3"
                            rules={[{
                                required: true, message: 'Please enter your email!',
                                type: "email",
                            }]}
                        >
                            <Input size='large' status={isLoginErr ? 'error' : ''} />
                        </Form.Item>


                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password status={isLoginErr ? 'error' : ''} size='large' />
                        </Form.Item>

                        {
                            isLoginErr &&
                            <Alert
                                message="Error"
                                description={errMesasage}
                                type="error"
                                showIcon
                            />
                        }

                        <Form.Item className=' self-center ' >
                            <Button type="primary" htmlType="submit" size="large">
                                Login
                            </Button>
                        </Form.Item>


                    </Form>

                    <div className=' font-extralight'>
                        Don't have an account? <a href="/account/signup" className="text-blue-500">Sign up</a>
                    </div>

                    <Divider plain style={{
                        borderColor: 'black',
                    }}>
                        OR
                    </Divider>
                </div>


            </main>


        </>
    );
};

export default Login;

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}