import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            const getUser = localStorage.getItem('user');
            if (getUser === null) {
                toast({
                    title: `User not found`,
                    position: 'top',
                    isClosable: true,
                });
            } else if (JSON.parse(getUser).email === values.email && JSON.parse(getUser).password === values.password) {
                localStorage.setItem('loginUser', true);
                toast({
                    title: `User has been logged in`,
                    position: 'top',
                    isClosable: true,
                });
                navigate('/store');
            } else {
                toast({
                    title: `Invalid credentials`,
                    status: 'error',
                    position: 'top',
                    isClosable: true,
                });
            }
            setSubmitting(false);
        }, 400);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-6xl font-medium title-font mb-4 text-gray-900">Login</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome back to The Store of Quality Cloths. Please log in to access your account and explore our exclusive collection of premium suits, casual wear, and more.</p>
                </div>
                <div className="lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex sm:flex-row flex-col mx-auto">
                                <div className="relative flex-grow w-full">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="relative flex-grow w-full">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    {isSubmitting ? 'Logging In...' : 'Login'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default Login;
