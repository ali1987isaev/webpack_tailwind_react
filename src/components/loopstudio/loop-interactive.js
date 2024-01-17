import React from 'react'
import mobileImg from './assets/mobile/image-interactive.jpg'
import desktopImg from './assets/desktop/image-interactive.jpg'
import Image from '../../utility/image'

export default function LoopInteractive() {
  return (
    <div className="relative container max-w-6xl mx-auto px-6 my-32 md:px-0">
      <Image sm={mobileImg} lg={desktopImg} />
      <div
        className="text-gray-900 bg-white text-center p-6 pt-20 md:p-20 
        md:pr-0 md:text-left md:absolute md:right-0 md:top-48"
      >
        <h3 className="uppercase font-josefin font-light text-4xl md:max-w-md">THE LEADER IN INTERACTIVE VR</h3>
        <p className="mt-6 font-josefin font-normal md:max-w-md">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </div>
  )
}
