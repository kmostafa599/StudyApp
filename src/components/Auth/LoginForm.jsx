import React from 'react'
import PageTitle from '../../elements/PageTitle';
import { Form, Formik, Field } from 'formik';
import CustomFormikInput from '../../elements/customFormikInput';
import { loginValidation } from '../../utils/FormValidation';
import { Link, useNavigate } from 'react-router-dom';
import Submit from '../../elements/Submit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)



    const handleSubmit = (values) => {
        console.log(values);
        // login(loginState.email, loginState.password);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                dispatch({type:'LOGIN',payload:user})
                navigate('/user/chat')
            })
            .catch((error) => {
                console.log(error)
            });

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
                    <PageTitle>Sign In</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="email" name="email" label="Email" icons="fa-solid fa-envelope" placeholder="Enter email" />
                        <Field as={CustomFormikInput} type="password" name="password" label="Password" icons="fa-solid fa-lock" placeholder="Enter password" />
                        <Link to="/auth/restore" className="text-sm capitalize font-medium">Forgot password?</Link><br />
                        <Submit classes="mt-10">Sign In</Submit>
                    </Form>
                </section>
            )}
        </Formik>
    )
}

export default LoginForm