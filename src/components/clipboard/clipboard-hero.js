import React from 'react'

export default function ClipboardHero() {
  return (
    <div className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
      <svg
        width="125"
        height="125"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-16"
      >
        <g
          stroke="#26BBA4"
          strokeWidth="10"
          fill="none"
          fillRule="evenodd">
          <circle cx="62.5" cy="62.5" r="57.5"/>
          <path
            d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
            strokeLinecap="round"/>
        </g>
      </svg>
      <h3 className='clipboard-h3'>A history of everything you copy</h3>
      <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
      </p>
      <div className="flex flex-col justify-center w-full gap-6 text-xl text-white md:flex-row">
        <a className='button-clipboard button-clipboard--primary' href="#">
          Download for IOS
        </a>
        <a className='button-clipboard button-clipboard--secondary' href="#">
          Download for MAC
        </a>
      </div>
    </div>
  )
}
