import React from 'react'

const cards = [
  {
    active: false,
    type: 'basic',
    size: '100GB',
    price: '$1.99/Month',
    linkText: 'Purchase',
    options: [
      '100 GB of storage',
      'Option to add members',
      'Extra member benefits'
    ]
  },
  {
    active: true,
    type: 'standard',
    size: '200GB',
    price: '$3.99/Month',
    linkText: 'Purchase',
    options: [
      '200 GB of storage',
      'Option to add members',
      'Extra member benefits'
    ]
  },
  {
    active: false,
    type: 'premium',
    size: '2TB',
    price: '$8.99/Month',
    linkText: 'Purchase',
    options: [
      '2 TB of storage',
      'Option to add members',
      'Extra member benefits'
    ]
  }
]

function Card({ active, type, size, price, linkText, options }) {
  return (
    <div className={`${active ? 'bg-violet-600' : 'bg-slate-700'} rounded-xl text-white h-max`}>
      {/* Upper container */}
      <div className={`${active ? 'p-10' : 'p-8'} mx-3 mt-3 rounded-t-xl bg-slate-800`}>
        <div className="text-center uppercase">
          { type }
        </div>
        <h2 className="mt-10 font-serif text-5xl text-center">
          { size }
        </h2>
        <h3 className="mt-2 text-center">{ price }</h3>
        <div className="flex justify-center">
          <a
            className={`${active ? 'bg-violet-600' : ''} inline-block px-10 py-3 my-6 text-center border border-violet-600 
            rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800`}
            href="#"
          >
            { linkText }
          </a>
        </div>
      </div>
      {/* Border */}
      <div className={`border-t ${active ? 'border-violet-600' : 'border-slate-700'}`}></div>
      {/* Lower container */}
      <div className={`${active ? 'p-10' : 'p-8'} mx-3 mb-3 rounded-b-xl bg-slate-800`}>
        <div className="flex flex-col space-y-2">
            {
              !!options.length && options.map(option => (
                <div key={option} className="flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5" 
                    stroke="currentColor"
                    className="w-6 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className='text-sm ml-1'>{option}</span>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default function PricingGrids() {
  return (
    <div className='section-container bg-slate-800'>
      <div className="flex flex-col my-6 space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-6 md:my-0">
        {
          !!cards.length && cards.map(card => (
            <Card key={card.type} {...card} />
          ))
        }
      </div>
    </div>
  )
}
