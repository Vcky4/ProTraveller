import React, { useEffect } from 'react'
import snow from '../images/snow.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Contact = () => {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggleImage = () => {
    //   setIsOpen(!isOpen)
    // }

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

    return (
        <section style={{ backgroundImage: `url(${snow})` }} className='relative bg-no-repeat bg-cover'>
            <div className='flex flex-col items-start gap-4 px-5 md:px-40 py-20 2xl:py-40 bg-stone-950/[.5]'>
                <div className='2xl:mx-auto justify-items-start grid'>
                    <h1 className='font-bold cream text-6xl 2xl:text-9xl playfair text-start '>Tours Nature <br />& Wildlife</h1>
                    <h3 className='text-xl 2xl:text-2xl cream text-start playfair mt-4 max-w-lg'>
                        Fly with who you want, stay wherever you want — now that's a dream holiday!
                    </h3>
                    <button className='rounded-full border px-20 font-semibold py-4 my-10 cream'><Link to="/signup" smooth>Get Started</Link></button>
                </div>
            </div>
        </section>
    )
}
