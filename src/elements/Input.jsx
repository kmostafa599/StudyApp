export default function Input({ label, type, name, icons, fullWidth, placeholder }) {
    return (
        <div className={`flex flex-col justify-center ${fullWidth ? "w-full lg:col-span-2 col-span-1" : "w-[320px] sm:w-[400px]"} py-[.5rem] px-[14px] text-sm border border-input rounded-md mb-4`}>
            <label className="pb-1 capitalize text-[#B5B8BB]">{label}</label>
            <div className="flex items-center">
                <i className={`${icons} pr-2`}></i>
                <input type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                    className="border-0 outline-0 transition-colors p-1 w-full focus:bg-gray-100 rounded-md placeholder-gray-600" />
            </div>
        </div>
    )
}
