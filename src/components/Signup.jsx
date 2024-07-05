import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

const Signup = () => {
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
        const already = JSON.parse(localStorage.getItem('user'));
        console.log(already);
        if (already) {
            if (already.email === values.email && already.password === values.password) {

            toast({
                title: `User already exists`,
                status: 'error',
                position: 'top',
                isClosable: true,
            });
            setSubmitting(false);
            return;
        }
        }
        setTimeout(() => {
            // Save user logic (e.g., localStorage saving)
            localStorage.setItem('user', JSON.stringify(values));
            toast({
                title: `User has been saved`,
                position: 'top',
                isClosable: true,
            });
            navigate('/login');
            setSubmitting(false);
        }, 400);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto flex flex-wrap items-center">
                <div className="container md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">Join The Store of Quality Cloths Today</h1>
                    <p className="leading-relaxed mt-4">Discover the finest collection of premium suits, casual wear, business attire, and accessories. Sign up to get the latest updates and exclusive offers.</p>
                </div>
                <div className="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                </button>
                                <p className="text-xs text-gray-500 mt-3">Join now and be the first to know about our new arrivals and exclusive offers.</p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default Signup;
