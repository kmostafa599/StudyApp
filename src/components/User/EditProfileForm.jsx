import { useFormik } from 'formik'
import Input from '../../elements/Input'

export default function EditProfileForm({ handleChange, handleSubmit, }) {
    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
            city: "",
        },
        onSubmit:values =>{

        }
    })
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <Input label="First Name"
                    type="text"
                    name="firstName"
                    icons="fa-solid fa-user"
                    placeholder="First name"
                    handleChange
                />
                <Input label="Last Name"
                    type="text"
                    name="lastName"
                    icons="fa-solid fa-user"
                    placeholder="Last name"

                />
                
                <Input label="Email"
                    type="email"
                    name="email"
                    icons="fa-solid fa-envelope"
                    placeholder="Your email"

                />
                
                <Input label="City"
                    type="text"
                    name="city"
                    icons="fa-solid fa-city"
                    placeholder="London"

                />
            
            </div>
        </form>
    )
}
