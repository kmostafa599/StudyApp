import React from 'react'
import RightSection from '../elements/RightSection'
import LoginForm from '../components/Auth/LoginForm'
const Login = ({title}) => {
    return (
        <div>
            <section>
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex flex-col items-center justify-center lg:w-[65%] md:w-[55%] 
                        w-full md:py-0 py-24">
                        <LoginForm title={title}/>
                    </div>
                    <RightSection />
                </div>
            </section>
        </div>
    )
}

export default Login