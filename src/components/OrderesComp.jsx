import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderesComp = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    const checkLogin = () => {
        const loginUser = localStorage.getItem('loginUser') ?? false;
        if (!loginUser || loginUser === 'false') {
            navigate('/login');
        }
    };

    useEffect(() => {
        checkLogin();
        getDataFromLocalStorage();
    }, []);

    const getDataFromLocalStorage = () => {
        const orders = JSON.parse(localStorage.getItem('store')) || [];
        console.log(orders);
        setOrders(orders);
    }

    return (
        <section className="text-gray-600 mt-32 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={index} className="p-4  md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full h-80  object-cover object-center"  src={order.product.product.image || 'https://dummyimage.com/720x400'} alt={order.product.title} />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{order.product.product.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{order.product.product.title}</h1>
                                        <p className="leading-relaxed mb-3">Order Details: {order.product.product.title}, {order.product.deptName}, {order.product.city}</p>
                                        <div className="flex items-center flex-wrap">
                                            <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Price: ${order.product.product.price}</span>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">Quantity:  1</span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">Total: ${order.product.product.price * 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No orders found</div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default OrderesComp;
