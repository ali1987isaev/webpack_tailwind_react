import React from 'react'
import image from '../../assets/login-modal.jpg'
import facebookImg from '../../assets/facebook.png'
import googleImg from '../../assets/google.png'

export default function LoginModal() {
  return (
    <div className='section-container bg-rose-50'>
      <div
        className="relative overflow-hidden max-w-4xl flex flex-col m-6 
        gap-2 bg-white shadow-2xl rounded-2xl md:flex-row md:m-0"
      >
        {/* Close Button */}
        <button
          type='button'
          className="absolute group top-5 right-5 w-10 h-10 rounded-full 
          bg-gray-200 cursor-pointer flex items-center justify-center hover:-translate-y-0.5 
          shadow-sm hover:shadow-lg transition duration-150 md:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black group-hover:text-gray-600"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side */}
        <div className="p-6 flex flex-col divide-y gap-12 divide-gray-300 md:p-20">
          <div>
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
              Log in to your account to upload or download pictures, videos or music.
            </p>
            <input
              type="email"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder='Enter your email address'
            />
            <div className="flex flex-col items-center justify-between mt-6 gap-6 md:flex-row">
              <a className="block font-thin text-cyan-700">Forgot password</a>
              <button type="button" className="w-full md:w-auto flex justify-center 
              items-center p-6 gap-4 font-bold text-white rounded-md shadow-md 
              shadow-cyan-100 px-9 bg-cyan-700 hover:bg-opacity-90 hover:shadow-lg 
              transition hover:-translate-y-0.5 duration-150">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

              </button>
            </div>
          </div>
          <div>
            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or login with
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:gap-4">
              <button
                className='flex items-center justify-center py-2 gap-3 border border-gray-300 
                rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 
                transition duration-150 md:w-1/2'
                type="button"
              >
                <span className='font-thin'>Facebook</span>
                <img className='w-9' src={facebookImg} alt="facebook-Img" />
              </button>
              <button 
                className='flex items-center justify-center py-2 gap-3 border border-gray-300 
                rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 
                transition duration-150 md:w-1/2'
                type="button"
              >
                <span className='font-thin'>Google</span>
                <img className='w-9' src={googleImg} alt="google-Img" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <img className='hidden md:object-cover md:rounded-r-2xl md:block md:w-[40%]' src={image} alt="login-modal-img" />
      </div>
    </div>
  )
}
