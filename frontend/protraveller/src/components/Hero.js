import React from 'react'
import hero from '../images/hero.webp'
import burger from '../images/munchies.png'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
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
      <div className='flex flex-col items-start justify-center gap-4 px-5 md:px-16 py-40 2xl:py-96'>
        <div className='2xl:mx-auto'>
          <div className=''>
            <h1 className='playfair text-6xl 2xl:text-9xl italic hero-h1 animate-bounce'>Welcome to Cakkie</h1>
            <h4 className='font-bold cream text-2xl 2xl:text-6xl playfair italic my-1 lg:px-5 animate-pulse'>Unleash the Sweet Sensation</h4>
          </div>

          <div className='my-5 max-w-xl' >
            <p className='text-lg 2xl:text-3xl cream tracking-wide open-sans pr-8'>Step into a realm where cake enthusiasts and businesses converge, indulging in the exquisite world of cakes and confectionery craftsmanship.</p>
          </div>
          <button className='button-background px-20 font-semibold py-2 rounded cream'><Link to="#waitlist" smooth>Join Waitlist</Link></button>
        </div>
      </div>
      <div className='absolute bottom-5 right-5 md:right-10'>
        {isOpen && <div className='relative flex flex-col gap-5 items-center md:justify-center' data-aos="fade-up">
          <a href="https://www.instagram.com/cakkiefoods" target='_blank' rel="noreferrer"><img src={instagram} alt="" className='cursor-pointer w-6' /></a>
          <a href="https://web.facebook.com/CakkieFoods" target='_blank' rel="noreferrer"><img src={facebook} alt="" className='cursor-pointer w-6' /></a>
          <a href="https://www.linkedin.com/company/cakkie/" target='_blank' rel="noreferrer"><img src={linkedin} alt="" className='cursor-pointer w-6' /></a>
          <a href="https://twitter.com/CakkieTeam" target='_blank' rel="noreferrer"><img src={twitter} alt="" className='cursor-pointer w-6' /></a>
        </div>}

        <div className='relative cursor-pointer z-10' onClick={toggleImage}>
          <img src={burger} alt="" className='h-20 md:h-full pointer-events-none z-10' />
        </div>
      </div>
    </section>
  )
}
