import React from 'react'
import devicesImg from './images/image-devices.png'

export default function ClipboardAnywhere() {
  return (
    <div className='max-w-6xl mx-auto text-center my-20 px-10'>
      <h3 className='clipboard-h3'>Access Clipboard Anywhere</h3>
      <p className="clipboard-body max-w-3xl mx-auto mb-24">
      Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
      </p>
      <img className="mx-auto" src={devicesImg} alt="image-devices" />
    </div>
  )
}
