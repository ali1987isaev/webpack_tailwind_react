import React from 'react'

export default function Tabs({ tab, setTab }) {
  const tabs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];

  return (
    <div className="flex items-center justify-center max-w-max mx-auto m-6 gap-20 border-b border-b-gray-400">
      {!!tabs.length && tabs.map(tabItem => (
        <button
          key={tabItem}
          type="button"
          onClick={() => setTab(tabItem)}
          className="text-gray-800 flex flex-col hover:text-red-400 group"
        >
            <span>{tabItem}</span>
            <span className={`h-1 w-full mt-5 bg-red-400 ${tabItem === tab ? 'opacity-100' : 'opacity-0'}`}></span>
        </button>
      ))}
    </div>
  )
}
