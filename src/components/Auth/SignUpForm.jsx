import React from 'react'
import PageTitle from '../../elements/PageTitle';
import { Form, Formik, Field } from 'formik';
import CustomFormikInput from '../../elements/customFormikInput';
import { loginValidation } from '../../utils/FormValidation';
import { Link, useNavigate } from 'react-router-dom';
import Submit from '../../elements/Submit';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { InputLabel, MenuItem, Select } from '@mui/material';

const SignUpForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    // const formik = useFormik({
    //     initialValues:{

    //     },

    //     onSubmit: values =>{
    //         handleSubmit(values)
    //     }
    // })


    const handleSubmit = async (values) => {
        console.log(values);
        // login(loginState.email, loginState.password);
        try {
            const result = await createUserWithEmailAndPassword(auth, values.email, values.password)
            console.log(result.user)
            dispatch({ type: 'LOGIN', payload: result.user })
            await setDoc(doc(db, 'users', result.user.uid), {
                uid: result.user.uid,
                name: values.name,
                email: values.email,
                role: values.role,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,

            });
            console.log(result)
            navigate(`/user/chat/${result.user.uid}`)


        } catch (err) {
            console.log(err)
        }



    };
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                name: "",
                role: "",
            }}
            validationSchema={loginValidation}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {(formik) => (
                <section>
                    <PageTitle>Sign Up</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="name" name="name" label="Name" icons="fa-solid fa-envelope" placeholder="Enter Your Name" />
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role"
                            name='role'
                            value={formik.values.role}
                            label="Role"
                            onChange={formik.handleChange}
                            color="primary"
                            style={{marginBottom:'1rem',width:"100%",border:"1px solid black"}}
                        >
                            <MenuItem value='writer'>Writer</MenuItem>
                            <MenuItem value='student'>Student</MenuItem>
                        </Select>
                        <Field as={CustomFormikInput} type="email" name="email" label="Email" icons="fa-solid fa-envelope" placeholder="Enter email" />
                        <Field as={CustomFormikInput} type="password" name="password" label="Password" icons="fa-solid fa-lock" placeholder="Enter password" />
                        <Link to="/auth/restore" className="text-sm capitalize font-medium">Forgot password?</Link><br />
                        <Submit classes="mt-10">Sign Up</Submit>
                    </Form>
                </section>
            )}
        </Formik>
    )
}

export default SignUpForm