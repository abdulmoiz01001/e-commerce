import React, { useState } from 'react'
import back from '../assets/back.webp'
import cloth from '../assets/cloth.jpg'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import CarouselComp from './CarouselComp'
import { FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { MdPriceCheck } from "react-icons/md";

const LandingPageComp = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [openQuestion, setOpenQuestion] = useState(null);
  
    const toggleQuestion = (index) => {
      setOpenQuestion(openQuestion === index ? null : index);
    };
    const faqs = [
        {
          question: "What types of clothing do you offer?",
          answer: "We offer a wide range of high-quality clothing, including formal wear, casual wear, business attire, and accessories. Our collection is curated to ensure exceptional quality and style."
        },
        {
          question: "Where are your products sourced from?",
          answer: "Our products are sourced from renowned manufacturers and designers known for their commitment to quality and craftsmanship."
        },
        {
          question: "Do you have physical stores or are you online only?",
          answer: "Currently, we operate exclusively online to provide you with a convenient shopping experience and a wide selection of products."
        },
        {
          question: "How do I place an order?",
          answer: "You can place an order by browsing our website, selecting the items you wish to purchase, and proceeding to checkout. Follow the prompts to complete your order."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, and other secure payment methods to ensure a smooth and secure transaction process."
        },
        {
          question: "Can I change or cancel my order after it has been placed?",
          answer: "Yes, you can change or cancel your order within 24 hours of placing it. Please contact our customer support team for assistance."
        },
    ];
       
         
      
  return (
   
   <>
        <section className='flex w-[100vw] xxs:mt-36 xs:mt-20 sm:mt-20 flex-col justify-center items-center' >
        <main className='w-[100%]  h-[100vh] flex xs:flex-col xxs:flex-col justify-end xxs:justify-center xs:justify-center gap-40 xxs:gap-2 xs:gap-2 items-center ' >
          <section className='w-[45%] xxs:w-full xs:w-full  xxs:h-[50%] xs:h-[50%] pl-4 flex flex-col gap-8 justify-center items-start' >
            <div className='w-full  flex justify-start items-center  ' >
              <p className='text-sm font-semibold' >Your Brand</p>
            </div>
            <div className='w-full font-bold xxs:text-2xl xs:text-2xl text-8xl flex justify-evenly items-center  ' >
              <p>The Store Of Quality Cloths </p>
            </div>
            <div className='w-full  flex justify-start items-center  ' >
              <p className='text-lg xxs:text-sm xs:text-lg font-bold text-justify xxs:p-2 xs:p-2 pr-40' >Experience Unmatched Elegance
Discover the finest fabrics and exquisite designs that redefine luxury fashion.

Timeless Quality, Endless Style
Our collection features premium materials and sophisticated styles that stand the test of time.

Crafted for Comfort and Style
Indulge in clothing that combines superior craftsmanship with unparalleled comfort.

Redefine Your Wardrobe
Elevate your fashion game with our curated selection of high-quality garments.


.</p>
            </div>
            <div className='w-full gap-12 xxs:gap-4 xs:gap-4 flex xxs:flex-col justify-start items-center  ' >
              <button className='text-white font-bold xxs:text-sm xs:text-sm text-2xl hover:bg-opacity-55 bg-gray-800 px-8 py-2 rounded-lg border-2 hover:border-[#285d31] hover:bg-transparent hover:text-[#285d31]' >Visit Our Store</button>
              <button className=' font-bold xxs:text-sm xs:text-sm text-2xl hover:bg-opacity-55 text-[#285d31] border-2 border-[#285d31] hover:bg-slate-200 px-8 py-2 rounded-lg hover:border-2 hover:border-[#285d31] hover:bg-transparent hover:text-[#285d31]' >Get in Touch</button>
            </div>
          </section>
          <section className='w-[40%] relative xxs:w-full xs:w-full h-full xss:h-[60%] flex justify-center items-center' >
            <div className="absolute -left-40 xxs:left-2 xs:left-2  bg-white w-[600px] xxs:w-[340px] xxxs:h-[120px] xs:w-[340px] rounded-lg shadow-3 p-6">
              <div className="flex justify-start items-center gap-8 xxs:mb-0 mb-4">
                <img src={cloth} alt="" width={500} height={500} className="w-[120px] h-[120px] xxs:w-[60px] xxs:h-[60px] object-cover rounded-full shadow-md" />
                <p className="text-xl xxs:text-sm xs:text-sm font-semibold text-gray-800">We Have a Bunch of Cloths</p>
              </div>
              <div className="flex bg-slate-200 flex-col justify-between items-start xxs:p-0 p-4 rounded-lg shadow-inner">
                <p className="text-lg xxs:text-sm xs:text-sm font-bold text-gray-700 mb-2">Electronic Components</p>
                <div className=" xxs:text-sm xs:text-sm text-gray-600">
                  Deal with us to provide you with the best cloths for your mini shop.
                </div>
              </div>
            </div>

            <div className='w-full  flex justify-center items-center h-[80%] bg-gray-800' >

              <img src={back} alt='home' width={500} height={500} className='w-[90%] rounded-full h-[90%]' />
            </div>
          </section>
        </main>
        <section className="w-full  xxs:flex-col xs:flex-col flex justify-between items-center border-2 border-gray-300 p-4 bg-white rounded-lg shadow-lg">
          <div className="w-1/3 xxs:w-full xs:w-full flex justify-center items-center">
            <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700">Partners that trust us</p>
          </div>
          <div className="w-2/3 xxs:w-full xs:w-full flex justify-evenly items-center">
            <p className="text-gray-600 hover:text-gray-900 transition duration-200">Google</p>
            <p className="text-gray-600 hover:text-gray-900 transition duration-200">YouTube</p>
            <p className="text-gray-600 hover:text-gray-900 transition duration-200">Facebook</p>
            <p className="text-gray-600 hover:text-gray-900 transition duration-200">Yahoo</p>
          </div>
        </section>

        <section className='w-[98%] h-[80vh] xxs:h-full xs:w-full py-8 bg-gray-200 rounded-xl flex flex-col justify-start items-end' >

          <div className='w-[90%] h-[10%] xxs:h-[5%] xs:h-[5%] flex justify-start items-center ' >
            <div className='w-[10px] h-[10px] bg-green-800 rounded-full' ></div> <p className='text-xl xxs:text-sm font-semibold ml-2 text-gray-700 xxs:p-0 p-4' >Our Services & benefits</p>
          </div>
          <div className='w-[90%] h-[20%] xxs:h-[5%] xs:h-[5%] flex justify-start items-center' >
            <h1 className='text-6xl xxs:text-xl xs:text-xl font-semibold text-gray-700 xxs:p-0 xs:p-0 p-4' >Our Services</h1>
          </div>
          <div className='w-[90%] h-[70%] flex justify-start flex-wrap items-center' >
            <div className='w-[49%] xxs:w-full xs:w-full flex flex-col justify-evenly xxs:items-start items-center' >
              <TbTruckDelivery size={50} />
              <h1 className='text-4xl xxs:text-xl xs:text-xl font-semibold text-gray-700 p-4' >Fast Delivery</h1>
              <p className='text-lg xxs:text-sm font-semibold text-gray-700 p-4' >We deliver your products within 24 hours of ordering.</p>

            </div>
            <div className='w-[49%] xxs:w-full xs:w-full flex flex-col justify-evenly xxs:items-start items-center' >
              <HiOutlineHandThumbUp  size={50} />
              <h1 className='text-4xl xxs:text-xl xs:text-xl font-semibold text-gray-700 p-4' >Good Quality</h1>
              <p className='text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-4' >We provide you best quality ever  you see</p>

            </div>
            <div className='w-[49%] xxs:w-full xs:w-full  flex flex-col justify-evenly xxs:items-start items-center' >
              <IoFileTrayFullOutline size={50} />
              <h1 className='text-4xl xxs:text-xl xs:text-xl font-semibold text-gray-700 p-4' >Bunch of Orders</h1>
              <p className='text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-4' >We provide you bunch of Cloths on discounted price.</p>

            </div>
            <div className='w-[49%] xxs:w-full xs:w-full flex flex-col justify-evenly xxs:items-start items-center' >
              <MdPriceCheck size={50} />
              <h1 className='text-4xl xxs:text-xl xs:text-xl font-semibold text-gray-700 p-4' >Reasonable Price </h1>
              <p className='text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-4' >Order your best product with limited price.</p>

            </div>
          </div>

        </section>

        <section className='w-[80%] xxs:w-[95%] xs:w-[95%] h-[50vh] xxs:h-full xs:h-full flex xxs:flex-col xs:flex-col justify-between xxs:justify-center items-center ' >

          <div className='w-[50%] h-[300px] xxs:h-[10%] xs:h-[10%] flex justify-start xxs:justify-center xs:justify-center xxs:items-center xs:items-center items-start ' >
            <h1 className='text-6xl xxs:text-2xl xs:text-2xl  font-semibold text-gray-700 p-4' >About us</h1>

          </div>

          <div className='w-[50%] xxs:w-full xs:w-full gap-4 flex flex-col justify-center items-start xxs:items-center ' >
            <p className='text-lg xxs:text-sm xs:text-sm font-semibold text-justify text-gray-700 p-4' >Welcome to The Store of Quality Cloths, where we believe that every piece of clothing should be a masterpiece. Founded on the principles of excellence and sophistication, our mission is to provide you with the finest garments that not only look exquisite but also feel exceptional.

Our journey began with a simple idea: to curate a collection of clothing that embodies elegance, comfort, and timeless style. We source our products from the most esteemed manufacturers and designers, ensuring that each item reflects our unwavering commitment to quality and craftsmanship. </p>
            <button className='text-white font-bold text-2xl  xxs:text-sm xs:text-sm hover:bg-opacity-55 bg-gray-800 px-8 py-2 rounded-lg border-2 hover:border-[#285d31] hover:bg-transparent hover:text-[#285d31]' >Learn More</button>
          </div>

        </section>

        <section className="w-full h-[50vh] xxs:h-full xs:h-full xxs:gap-8 xs:gap-8 flex flex-wrap justify-evenly items-center bg-white p-4 rounded-lg shadow-lg">
  <div className="w-56 flex flex-col justify-center items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h1>
    <p className="text-center text-gray-600">Happy Customers</p>
  </div>
  <div className="w-56 flex flex-col justify-center items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">500+</h1>
    <p className="text-center text-gray-600">Exclusive Designs</p>
  </div>
  <div className="w-56 flex flex-col justify-center items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">100%</h1>
    <p className="text-center text-gray-600">Satisfaction Guarantee</p>
  </div>
  <div className="w-56 flex flex-col justify-center items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">Worldwide</h1>
    <p className="text-center text-gray-600">Shipping Available</p>
  </div>
</section>

        
        <section className='w-full h-[50vh] xxs:h-full xs:h-full xxs:flex-col xs:flex-col flex items-center justify-center'>
          <div className='w-[70%] xxs:w-full xs:w-full flex xxs:py-4 xs:py-4 gap-40 justify-end items-center h-full bg-gray-800' >
            <div className='h-full w-[40%] xxs:w-full xs:w-full flex flex-col justify-center items-start xxs:items-center xs:items-center ' >
              <h1 className='text-6xl xxs:text-2xl xs:text-2xl font-semibold text-white p-4' >Get in Touch</h1>
              <p className='text-lg xxs:text-sm xs:text-sm xxs:text-center xs:text-center font-semibold text-white p-4' >Have any questions or concerns? Feel free to reach out to us. We're here to help!</p>
              <button className='text-white w-[40%] xxs:w-[50%] xs:w-[50%] font-bold xxs:text-sm xs:text-sm text-2xl hover:bg-opacity-55 bg-gray-800 px-8 py-2 rounded-lg border-2  hover:bg-transparent ' >Contact Us</button>
            </div>
            <div className='h-full xxs:hidden xs:hidden w-[20%] rounded-tl-full rounded-bl-full backgroud ' >

            </div>
          </div>
          <div className='w-[30%] xxs:hidden xs:hidden h-full bg-gray-200' >
            <div className='h-full xxs:hidden xs:hidden w-[45%] rounded-tr-full rounded-br-full bg-gray-800' >

            </div>
          </div>

        </section>



        <section className="w-full h-[100vh] xxs:h-full xs:h-full bg-gray-200 flex flex-col items-center p-8">
          <div className="w-full flex flex-col justify-center items-center mb-8">
            <h1 className="text-6xl xxs:text-4xl xs:text-4xl font-semibold text-gray-700 p-4">FAQ</h1>
            <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-4 text-center">
              Have any questions or concerns? Feel free to reach out to us. We're here to help!
            </p>
          </div>
          <div className="w-[90%] xxs:w-full xs:w-full flex flex-wrap justify-between items-start gap-8">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="w-[45%] xxs:w-full xs:w-full bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-hidden transition-all"
              >
                <div
                  className="px-4 xxs:px-2 xs:px-2 xxs:py-4 xs:py-2 py-6 flex justify-between items-center cursor-pointer text-white hover:text-black bg-gray-800 hover:bg-slate-400 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <h1 className="text-2xl xxs:text-xl xs:text-xl  font-semibold  ">{question.question}</h1>
                  <p className="text-4xl xxs:text-2xl xs:text-2xl font-semibold  ">
                    {openQuestion === index ? '-' : '+'}
                  </p>
                </div>
                <div
                  className={`px-4 py-6 text-gray-600 transition-max-height duration-500 ease-in-out ${openQuestion === index ? 'max-h-screen' : 'max-h-0'
                    } overflow-hidden`}
                >
                  <p className='xxs:text-sm xs:text-sm' >
                   {question.answer}
                   </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-[50%] xxs:w-full xs:w-full flex xxs:mt-4 xs:mt-4 flex-col justify-center items-center">
            <FaRegQuestionCircle size={50} />
            <h1 className="text-4xl xxs:text-xl xs:text-xl font-semibold text-gray-700 p-4">Still have a Question?</h1>
            <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-4 text-center">
              Feel free to reach out to us. We're here to help!
            </p>
            <button className="text-white w-[40%] xxs:w-[80%] xs:w-[80%] xxs:text-sm xs:text-sm active:scale-95 font-bold text-2xl bg-gray-800 px-8 py-2 rounded-lg border-2 transition-transform">
              Contact Us
            </button>
          </div>
        </section>

        <section className='w-full h-[80vh] xxs:h-full xs:h-full xxs:py-4 xs:py-4 flex flex-col justify-center items-center' >
          <h1 className='text-6xl xxs:text-2xl xs:text-2xl xxs:text-center xs:text-center font-semibold text-gray-700 p-4' >What our customers say</h1>
          <p className='text-lg xxs:text-sm xs:text-sm xxs:text-center xs:text-center font-semibold text-gray-700 p-4' >Thousands of happy customers that changed their energy use .</p>
          <CarouselComp />
        </section>


        <footer className="w-[100vw] h-[70vh] xxs:h-full xs:h-full flex flex-col justify-between xxs:justify-between items-center bg-gray-100">
          <div className="w-full h-[80%] xxs:h-[90%] xs:h-[90%] flex xxs:flex-col xs:flex-col justify-evenly items-center  p-8">
            <div className="w-[20%] xxs:w-full xs:w-full xxs:h-40 xs:h-40 h-[80%] flex flex-col justify-start items-center">
              <h1 className="text-6xl xxs:text-4xl xs:text-4xl font-semibold text-gray-700 select-none p-4">Your Brand</h1>
            </div>
            <div className="w-[20%] xxs:w-full xs:w-full xxs:h-40 xs:h-40 h-[80%] flex flex-col justify-start items-center">
              <h1 className="text-4xl xxs:text-2xl font-semibold text-gray-700 select-none p-4">Platform</h1>
              <p className="text-lg xxs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Solutions</p>
              <p className="text-lg xxs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">How it works</p>
              <p className="text-lg xxs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Pricing</p>
            </div>
            <div className="w-[20%] xxs:w-full xs:w-full xxs:h-48 xs:h-48 h-[80%] flex flex-col justify-start items-center">
              <h1 className="text-4xl xxs:text-2xl xs:text-2xl font-semibold text-gray-700 select-none p-4">Company</h1>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">About</p>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Our Mission</p>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Careers</p>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Contact</p>
            </div>
            <div className="w-[20%] xxs:w-full xxs:h-44 h-[80%] flex flex-col justify-start items-center">
              <h1 className="text-4xl xxs:text-2xl font-semibold text-gray-700 select-none p-4">Resources</h1>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Blog</p>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Help Center</p>
              <p className="text-lg xxs:text-sm xs:text-sm font-semibold text-gray-700 p-2 transition-transform duration-300 cursor-pointer hover:scale-105">Support</p>
            </div>
            <div className="w-[20%] xxs:w-full xs:w-full xxs:h-full xs:h-full h-[80%] flex flex-col justify-start items-center">
              <div className="w-full flex justify-around items-center p-4 flex-wrap transition-transform duration-300 hover:scale-105">
                <FaFacebookF size={50} className="text-blue-600" />
                <p className="text-lg font-semibold text-gray-700 p-4">Follow us on Facebook</p>
              </div>
              <div className="w-full flex justify-around items-center p-4 flex-wrap transition-transform duration-300 hover:scale-105">
                <SiInstagram size={50} className="text-pink-500" />
                <p className="text-lg font-semibold text-gray-700 p-4">Follow us on Instagram</p>
              </div>
              <div className="w-full flex justify-around items-center p-4 flex-wrap transition-transform duration-300 hover:scale-105">
                <GrLinkedin size={50} className="text-blue-700" />
                <p className="text-lg font-semibold text-gray-700 p-4">Follow us on LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[20%]  flex xxs:justify-center xs:justify-center justify-end items-center bg-gray-200 p-4">
            <p className="text-lg xxs:text-sm xs:text-sm xxs:text-center xs:text-center font-semibold text-gray-700">© 2021 UneComp. All rights reserved.</p>
          </div>
        </footer>


      </section>

   </>
  )
}

export default LandingPageComp