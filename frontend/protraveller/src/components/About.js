import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <section id="about" className="background pt-10 pb-20 md:px-40 px-10 justify-center items-center flex">
            <div>
                <h1 className='font-bold cream text-6xl playfair text-start'>About Us</h1>
                <div className="bg-cream self-center p-8 rounded-lg mt-4 max-w-6xl">
                    <h1 className='font-semibold text-2xl 2xl:text-4xl playfair text-start'>-Protraveller-</h1>
                    <p className="text-justify text-lg playfair">
                        Protraveller, a dynamic web application, was born out of a shared passion for travel and
                        a desire to create a vibrant space where individuals could connect through their diverse
                        travel experiences. The project was inspired by the belief that every journey tells a unique story,
                        and by sharing these stories, we can enrich the adventures of fellow travelers.
                        <p className="mt-2">
                            The inception of Protraveller wasn't merely a response to Holberton's project requirements; it was a collective
                            realization of the power travel narratives hold. Our journey began with a vision to cultivate a community where
                            travel enthusiasts could share the intricate details of their explorations, providing valuable insights and
                            fostering a sense of global camaraderie.
                        </p>
                    </p>
                    <h1 className='font-semibold text-2xl 2xl:text-4xl playfair text-start mt-8'>-Timeline-</h1>
                    <p className="text-justify text-lg playfair">
                        <strong>Inspiration Strikes:</strong> The idea took shape as we recognized the need for a dedicated platform for travel aficionados.
                        <br />
                        <p className="mt-2">
                            <strong>Design and Development:</strong> <a className="choc-brown" href="https://github.com/mitchellshera">Mitchell Watera</a>,
                            our backend maestro, skillfully crafted the foundations with Django, while
                            <a className="choc-brown" href="https://github.com/vcky4"> Victor Ubong Okon</a>, the creative force behind the frontend,
                            brought the project to life using React JS. Iterative Refinement: We continuously refined Protraveller to ensure an
                            optimal user experience, embracing feedback and incorporating improvements.
                        </p>
                        <p className="mt-2">
                            This project serves as a Portfolio Project for Holberton School, showcasing our technical skills and collaborative
                            efforts. Feel free to explore our <a className="choc-brown" href="https://github.com/mitchellshera/ProTraveller">GitHub repository </a>
                            to delve into the intricacies of our codebase.
                        </p>
                    </p>
                    <h1 className='font-semibold text-2xl 2xl:text-4xl playfair text-start mt-8'>-Meet the Developers-</h1>
                    <p className="text-justify text-lg playfair">
                        <strong>Mitchell Watera</strong> Backend Developer
                        <ul className="list-disc ml-8">
                            <li><a className="choc-brown" href="https://www.linkedin.com/in/mitchell-maina-b5b834170/">LinkedIn</a></li>
                            <li><a className="choc-brown" href="https://github.com/mitchellshera">GitHub</a></li>
                            <li><a className="choc-brown" href="https://twitter.com//MitchellWachera">Twitter</a></li>
                        </ul>
                        <strong>Victor Ubong Okon</strong> Frontend Developer
                        <ul className="list-disc ml-8">
                            <li><a className="choc-brown" href="https://www.linkedin.com/in/vicksoson/">LinkedIn</a></li>
                            <li><a className="choc-brown" href="https://github.com/Vcky4">Github</a></li>
                            <li><a className="choc-brown" href="https://twitter.com/vicksoson">Twitter</a></li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    )
}