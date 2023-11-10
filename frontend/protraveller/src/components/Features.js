import React, { useEffect } from "react"
import ext from "../images/ept.png"
import confident from "../images/confident.png"
import adventure from "../images/adventure.png"
import respect from "../images/respect.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <section className="flex background justify-center ">
            <div className="grid grid-cols-2 md:px-40 px-10  md:grid-cols-2 lg:grid-cols-4 gap-4 -top-10 -translate-y-12">
                <div className="flex flex-col items-center gap-4 px-8 py-8 background border border-color border-4 rounded-2xl">
                    <img src={ext} alt="" className="w-18 h-16" style={{ filter: 'brightness(0) invert(1)' }} />
                    <h2 className="text-2xl font-semibold text-center text-white playfair">Local <br /> Expertise</h2>
                    <p className="text-center text-white playfair">​Uncover hidden gems<br /> with insights from local<br /> guides.</p>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 py-8 background border border-color border-4 rounded-2xl">
                    <img src={confident} alt="" className="w-18 h-16" style={{ filter: 'brightness(0) invert(1)' }} />
                    <h2 className="text-2xl font-semibold text-center text-white playfair">​​Explore<br /> Confidently</h2>
                    <p className="text-center text-white playfair">​​Travel with confidence<br />  using tips from<br /> experienced adventurers.</p>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 py-8 background border border-color border-4 rounded-2xl">
                    <img src={adventure} alt="" className="w-18 h-16" style={{ filter: 'brightness(0) invert(1)' }} />
                    <h2 className="text-2xl font-semibold text-center text-white playfair">​​Affordable <br /> Adventures</h2>
                    <p className="text-center text-white playfair"> ​Travel smart and find the<br /> best deals</p>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 py-8 background border border-color border-4 rounded-2xl">
                    <img src={respect} alt="" className="w-18 h-16" style={{ filter: 'brightness(0) invert(1)' }} />
                    <h2 className="text-2xl font-semibold text-center text-white playfair">​Respect & <br /> Connect</h2>
                    <p className="text-center text-white playfair">​​Learn to engage<br />respectfully with different<br /> cultures.</p>
                </div>
            </div>
        </section>
    )
}