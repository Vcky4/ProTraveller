import React from 'react'
import hero from '../images/hero.jpg'
import rrr from '../images/rrr.png'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleImage = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <section style={{ backgroundImage: `url(${hero})` }} className='relative bg-no-repeat bg-cover'>
      <div className='flex flex-col items-center gap-4 px-5 md:px-16 py-20 2xl:py-40 bg-stone-950/[.5]'>
        <div className='2xl:mx-auto justify-items-center grid'>
          <h3 className='text-2xl 2xl:text-4xl cream text-center playfair'>Protraveller</h3>
          <img src={rrr} alt="" className='w-60 2xl:w-96 my-8' />
          <h1 className='font-bold cream text-6xl 2xl:text-9xl playfair text-center lg:px-5'>Wonderful tips</h1>
          <h3 className='text-xl 2xl:text-2xl cream text-center playfair mt-16'>
            Discover Your Journey, Live the Adventure - Protraveller
          </h3>
          <button className='rounded-full border px-20 font-semibold py-4 mt-24 mb-40 cream'><Link to="#waitlist" smooth>Get Started</Link></button> 
        </div>
      </div>
    </section>
  )
}
