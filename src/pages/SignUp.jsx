import React from 'react'
import SignUpForm from '../components/Auth/SignUpForm'
import RightSection from '../elements/RightSection'

const SignUp = () => {
  return (
    <div>
            <section>
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex flex-col items-center justify-center lg:w-[65%] md:w-[55%] 
                        w-full md:py-0 py-24">
                        <SignUpForm/>
                    </div>
                    <RightSection />
                </div>
            </section>
        </div>
  )
}

export default SignUp