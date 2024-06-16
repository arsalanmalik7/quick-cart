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
        <main className="flex flex-wrap justify-center  gap-10 bg-slate-100 min-h-screen p-6">

            {/* login form */}
            <div>
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
                    <p className=' text-left mb-5 '>Sign in in to your account.</p>

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
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <div className="flex flex-col  items-center">
                <div className="relative flex flex-col items-center">
                    <div className="flex-grow border-l border-gray-800 h-full"></div>
                    <span className="my-4 text-gray-500">OR</span>
                    <div className="flex-grow border-l border-gray-800 h-full"></div>
                </div>
            </div>



            {/* register form */}
            <div className="flex flex-col items-center bg-white p-10 rounded-lg border-2">
                <h1 className="font-bold text-4xl mb-6">Register</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    className="w-full"
                >
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
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </main>
    );
};

export default Login;
