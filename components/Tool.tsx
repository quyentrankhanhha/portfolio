'use client'

import React from 'react'
import { motion } from 'framer-motion'

type ToolProps = {
  name: string
}

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

export default function Tool({ name }: ToolProps) {
  return (
    <motion.div
      className='mb-3 mr-2 inline-block rounded-md border-2 border-primary p-2 hover:bg-primary hover:text-white'
      variants={variants}
      initial='initial'
      animate='animate'
    >
      {name}
    </motion.div>
  )
}
