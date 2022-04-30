import React from 'react'
import { Link } from 'react-router-dom'
import Highlight1 from '../assets/Highlight1.svg'
import Highlight2 from '../assets/Highlight2.svg'
import Notebook from '../assets/Notebook1.png'

const MainSection = () => {
    return (
        <div>
            <section
                className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
                <div className="md:flex-1 md:mr-10">
                    <h1 className="font-pt- serif text-5xl font-bold mb-7">
                        World class                         <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
                            Education
                        </span>
                    </h1>
                    <p className="font-pt-serif font-normal mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
                        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
                    </p>
                    <div className="font-montserrat">
                        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                            <Link to='/auth/signup'>
                            Join now
                            </Link>
                            
                        </button>
                        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                            Secondary action
                        </button>
                    </div>
                </div>
                <div className=" flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                    <div className="relative">
                        <img src={Highlight1} alt="" className="absolute -top-16 -left-1" />
                    </div>
                    <img className='hover:scale-125 hover:rotate-12 transform transition-transform duration-700 ' src={Notebook} alt="Macbook" />
                    <div className="relative">
                        <img src={Highlight2} alt="" className="absolute -bottom-10 -right-1" />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default MainSection