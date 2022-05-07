export default function TopTitle({ title, users }) {
    return (
        <div>
            <h1 className="md:text-[36px] text-[36px] font-light capitalize md:leading-normal leading-[3rem] md:pb-0 pb-2">{title}</h1>
            {users && <p>Total Users: {users}</p>}
        </div>
    )
}
