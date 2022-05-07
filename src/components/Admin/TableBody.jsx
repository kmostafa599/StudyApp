import { Link } from "react-router-dom";
import Button from "../../elements/Button";

export default function TableBody({ users,filter }) {
    if(filter){
        users = users.filter(u=>u.team === filter)
    }
    
    return (
        <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {users.length > 0 ? (users.map((person) => (
                <tr key={person.id} className={`${person.bonus ? "font-bold" : "font-light"}`}>
                    <td className="px-2 py-6 whitespace-nowrap">
                        {person.id}
                    </td>
                    <td className="px-6 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                            </div>
                            <div className="ml-4">
                                <div className="text-gray-900">{person.name}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 whitespace-nowrap ">
                        {person.team}
                    </td>
                    <td className="px-6 whitespace-nowrap">
                        <div className="text-gray-500">{person.votes}</div>
                    </td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-bold">£{person.bonus}</td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-medium">{person.bonus}</td>
                    <td className="px-0 py-5 whitespace-nowrap text-right font-medium flex items-center gap-2">
                        <Button>
                            <Link to={`/chat/${person.id}`}>
                            <i className="fa-solid fa-xmark"></i> <span className='sm:block hidden'>details</span>
                            </Link>
                        </Button>
                        <Button>
                            <Link to={`/chat/${person.id}`}>
                            <i className="fa-solid fa-xmark"></i> <span className='sm:block hidden'>Open chat</span>
                            </Link>
                        </Button>
                    </td>
                </tr>
            ))) : (
                <tr>
                    <td colSpan="6" className="px-6 py-4 text-center">
                        <div className="text-gray-500">Nothing to show</div>
                    </td>
                </tr>
            )}
        </tbody>
    )
}
