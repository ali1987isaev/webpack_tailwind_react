import React from 'react'

export default function LoopPanel({ showMenu, menuItems }) {
  return (
    <div className={`absolute z-10 left-0 right-0 top-0 h-screen transition-all duration-200 ease-out bg-black ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}>
      <menu>
        <ul className="pt-40 px-6 flex flex-col gap-3 ">
          {
            !!menuItems.length && !!showMenu && menuItems.map(item => (
              <li key={item} className={`${showMenu ? 'opacity-100' : 'opacity-0'}`}>
                <a href="#" className="text-white text-lg uppercase font-josefin font-light">{item}</a>
              </li>
            ))
          }
        </ul>
      </menu>
    </div>
  )
}
