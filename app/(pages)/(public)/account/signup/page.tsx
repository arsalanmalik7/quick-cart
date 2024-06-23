'use client';
import type { FormProps } from 'antd';
import { Button, Form, Input, message, Divider } from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


import axios from 'axios';

const Signup = () => {
    type FieldType = {
        email?: string;
        password?: string;
        firstName?: string;
        lastName?: string;
    };

    const [messageApi, contextHolder] = message.useMessage();


    const router = useRouter();


    const success = (message: any) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };

    const error = (message: any) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };

    const onRegisterFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log('Register Success:', values);
        const { firstName, lastName, email, password } = values;
        console.log(firstName, lastName, email, password);

        await registerSubmitHandler(firstName, lastName, email, password);
    };


    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const registerSubmitHandler = async (firstName?: string, lastName?: string, email?: string, password?: string) => {
        console.log('Register Submit:', firstName, lastName, email, password);

        try {
            const response = await axios.post('/api/auth/signup', {
                firstName,
                lastName,
                email,
                password
            });

            console.log("Register Response:", response.data);
            const message = response.data.message;
            success(message);
            // Handle success response
            setTimeout(() => {
                router.push('/account/login');
            }, 2000)

        } catch (err: any) {
            console.log('Register err:', err.response.data);
            const message = err.response.data.message;
            error(message);
            // Handle error
        }
    };


    return (
        <>
            {contextHolder}
            <main className=" flex  flex-col items-center justify-center  gap-5 bg-slate-100 p-6">

                {/* register form */}
                <h1 className="font-bold text-center text-4xl mb-6 p-2 border-b-4 rounded border-blue-400">Create Account</h1>


                <div className="flex flex-col items-center p-10 shadow-2xl rounded-lg border-2  justify-center">
                    <div className=' flex mb-7 justify-center items-center  p-2 rounded-lg'>
                        <MountainIcon className="w-9 h-9 text-green-500" />
                        <span className="text-3xl font-bold text-green-500">Quick Cart</span>
                    </div>
                    <Form
                        name="signup"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onRegisterFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        className="w-full flex flex-col gap-8"
                    >
                        <p className=' text-center mb-5 font-semibold italic '>Create your account now.</p>
                        <Form.Item<FieldType>
                            label="First Name"
                            name="firstName"
                            className="m-2 p-3"
                            rules={[{
                                required: true, message: 'Please enter your first name!',
                            }]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Last Name"
                            name="lastName"
                            className="m-2 p-3"
                            rules={[{
                                required: true, message: 'Please enter your last name!',
                            }]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            className="m-2 p-3"
                            rules={[{
                                required: true, message: 'Please enter your email!',
                                type: "email",
                            }]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" size="large">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className=' font-extralight'>
                        Already have an account? <a href="/account/login" className="text-blue-500">Login</a>
                    </div>
                    {/* <Divider plain style={{
                        borderColor: 'black',
                    }}>
                        OR
                    </Divider> */}


                </div>


            </main>


        </>
    );
};

export default Signup;

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