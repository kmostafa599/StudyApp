import Button from "../../elements/Button";
import Container from "../../elements/Container";
import TopTitle from "../../elements/TopTitle";
import PersonInfo from "./PersonInfo";
import { Link } from "react-router-dom";


const info = {
    business: "SaaS Supreme",
    role: "Writer",
    email: "alma.lawson@example.com",
    phone: "(44) 555-0115-0202",
    city: "Swansea",
    address: "32 Swansea road, Swansea, SA1 4774",
}

const people = [
    {
        id: 1,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 2,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 3,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 4,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 5,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    }
]

export default function Profile() {
    // const users = useSelector(state=>state.users)
    // const {authedUser} = useAuth()
    // const user = users.filter(p => p.id === authedUser.id)
    // const handleDelete = () =>{
        
    // }
    return (
        <section className="py-8">
            <Container>
                <article className="flex items-center justify-between flex-wrap">
                    <TopTitle title="Cameron Calder" />
                    <div className="flex items-center gap-4">
                        
                        <Link to="/user/edit">
                            <Button>
                                <i className="fa fa-solid fa-pencil-alt"></i>
                                <span className="sm:inline-block hidden">Edit Account</span>
                            </Button>
                        </Link>
                        <Link to="/profile/bonus">
                            <Button >
                                <i className="fa fa-solid fa-trash"></i>
                                <span className="sm:inline-block hidden">Delete</span>

                            </Button>
                        </Link>
                    </div>
                </article>

                
                   

                
                <PersonInfo user={info} />
            </Container>
        </section>
    )
}
