import React from 'react'

export default function ClipboardBottom() {
  return (
    <div className="px-10">
      <div className="mx-auto max-w-3xl text-center my-20 flex flex-col items-center justify-center">
        <h3 className="clipboard-h3">Clipboard for iOS and MacOS</h3>
        <p className="clipboard-body">
          Available for free on the App Store. Download for Mac or iOS, 
          sync with iCloud and you're ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col justify-center w-full gap-6 text-xl text-white mt-10 md:flex-row">
          <a className='button-clipboard button-clipboard--primary' href="#">
            Download for IOS
          </a>
          <a className='button-clipboard button-clipboard--secondary' href="#">
            Download for MAC
          </a>
        </div>
      </div>
    </div>
  )
}
