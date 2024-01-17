import React from 'react'

import desktopImage1 from './assets/desktop/image-deep-earth.jpg'
import desktopImage2 from './assets/desktop/image-night-arcade.jpg'
import desktopImage3 from './assets/desktop/image-soccer-team.jpg'
import desktopImage4 from './assets/desktop/image-grid.jpg'
import mobileImage1 from './assets/mobile/image-deep-earth.jpg'
import mobileImage2 from './assets/mobile/image-night-arcade.jpg'
import mobileImage3 from './assets/mobile/image-soccer-team.jpg'
import mobileImage4 from './assets/mobile/image-grid.jpg'
import desktopImage5 from './assets/desktop/image-from-above.jpg'
import desktopImage6 from './assets/desktop/image-pocket-borealis.jpg'
import desktopImage7 from './assets/desktop/image-curiosity.jpg'
import desktopImage8 from './assets/desktop/image-fisheye.jpg'
import mobileImage5 from './assets/mobile/image-from-above.jpg'
import mobileImage6 from './assets/mobile/image-pocket-borealis.jpg'
import mobileImage7 from './assets/mobile/image-curiosity.jpg'
import mobileImage8 from './assets/mobile/image-fisheye.jpg'
import Image from '../../utility/image'

const images = [
  {
    sm: mobileImage1,
    lg: desktopImage1,
    title: 'DEEP EARTH',
  },
  {
    sm: mobileImage2,
    lg: desktopImage2,
    title: 'NIGHT ARCADE',
  },
  {
    sm: mobileImage3,
    lg: desktopImage3,
    title: 'SOCCER TEAM VR',
  },
  {
    sm: mobileImage4,
    lg: desktopImage4,
    title: 'THE GRID',
  },
  {
    sm: mobileImage5,
    lg: desktopImage5,
    title: 'FROM UP ABOVE VR',
  },
  {
    sm: mobileImage6,
    lg: desktopImage6,
    title: 'POCKET BOREALIS',
  },
  {
    sm: mobileImage7,
    lg: desktopImage7,
    title: 'THE CURIOSITY',
  },
  {
    sm: mobileImage8,
    lg: desktopImage8,
    title: 'MAKE IT FISHEYE',
  }
]

function SeeAllButton({ full }) {
  return(
    <button
      className={`${full ? 'w-full' : ''} uppercase cursor-pointer border-2 
      border-black px-10 py-2 font-alata font-bold tracking-[.3em] duration-200 
      hover:bg-black hover:text-white`}
      type="button"
    >See all</button>
  )
}

export default function LoopCreations() {
  return (
    <div className="px-6">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex items-center justify-center md:justify-between md:gap-5">
          <h2 className="uppercase text-4xl font-josefin font-light text-center md:text-left md:text-5xl">OUR CREATIONS</h2>
          <div className="hidden md:block">
            <SeeAllButton />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-4">
          {!!images.length && images.map(({sm, lg, title}, i) => (
            <div className="relative group overflow-hidden" key={title + i + 'kjhj423kj4n32nj423'}>
              <Image sm={sm} lg={lg} imageClasses="w-full object-cover duration-200 group-hover:scale-110" />
              <div>
                {/* <div className="opacity-0 bg-white bg-opacity-50 absolute inset-0 group-hover:opacity-100"></div> */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:to-white"></div>
                <h5 className="text-white font-josefin w-48 px-10 text-2xl font-light absolute left-0 bottom-8 duration-200 group-hover:scale-110 group-hover:text-black">{title}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <SeeAllButton full />
        </div>
      </div>
    </div>
  )
}
