import React from 'react'
import PageTitle from '../../elements/PageTitle';
import { Form, Formik, Field } from 'formik';
import CustomFormikInput from '../../elements/customFormikInput';
import { loginValidation } from '../../utils/FormValidation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Submit from '../../elements/Submit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

const LoginForm = ({ title }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { dispatch } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (values) => {
        console.log(values);
        setLoading(true)
        // login(loginState.email, loginState.password);
        try {
            const result = await signInWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            // console.log(user)

            // })
            console.log(result)
            await updateDoc(doc(db, 'users', result.user.uid), {
                isOnline: true
            })
            console.log(result)
            dispatch({ type: 'LOGIN', payload: result.user })
            if (location.pathname === '/auth/admin/login') {
                navigate(`/admin/users`)
            }
            else{
                navigate(`/user/chat/${result.user.uid}`)

            }
        } catch (error) {
            console.log(error)

        }

    };
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {(formik) => (
                <section>
                    <PageTitle>{title}</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="email" name="email" label="Email" icons="fa-solid fa-envelope" placeholder="Enter email" />
                        <Field as={CustomFormikInput} type="password" name="password" label="Password" icons="fa-solid fa-lock" placeholder="Enter password" />
                        <Link to="/auth/restore" className="text-sm capitalize font-medium">Forgot password?</Link><br />
                        <Submit classes="mt-10">Sign In</Submit>
                        {loading ? <div>Loading.....</div> : null}
                    </Form>
                </section>
            )}
        </Formik>
    )
}

export default LoginForm