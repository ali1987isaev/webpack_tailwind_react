import React from 'react'

const projects = [
  {
    title: 'clipboard',
    url: '/clipboard',
  },
  {
    title: 'loopstudio',
    url: '/loop-studio',
  },
  {
    title: 'fylo',
    url: '/fylo',
  },
  {
    title: 'bookmark',
    url: '/bookmark',
  }
]

export default function TheHeader() {
  return (
    <div className='flex items-center justify-between w-full sticky top-0 z-50 p-5 bg-white'>
      <h2 className='text-zinc-800 font-bold text-center uppercase'>
        <a href="/">React + Tailwindcss + Webpack</a>
      </h2>
      <ul className='flex items-center gap-5'>
        {
          !!projects.length && projects.map(({title, url}) => (
            <li key={title}>
              <a className='group block' href={url}>
                <span className='uppercase text-xs font-medium'>{title}</span>
                <div
                  className="my-0.5 border-t border-black opacity-0 -translate-y-0.5 
                  duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
