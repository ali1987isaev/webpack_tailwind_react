import React, { useEffect, useState } from 'react'
import tabImg1 from './images/illustration-features-tab-1.svg'
import tabImg2 from './images/illustration-features-tab-2.svg'
import tabImg3 from './images/illustration-features-tab-3.svg'
import Tabs from './tabs'
import Faq from './faq'

const allTabs = [
  {
    img: tabImg1,
    type: "Simple Bookmarking",
    title: "Bookmark in one click",
    copy: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    ctaText: "More Info",
    ctaLink: "#",
  },
  {
    img: tabImg2,
    type: "Speedy Searching",
    title: "Intelligent search",
    copy: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    ctaText: "More Info",
    ctaLink: "#",
  },
  {
    img: tabImg3,
    type: "Easy Sharing",
    title: "Share your bookmarks",
    copy: "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
    ctaText: "More Info",
    ctaLink: "#",
  }
]

export default function Bookmark() {
  const [tab, setTab] = useState('Simple Bookmarking');

  return (
    <div className="container p-5 mx-auto">
      <Tabs tab={tab} setTab={setTab}/>

      <div>
        {!!allTabs.length && allTabs.map(({ type, title, copy, img, ctaText, ctaLink}) => (
          type === tab && <div key={type} className="flex flex-col-reverse gap-5 md:flex-row">
            <img src={img} alt={title} className="md:w-1/2" />
            <div className="md:flex-1">
              <h1 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">{title}</h1>
              <p className="max-w-md text-center text-grayishBlue md:text-left">{copy}</p>
              <a href={ctaLink}>{ctaText}</a>
            </div>
          </div>
        ))}
      </div>

      <Faq />
    </div>
  )
}
