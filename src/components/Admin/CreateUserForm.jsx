import Input from '../../../elements/Input'

export default function CreateUserForm({ handleChange, handleSubmit, values }) {
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            <Input label="First Name"
                    type="text"
                    name="firstName"
                    icons="fa-solid fa-user"
                    placeholder="First name"
                    handleChange
                    value={values.firstName}
                />
                <Input label="Last Name"
                    type="text"
                    name="lastName"
                    icons="fa-solid fa-user"
                    placeholder="Last name"
                    value={values.lastName}

                />
                <Input label="Phone"
                    type="number"
                    name="phone"
                    icons="fa-solid fa-phone"
                    placeholder="Phone"
                    value={values.phone}

                />
                <Input label="Email"
                    type="email"
                    name="email"
                    icons="fa-solid fa-envelope"
                    placeholder="Your email"
                    value={values.email}

                />
                <Input label="Job Title"
                    type="text"
                    name="jobTitle"
                    icons="fa-solid fa-user-doctor"
                    placeholder="Your Job title"
                    value={values.jobTitle}

                />
                <Input label="Team"
                    type="text"
                    name="teamName"
                    icons="fa-solid fa-briefcase"
                    placeholder="Your team"
                    value={values.teamName}

                />
                <Input label="Business"
                    type="text"
                    name="business"
                    icons="fa-solid fa-business-time"
                    placeholder="Cardiff Dougho"
                    value={values.business}

                />
                <Input label="City"
                    type="text"
                    name="city"
                    icons="fa-solid fa-city"
                    placeholder="London"
                    value={values.city}

                />
                <Input label="Address"
                    type="text"
                    name="address"
                    icons="fa-solid fa-location-dot"
                    fullWidth
                    placeholder="Your address"
                    value={values.address}

                />
                <Input label="wallet"
                    type="text"
                    name="wallet"
                    icons="fa-solid fa-wallet"
                    fullWidth
                    placeholder="0x22bD...BA4B"
                    value={values.wallet}

                />
                <Input type="password"
                    name="password"
                    label="Password"
                    icons="fa-solid fa-lock"
                    placeholder="Password"
                    value={values.password}

                />
                <Input type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    icons="fa-solid fa-lock"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}

                />
            </div>
        </form>
    )
}
