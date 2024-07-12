import { CircularProgress, Tab, TabList, TabPanel, TabPanels, Tabs, useInterval, useTimeout, useToast } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearOrderID } from '../lib/store/features/orderSlice/orderSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const OrderDetails = () => {
    const toast = useToast()
    const router = useNavigate();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const [spinner, setSpinner] = useState(false);
    const [parsedProduct, setParsedProduct] = useState([]);
    const cartProducts = useSelector((state) => state.cartProducts);
    const orderID = useSelector((state) => state.order.orderID) ?? 0;
    console.log(orderID);

    const goBack = () => {
        dispatch(clearOrderID());
        router('/store');
    };

    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser') ?? false;
        if (!loginUser || loginUser === 'false') {
            router('/login');
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [orderID]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${orderID}`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setParsedProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        console.log(parsedProduct);
    }, [parsedProduct]);

    const userDetailsSchema = Yup.object().shape({
        namePrefix: Yup.string().required('Name Prefix is required'),
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        deptName: Yup.string().required('Department Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        projectName: Yup.string(),
        deliveryAddress: Yup.string().required('Delivery Address is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        rollNumber: Yup.string().required('Roll Number is required'),
        city: Yup.string().required('City is required')
    });

    const paymentSchema = Yup.object().shape({
        agreement: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
    });

    const formikUserDetails = useFormik({
        initialValues: {
            namePrefix: '',
            firstName: '',
            lastName: '',
            deptName: '',
            email: '',
            projectName: '',
            deliveryAddress: '',
            phoneNumber: '',
            rollNumber: '',
            city: ''
        },
        validationSchema: userDetailsSchema,
        onSubmit: (values) => {
            setActiveTab(1);
        }
    });

    const formikPayment = useFormik({
        initialValues: {
            paymentMethod: '',
            agreement: false
        },
        validationSchema: paymentSchema,
        onSubmit: (values) => {
            setSpinner(true);
            // Place order logic here
            setSpinner(false);
        }
    });

    const handleSubmit = () => {
    
        console.log("here");

        const store =  JSON.parse(localStorage.getItem('store')) ?? [];

        if(store){
 console.log("enter store");
let exist = false;

            store.map((item)=>{
                console.log("enter map");
                console.log(item)
                console.log("enter id:" , item.product.product.id , parsedProduct.id);
                if(item.product.product.id == parsedProduct.id){
                    console.log("enter id:" , item.product.product.id , parsedProduct.id);
                    toast({
                        title: `Product is already ordered`,
                        position: 'top',
                        isClosable: true,
                    })
                    exist = true;
                    return;
            
            } } )
                if(!exist){
            let product = {
                ...formikUserDetails.values,
                ...formikPayment.values,
                product: parsedProduct
            }
            store.push({
               product
            })
            dispatch(clearOrderID());
            localStorage.setItem('store',JSON.stringify(store));
            toast({
                title: `Product is ordered successfully`,
                position: 'top',
                isClosable: true,
            })
            router('/orders');
            
        } 

                        
        }else{

            store.map((item)=>{
                if(item.product.id == parsedProduct.id){
                    toast({
                        title: `Product is already ordered`,
                        position: 'top',
                        isClosable: true,
                    })
                
                }
            })
           
        }

    };

    return (
        <div className="container mt-20 w-[100vw] mx-auto px-4 py-8 xxs:p-2">
            <h1 className="text-3xl font-bold mb-6">Product Order</h1>
            <Tabs isFitted variant="enclosed" index={activeTab}>
                <TabList style={{ marginBottom: '1em' }}>
                    <Tab
                        style={{
                            backgroundColor: activeTab === 0 ? '#1f2937' : 'white',
                            color: activeTab === 0 ? 'white' : 'black',
                            border: '1px solid #285d31'
                        }}
                    >
                        User Details
                    </Tab>
                    <Tab
                        style={{
                            backgroundColor: activeTab === 1 ? '#1f2937' : 'white',
                            color: activeTab === 1 ? 'white' : 'black',
                            border: '1px solid #285d31'
                        }}
                    >
                        Order Details
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <form onSubmit={formikUserDetails.handleSubmit} className="grid grid-cols-1 gap-4">
                            {/* Name Prefix */}
                            <div className="grid grid-cols-3 gap-2">
                                <label htmlFor="namePrefix" className="col-span-1 text-sm font-medium">Prefix</label>
                                <select
                                    id="namePrefix"
                                    name="namePrefix"
                                    value={formikUserDetails.values.namePrefix}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    className="col-span-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                                {formikUserDetails.touched.namePrefix && formikUserDetails.errors.namePrefix ? (
                                    <div className="col-span-3 text-red-500 text-sm">{formikUserDetails.errors.namePrefix}</div>
                                ) : null}
                            </div>

                            {/* City */}
                            <div className="grid grid-cols-3 gap-2">
                                <label htmlFor="city" className="col-span-1 text-sm font-medium">City</label>
                                <select
                                    id="city"
                                    name="city"
                                    value={formikUserDetails.values.city}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    className="col-span-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="jamshoro">Jamshoro</option>
                                </select>
                                {formikUserDetails.touched.city && formikUserDetails.errors.city ? (
                                    <div className="col-span-3 text-red-500 text-sm">{formikUserDetails.errors.city}</div>
                                ) : null}
                            </div>

                            {/* First Name */}
                            <div className="grid grid-cols-2 gap-2">
                                <label htmlFor="firstName" className="col-span-1 text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formikUserDetails.values.firstName}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your first name"
                                    className="col-span-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.firstName && formikUserDetails.errors.firstName ? (
                                    <div className="col-span-2 text-red-500 text-sm">{formikUserDetails.errors.firstName}</div>
                                ) : null}
                            </div>

                            {/* Last Name */}
                            <div className="grid grid-cols-2 gap-2">
                                <label htmlFor="lastName" className="col-span-1 text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formikUserDetails.values.lastName}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your last name"
                                    className="col-span-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.lastName && formikUserDetails.errors.lastName ? (
                                    <div className="col-span-2 text-red-500 text-sm">{formikUserDetails.errors.lastName}</div>
                                ) : null}
                            </div>

                            {/* Roll Number */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="rollNumber" className="text-sm font-medium">Roll Number</label>
                                <input
                                    type="text"
                                    id="rollNumber"
                                    name="rollNumber"
                                    value={formikUserDetails.values.rollNumber}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your roll number"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.rollNumber && formikUserDetails.errors.rollNumber ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.rollNumber}</div>
                                ) : null}
                            </div>

                            {/* Department Name */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="deptName" className="text-sm font-medium">Department Name</label>
                                <input
                                    type="text"
                                    id="deptName"
                                    name="deptName"
                                    value={formikUserDetails.values.deptName}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your department name"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.deptName && formikUserDetails.errors.deptName ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.deptName}</div>
                                ) : null}
                            </div>

                            {/* Project Name */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="projectName" className="text-sm font-medium">Project Name</label>
                                <input
                                    type="text"
                                    id="projectName"
                                    name="projectName"
                                    value={formikUserDetails.values.projectName}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your project name"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.projectName && formikUserDetails.errors.projectName ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.projectName}</div>
                                ) : null}
                            </div>

                            {/* Email */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formikUserDetails.values.email}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your email"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.email && formikUserDetails.errors.email ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.email}</div>
                                ) : null}
                            </div>

                            {/* Phone Number */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formikUserDetails.values.phoneNumber}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your phone number"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.phoneNumber && formikUserDetails.errors.phoneNumber ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.phoneNumber}</div>
                                ) : null}
                            </div>

                            {/* Delivery Address */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="deliveryAddress" className="text-sm font-medium">Delivery Address</label>
                                <input
                                    type="text"
                                    id="deliveryAddress"
                                    name="deliveryAddress"
                                    value={formikUserDetails.values.deliveryAddress}
                                    onChange={formikUserDetails.handleChange}
                                    onBlur={formikUserDetails.handleBlur}
                                    placeholder="Enter your delivery address"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {formikUserDetails.touched.deliveryAddress && formikUserDetails.errors.deliveryAddress ? (
                                    <div className="text-red-500 text-sm">{formikUserDetails.errors.deliveryAddress}</div>
                                ) : null}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </TabPanel>

                    <TabPanel>
                    {parsedProduct   ? (
                                <div key={parsedProduct.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
                                    <img className="w-full h-48 object-cover" src={parsedProduct.image} alt={parsedProduct.title} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{parsedProduct.title}</div>
                                        <details>
                                            {parsedProduct.description}
                                            <summary>{parsedProduct.description}</summary>
                                        </details>
                                        <div className="text-sm text-gray-600 mt-2">{parsedProduct.category}</div>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            Total RS-{parsedProduct.price * 1}
                                        </span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            Ordered Quantity: 1
                                        </span>
                                    </div>
                                </div>
                            
                        ) : (
                            <div className="text-center text-gray-500">No products found</div>
                        )}
                        <form onSubmit={formikPayment.handleSubmit} className="grid grid-cols-1 gap-4">
                            {/* Payment Method */}
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="paymentMethod" className="text-sm font-medium">Payment Method</label>
                                <select
                                    required
                                    id="paymentMethod"
                                    name="paymentMethod"
                                    value={formikPayment.values.paymentMethod}
                                    onChange={formikPayment.handleChange}
                                    onBlur={formikPayment.handleBlur}
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="card">Card</option>
                                    <option value="cash">Cash</option>
                                </select>
                                {formikPayment.touched.paymentMethod && formikPayment.errors.paymentMethod ? (
                                    <div className="text-red-500 text-sm">{formikPayment.errors.paymentMethod}</div>
                                ) : null}
                            </div>

                            {/* Agreement */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    name="agreement"
                                    checked={formikPayment.values.agreement}
                                    onChange={formikPayment.handleChange}
                                    onBlur={formikPayment.handleBlur}
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="agreement" className="text-sm font-medium">I agree to the terms and conditions</label>
                            </div>
                            {formikPayment.touched.agreement && formikPayment.errors.agreement ? (
                                <div className="text-red-500 text-sm">{formikPayment.errors.agreement}</div>
                            ) : null}

                            <div className="flex justify-end">
                                <button
                            onClick={() => {handleSubmit()}}
                                    type="submit"
                                    className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {spinner ? <CircularProgress size="20px" color="white" /> : 'Place Order'}
                                </button>
                            </div>
                        </form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <button onClick={()=>{goBack()}} className="px-6 py-3 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700">
                  Discard
                </button>
                {
                  activeTab === 1 ? <button onClick={()=>{setActiveTab(0)}} className="px-6 ml-4 py-3 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700">
                  Back
                </button> : null
                } 
  
        </div>
    );
};

export default OrderDetails;
