import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'

const menuItems = ['Vector','Illustrations','Images','Icons']
const galleryImages = [
  {
    image: image1,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  },
  {
    image: image2,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  }, 
  {
    image: image3,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  }, 
  {
    image: image4,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  }, 
  {
    image: image5,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  }, 
  {
    image: image6,
    copy1: 'Abstract pinting',
    copy2: '245 Likes - 35 Shares',
  }
]

function MenuItem({item}) {
  return(
    <div className="group">
      <a href="#">
        <p>{item}</p>
        <div className="mx-2 my-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
      </a>
    </div>
  )
}

function Menu() {
  return(
    <div className="flex flex-col items-center justify-center gap-3 md:gap-8 md:flex-row md:justify-end md:mb-24">
      {!!menuItems.length && menuItems.map(item => (
        <MenuItem key={item} item={item} />
      ))}
    </div>
  )
}

function Search() {
  return(
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div className="flex justify-between border-b">
        <input
          type="text"
          className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
          placeholder='Search'
        />
        <button className='' type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <button
        className='py-3 px-14 text-lg font-normal text-white bg-black border 
        border-black rounded-md shadow-xl duration-200 hover:bg-white hover:text-black'
        type="button"
      >
        Upload
      </button>
    </div>
  )
}

function GalleryItem({image, copy1, copy2, index}) {
  return(
    <div className="relative group">
      <img src={image} alt={`gallery-image--${index}`} />
      <div
        className="absolute bottom-0 left-0 right-0 py-2 px-4 text-white 
        duration-500 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100"
      >
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <p className="text-sm">{copy1}</p>
            <p className="text-xs">{copy2}</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  return(
    <div className="grid grid-cols-1 pag-4 md:grid-cols-3">
      {
        !!galleryImages.length && galleryImages.map((item, index) => (
          <GalleryItem key={`${item.copy1}--${index}`} index={index} {...item} />
        ))
      }
    </div>
  )
}

export default function ImageGallery() {
  return (
    <div className='section-container bg-cyan-50'>
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl">
        <Menu />
        <Search />
        <Gallery />
      </div>
    </div>
  )
}
