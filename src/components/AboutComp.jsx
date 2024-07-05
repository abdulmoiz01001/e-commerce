import React from 'react'

const AboutComp = () => {
  return (
    <>
    <div className="min-h-screen w-[100vw] bg-gray-100 flex flex-col justify-center xxs:mt-20 xs:mt-20 sm:mt-20 items-center xxs:p-2 p-8">
      <div className="max-w-6xl xxs:w-full xs:w-full sm:w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-96 relative">
          <img
            src="https://th.bing.com/th/id/R.beec1d9ee66f6ad85503e65823a3eae7?rik=yeRSJn23SVP49Q&riu=http%3a%2f%2fwww.ieepl.co.in%2fimages%2fabout.jpg&ehk=ArAkGGq%2fAGv2RaEckyJqSEbPSPD2XfHXBrpAJOGAT1g%3d&risl=&pid=ImgRaw&r=0"
            alt="About Us"
            className="object-cover bg-center w-full h-full"
          />
        </div>
        <div className="p-8">
          <h1  className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to our company. We are dedicated to providing the best service possible. Our team is composed of highly skilled professionals who are passionate about what they do. We believe in innovation, quality, and customer satisfaction. Our mission is to deliver exceptional value to our customers through our products and services.
          </p>
          <p className="text-gray-600">
            Founded in 2021, we have quickly established ourselves as a leader in the industry. Our commitment to excellence has driven us to continuously improve and adapt to the changing needs of our customers. Thank you for choosing us, and we look forward to serving you.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutComp