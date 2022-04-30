import React from 'react'

const SectionTwo = () => {
    return (
        <div>
            <section className="bg-black text-white sectionSize">
                <div>
                    <h2 className="secondaryTitle bg-underline2 bg-100%">Improve your skills</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 mx-8 flex flex-col items-center my-4">
                        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                            1
                        </div>
                        <h3 className="font-montserrat font-medium text-xl mb-2">Eat</h3>
                        <p className="text-center font-montserrat">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="flex-1 mx-8 flex flex-col items-center my-4">
                        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                            2
                        </div>
                        <h3 className="font-montserrat font-medium text-xl mb-2">Sleep</h3>
                        <p className="text-center font-montserrat">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="flex-1 mx-8 flex flex-col items-center my-4">
                        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                            3
                        </div>
                        <h3 className="font-montserrat font-medium text-xl mb-2">Rave</h3>
                        <p className="text-center font-montserrat">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionTwo