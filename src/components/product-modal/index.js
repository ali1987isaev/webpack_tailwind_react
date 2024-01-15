import React from 'react'
import headphone from '../../assets/headphone.png'

export default function ProductModal() {
  return (
    <div className='section-container bg-slate-100'>
      <div className="flex flex-col p-6 m-3 gap-10 bg-white rounded-2xl shadow-2xl md:flex-row md:m-0 md:p-16">
        <div>
          <img className='mx-auto aspect-square duration-200 max-w-60 hover:scale-105' src={headphone} alt="headphone" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center mb-4 gap-3 text-center md:text-left md:items-start">
            <span className="max-w-max px-3 py-1 text-sm text-white bg-black rounded-full">
              Free Shipping
            </span>
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <div className="flex flex-col mb-4 gap-3 text-center md:text-left">
              <p><s>$799</s></p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">This offer is valit until April 3rd or as long as stock lasts!</p>
            </div>
            <div className="group w-full h-16">
              <button
                className='w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 
                rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:shadow-lg'
                type="button"
              >
                <div className='px-8 py-4 bg-blue-500 rounded-lg duration-150 group-hover:bg-blue-700'>Add to cart</div>
              </button>
            </div>
            <div className="group flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>

            <div className="w-full flex flex-col gap-4 md:flex-row">
              <button
                className='w-full flex items-center justify-center py-3 px-5 
                gap-3 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg 
                hover:-translate-y-0.5 transition-all duration-150'
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor" 
                  className="w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
                <span className='whitespace-nowrap'>Add to cart</span>
              </button>
              <button
                className='w-full flex items-center justify-center py-3 px-5 
                gap-3 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg 
                hover:-translate-y-0.5 transition-all duration-150'
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span className='whitespace-nowrap'>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
