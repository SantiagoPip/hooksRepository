import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({quote,character}) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0,height:0})

  useLayoutEffect(() => {
    const {height,width} = pRef.current.getBoundingClientRect()
    setBoxSize({width,height})
  }, [quote])

  return (
    <>
    <blockquote style={{display:'flex'}} className='blockquote text-end'>
    <p ref={pRef} className='mb-1'>{quote}</p>
    <hr />
    <footer className='blockquote-footer'>{character}</footer>
</blockquote>
    
    <code>{JSON.stringify(boxSize)}</code>
    <hr />
    </>
  )
}
