import React from "react"
import recipesImg from "../../assets/recipes.jpeg"

export default function EmailSubscribe() {
  return (
    <div className="section-container bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            className="object-cover rounded-xl h-80 transform duration-200 hover:scale-105 hover:rounded-xl md:w-52 md:h-64 md:rounded-l-xl md:rounded-r-none"
            src={recipesImg}
            alt="test"
          />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness newsletter.
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                className="py-2 px-4 text-center text-white bg-zinc-800 border 
                border-zinc-600 placeholder:text-center placeholder:text-xs focus:outline-none
                md:text-left placeholder:md:text-left"
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 duration-500 hover:bg-lime-700 hover:text-white" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
