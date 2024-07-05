import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import useSearchItem from '../customhook/useSearchItem';
import { addFiltered, clearFiltered } from '../lib/store/features/filteredSlice/filteredSlice';

const Header = () => {
    const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const user = localStorage.getItem('loginUser') ?? false;
    const filteredProducts = useSearchItem(searchTerm);
    console.log(filteredProducts);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    const logout = () => {
      
        localStorage.removeItem('loginUser');
        navigate('/');
    }
const logoutsmallscreen = () => {
    toggleSidebar()
        localStorage.removeItem('loginUser');
        navigate('/');
    }
    useEffect(() => {
        if (searchTerm === '') {
          dispatch(clearFiltered());
          return;
        }
      
        if (filteredProducts === null) {
          dispatch(clearFiltered());
          return;
        }
        console.log(filteredProducts);
        dispatch(addFiltered(filteredProducts));
      
      }, [filteredProducts]);

   

    const handleSearch = (event) => {
        if (event.target.value === '') {
          dispatch(clearFiltered());
          setSearchTerm('');
          return;
        }
        setSearchTerm(event.target.value);
      };
    

    return (
        <>
            <nav className='w-full h-[80px] bg-gray-800 text-white flex justify-between items-center px-4 fixed top-0 z-10 shadow-lg'>
                <div className='w-auto flex items-center'>
                    <h1 className='text-2xl font-bold tracking-wider'>Your Brand</h1>
                </div>
                <div className='flex xxs:hidden xs:hidden sm:hidden md:hidden space-x-6'>
                    <Link to="/" className='text-lg font-semibold hover:text-blue-400 transition duration-300'>Home</Link>
                    <a href="/about" className='text-lg font-semibold hover:text-blue-400 transition duration-300'>About</a>
                    <Link to="/store" className='text-lg font-semibold hover:text-blue-400 transition duration-300'>Store</Link>
                    <Link to="/contact" className='text-lg font-semibold hover:text-blue-400 transition duration-300'>Contact</Link>
                </div>
                

    <div class="relative w-[50%] xxs:hidden mx-2 ">
        <input onChange={(e)=>{handleSearch(e)}} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>


                
                <div className='flex xxs:hidden xs:hidden sm:hidden md:hidden'>
                    {
                        user ? <Link to="/cart">
                            <FaShoppingCart color='white' className='mr-8 active:scale-95' size={40} />
                        </Link> : ''
                    }
                    {
                        user ? <Link to="/orders">
                            <button className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 mr-2 py-2 rounded-lg'>Orders</button>
                            </Link> : ''
                    }
                {
                    user ?  <button onClick={()=>{logoutsmallscreen()}}  className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Logout</button> :<>
                    <Link to={'/login'} >
                    
                    <button className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Login</button>
                    </Link>
                    <Link to={'/signup'} >
                    
                    <button className='bg-blue-500 ml-4 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Signup</button>
                    </Link>
                    </>
                }    
                </div>
                <div className='hidden xxs:flex xs:flex sm:flex md:flex '>
                    <button onClick={toggleSidebar} className='text-2xl'>
                        {sidebar ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-95 transform ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
                <div className='flex justify-between items-center px-4 py-4'>
                    <h1 className='text-2xl font-bold tracking-wider text-white'>UneComp</h1>
                    <button onClick={toggleSidebar} className='text-2xl text-white'>
                        <FaTimes />
                    </button>
                </div>
                <ul className='flex flex-col items-center space-y-6 mt-8'>
                    <li><Link to="/" className='text-xl font-semibold text-white hover:text-blue-400 transition duration-300' onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/about" className='text-xl font-semibold text-white hover:text-blue-400 transition duration-300' onClick={toggleSidebar}>About</Link></li>
                    <li><Link to="/store" className='text-xl font-semibold text-white hover:text-blue-400 transition duration-300' onClick={toggleSidebar}>Store</Link></li>
                    <li><Link to="/contact" className='text-xl font-semibold text-white hover:text-blue-400 transition duration-300' onClick={toggleSidebar}>Contact</Link></li>
                    <div class="relative w-[90%] hidden xxs:flex mx-2 ">
        <input onChange={(e)=>{handleSearch(e)}} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
                    {
                        user ? <Link to="/cart">
                            <FaShoppingCart  onClick={toggleSidebar} color='white' className='mr-8 active:scale-95' size={40} />
                        </Link> : ''
                    }
                    {
                        user ? <Link to="/orders">
                            <button  onClick={toggleSidebar} className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Orders</button>
                            </Link> : ''
                    }
                     {
                    user ?  <button onClick={()=>{logout()}}  className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Logout</button> :<>
                    <Link to={'/login'} >
                    
                    <button  onClick={toggleSidebar} className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Login</button>
                    </Link>
                    <Link to={'/signup'} >
                    
                    <button  onClick={toggleSidebar} className='bg-blue-500 ml-4 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg'>Signup</button>
                    </Link>
                    </>
                }          </ul>
            </div>
        </>
    );
}

export default Header;
