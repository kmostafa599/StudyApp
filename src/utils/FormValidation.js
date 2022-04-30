import * as Yup from 'yup';

export const loginValidation = Yup.object({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 charaters')
        .required('Password is required')
});