import React from 'react'

export default function DevImg({ containerStyles, imgStyles }: { containerStyles: string; imgStyles: string }) {
  return (
    <div className={`${containerStyles}`}>
      <div className={`${imgStyles}`}></div>
    </div>
  )
}
