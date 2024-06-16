'use client';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

const Login = () => {
    type FieldType = {
        email?: string;
        password?: string;
        remember?: string;
        firstName?: string;
        lastName?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <main className=" flex flex-wrap  justify-evenly  gap-10 bg-slate-100 min-h-screen p-6">

                {/* login form */}
                <div className=' '>
                    <h1 className="font-bold text-center text-4xl mb-6 p-2 border-b-4 rounded border-blue-400">Login</h1>

                    <div className="flex flex-col items-center border-violet-100 p-10 rounded-lg border-2  justify-center">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                            className="w-full flex flex-col gap-8"
                        >
                            <p className=' text-left mb-5 font-semibold '>Sign in in to your account.</p>

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
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>


                {/* register form */}
                <div className=' border-none'>
                    <h1 className="font-bold text-center text-4xl mb-6 p-2 border-b-4 rounded border-blue-400">Create Account</h1>

                    <div className="flex flex-col items-center border-violet-100 p-10 rounded-lg border-2  justify-center">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                            className="w-full flex flex-col gap-8"
                        >
                            <p className=' text-left mb-5 font-semibold '>Create your account.</p>
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

                    </div>
                </div>
            </main>

            
        </>
    );
};

export default Login;
