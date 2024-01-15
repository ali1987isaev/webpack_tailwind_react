import React from 'react'
import imageComputer from './images/image-computer.png'

const features = [
  {
    title: 'Quick Search',
    copy: 'Easily search your snippets by content, category, web address, application, and more.',
  },
  {
    title: 'iCloud Sync',
    copy: 'Instantly saves and syncs snippets across all your devices.',
  },
  {
    title: 'Completely History',
    copy: 'Retrieve any snippets from the first moment you started using the app.',
  }
]

export default function ClipboardFeatures() {
  return (
    <div className='max-w-6xl mx-auto text-center my-20 px-10'>
      <div className="flex flex-col md:relative md:flex-row md:gap-32">
        <div className="md:w-1/2">
          <img className='md:absolute md:top-0 md:right-1/2' src={imageComputer} alt="image-computer" />
        </div>
        <div className="flex flex-col mt-16 mb-24 gap-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
          {
            !!features.length && features.map(({title, copy}) => (
              <div key={title}>
                <h5 className='clipboard-h5'>{title}</h5>
                <p className="clipboard-body max-w-md md:ml-0 md:text-left">{copy}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
