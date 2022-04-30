import React from 'react'
import { useState } from 'react'
import CaretRight from '../assets/logos/CaretRight.svg'

const Faq = () => {
    const [ one, setOne] = useState(false)
    const [ two, setTwo] = useState(false)
    const [ three, setThree] = useState(false)
    return (
        <div>
            <section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
                <div>
                    <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
                        FAQ
                    </h2>
                </div>

                <div onClick={()=>setOne(!one)} className="w-full py-4">
                    <div className="flex justify-between items-center">
                        <div question className="font-montserrat font-medium mr-auto">
                            Where can I get this HTML template?
                        </div>
                        <img  src={CaretRight} alt="" className={`transform transition-transform ${one?'rotate-90':''} `} />
                    </div>
                    <div answer className={`font-montserrat text-sm font-extralight pb-8 ${one?'':'hidden'}`}>
                        You can download it on Gumroad.com
                    </div>
                </div>
                <hr className="w-full bg-white" />

                <div onClick={()=>setTwo(!two)} className="w-full py-4">
                    <div className="flex justify-between items-center">
                        <div question className="font-montserrat font-medium mr-auto">
                            Is this HTML template free?
                        </div>
                        <img  src={CaretRight} alt="" className={`transform transition-transform ${two?'rotate-90':''} `} />
                    </div>
                    <div answer className={`font-montserrat text-sm font-extralight pb-8 ${two?'':'hidden'}`}>
                        Yes! For you it is free.
                    </div>
                </div>
                <hr className="w-full bg-white" />

                <div onClick={()=>setThree(!three)} className="w-full py-4">
                    <div className="flex justify-between items-center">
                        <div question className="font-montserrat font-medium mr-auto">
                            Am I awesome?
                        </div>
                        <img  src={CaretRight} alt="" className={`transform transition-transform ${three?'rotate-90':''} `} />
                    </div>
                    <div answer className={`font-montserrat text-sm font-extralight pb-8 ${three?'':'hidden'}`}>
                        Yes! No doubt about it.
                    </div>
                </div>
                <hr className="w-full bg-white" />

            </section>

        </div>
    )
}

export default Faq