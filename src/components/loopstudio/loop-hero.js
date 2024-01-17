import React from 'react'
import './style.css'

export default function LoopHero() {
  return (
    <div className="w-full loop-hero bg-cover bg-no-repeat min-h-screen flex items-center justify-center md:min-h-[70vh] md:justify-start">
      <div className="container mx-auto px-6 py-12 flex items-center justify-center md:justify-start">
        <div className="text-white border border-white p-4 max-w-lg md:p-10">
          <p className="text-4xl uppercase font-light font-josefin md:text-6xl">IMPRESSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
    </div>
  )
}
