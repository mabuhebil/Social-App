import { div, p } from 'framer-motion/client'
import React from 'react'

export default function VaildaitionMessage({field , isTouched}) {
  return (
    <>
      {field&& isTouched && <div className="text-red-600">{field.message}</div>}
    </>
  )
}
