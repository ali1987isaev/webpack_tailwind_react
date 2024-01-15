import React from 'react'
import google from './images/logo-google.png'
import imb from './images/logo-ibm.png'
import microsoft from './images/logo-microsoft.png'
import hp from './images/logo-hp.png'
import vectorGraphics from './images/logo-vector-graphics.png'

const superchargeItems = [
  {
    title: 'Create Blacklists',
    copy: 'Easily search your snippets by content, category, web address, application, and more.',
    icon: <svg width="44" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="#9EABB2" fillRule="nonzero"><path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z"/><path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z"/><path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z"/></g></svg>
  },
  {
    title: 'Plain Text Snippets',
    copy: 'Remove unwanted formatting from copied text for a consistent look.',
    icon: <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z" fill="#9EABB2" fillRule="nonzero"/></svg>
  },
  {
    title: 'Sneak Preview',
    copy: 'Quick preview of all snippets on your Clipboard for easy access.',
    icon: <svg width="50" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M49.059 14.072c-2.585-4.227-6.06-7.623-10.424-10.188C34.27 1.318 29.66.035 24.806.035c-4.854 0-9.464 1.283-13.829 3.849C6.612 6.449 3.137 9.845.554 14.072c-.37.646-.554 1.283-.554 1.91 0 .628.185 1.265.554 1.91 2.583 4.227 6.058 7.624 10.423 10.189 4.365 2.565 8.975 3.847 13.83 3.847 4.853 0 9.463-1.277 13.828-3.833 4.365-2.557 7.84-5.957 10.424-10.202.369-.646.553-1.283.553-1.91 0-.628-.184-1.265-.553-1.911zM18.867 6.5c1.652-1.652 3.631-2.478 5.939-2.478.369 0 .683.13.941.388.258.258.388.572.388.941 0 .37-.13.683-.387.941a1.28 1.28 0 01-.942.388c-1.587 0-2.944.563-4.07 1.689-1.126 1.126-1.688 2.482-1.688 4.07 0 .369-.13.683-.388.941a1.28 1.28 0 01-.941.388c-.37 0-.683-.13-.942-.388a1.282 1.282 0 01-.388-.942c0-2.306.827-4.286 2.478-5.938zm17.969 18.522c-3.701 2.242-7.71 3.364-12.03 3.364-4.319 0-8.329-1.121-12.03-3.364-3.7-2.243-6.777-5.256-9.232-9.04 2.805-4.356 6.321-7.614 10.548-9.773a12.099 12.099 0 00-1.689 6.23c0 3.414 1.214 6.334 3.64 8.762 2.428 2.427 5.349 3.64 8.763 3.64 3.415 0 6.335-1.213 8.762-3.64 2.428-2.427 3.641-5.348 3.641-8.763 0-2.233-.563-4.31-1.689-6.229 4.227 2.16 7.743 5.418 10.548 9.773-2.454 3.784-5.532 6.797-9.232 9.04z" fill="#9EABB2" fillRule="nonzero"/></svg>
  }
]

const refsImages = [google, imb, microsoft, hp, vectorGraphics]

export default function ClipboardSupercharge() {
  return (
    <div className="max-w-6xl mx-auto text-center my-20 px-10">
      <div className="">
        <h3 className="clipboard-h3">Supercharge your workflow</h3>
        <p className="clipboard-body">
        We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-center gap-16 mt-16 md:gap-12 md:flex-row">
          {
            !!superchargeItems.length && superchargeItems.map(({title, copy, icon}) => (
              <div className="text-center flex flex-col items-center justify-center max-w-md" key={title}>
                <span>{icon}</span>
                <h5 className="clipboard-h5 mt-12">{title}</h5>
                <p className="clipboard-body mt-4">{copy}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-wrap gap-16 my-44 md:flex-row">
        {!!refsImages.length && refsImages.map((logo, idx) => (
          <img className="" key={idx} src={logo} alt="logo" />
        ))}
      </div>
    </div>
  )
}
