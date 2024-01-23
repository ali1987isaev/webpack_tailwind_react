import React from 'react'

export default function Faq() {
  const acordionItems = [
    {
      title: "What is Bookmark?",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem nobis nulla vel voluptate tenetur, ad odit, in nisi numquam pariatur, animi iste libero expedita quidem ipsa fugit! Qui, similique!",
    },
    {
      title: "How can I request a new browser?",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem nobis nulla vel voluptate tenetur, ad odit, in nisi numquam pariatur, animi iste libero expedita quidem ipsa fugit! Qui, similique!",
    },
    {
      title: "Is ther a mobile app?",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem nobis nulla vel voluptate tenetur, ad odit, in nisi numquam pariatur, animi iste libero expedita quidem ipsa fugit! Qui, similique!",
    },
    {
      title: "What about other Chromium browsers",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem nobis nulla vel voluptate tenetur, ad odit, in nisi numquam pariatur, animi iste libero expedita quidem ipsa fugit! Qui, similique!",
    }
  ]
  return (
    <div className="py-32">
      <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="max-w-lg px-6 mx-auto text-center text-gray-600">
        Here are some of our FAQs. If you have any other questions you'd
        like answered please feel free to email us.
      </p>
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {/* accordion item */}
          {!!acordionItems.length && acordionItems.map(({title, copy}) => (
          <div key={title} className="py-1 border-b outline-none group" tabIndex={1}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease group-hover:text-red-500">
                {title}
              </div>
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8"></path>
                </svg>
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-max max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                {copy}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
