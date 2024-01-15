import React from 'react'
import './style.css'
import ClipboardHero from './clipboard-hero'
import ClipboardSnippets from './clipboard-snippets'
import ClipboardFeatures from './clipboard-features'
import ClipboardAnywhere from './clipboard-anywhere'
import ClipboardSupercharge from './clipboard-supercharge'
import ClipboardBottom from './clipboard-bottom'
import ClipboardFooter from './clipboard-footer'

export default function Clipboard() {
  return (
    <div className="clipboard-container text-strongCyan font-sans bg-no-repeat bg-contain">
      <ClipboardHero />
      <ClipboardSnippets />
      <ClipboardFeatures />
      <ClipboardAnywhere />
      <ClipboardSupercharge />
      <ClipboardBottom />
      <ClipboardFooter />
    </div>
  )
}
