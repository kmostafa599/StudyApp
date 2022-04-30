import Button from "../../elements/Button";

export default function TableBody({ users }) {
    return (
        <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {users.length > 0 ? (users.map((person) => (
                <tr key={person.id} className={`${person.suggestedProposal ? "font-bold" : "font-light"}`}>
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
                        <div className="text-gray-500">{person.suggestedProposal.votes.length}</div>
                    </td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-bold">£{person.suggestedProposal.bonus}</td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-medium">{person.bonus}</td>
                    <td className="px-0 py-5 whitespace-nowrap text-right font-medium flex items-center gap-2">
                        {
                            person.approved &&
                            <>
                                <Button>
                                    <i className="fa-solid fa-xmark"></i><span className='sm:block hidden'>Decline</span>
                                </Button>
                                <Button>
                                    <i className="fa-solid fa-check"></i> <span className='sm:block hidden'>Approve</span>
                                </Button>
                            </>
                        }
                        {
                            person.suggestedProposal.length<users.length && //voting
                            <>
                                <Button>
                                    <i className="fa-solid fa-xmark"></i> <span className='sm:block hidden'>No</span>
                                </Button>
                                <Button>
                                    <i className="fa-solid fa-check"></i> <span className='sm:block hidden'>Yes</span>
                                </Button>
                            </>
                        }
                        {
                            person.suggestedProposal === users.length &&
                            <>
                                <Button disabled>
                                    <span className='px-3 py-1 bg-black text-white rounded-full'>{person.votes}</span><span className='sm:block hidden'>No</span>
                                </Button>
                                <Button disabled>
                                    <span className='px-3 py-1 bg-black text-white rounded-full'>{person.votes}</span><span className='sm:block hidden'>Yes</span>
                                </Button>
                            </>
                        }
                        {
                            person.declined &&
                            <>
                                <Button disabled>
                                    <i className="fa-solid fa-xmark"></i> <span className=' font-bold'>Declined</span>
                                </Button>
                            </>
                        }
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
