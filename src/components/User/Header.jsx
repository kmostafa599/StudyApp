import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Anchor from '../../elements/Anchor'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { signOut } from 'firebase/auth'

export const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [plusBox, setPlusBox] = useState(false);
    const { authedUser, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(authedUser)
    const handleLogout = async () => {
        await updateDoc(doc(db, 'users', authedUser.uid), {
            isOnline: false,
        })
        await signOut(auth)
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }

    return (
        <header className="py-1 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img src="" alt="" width={140} />
                    </div>
                    <div className="hidden md:block">
                            {
                                location.pathname.includes("admin") ? (
                                    <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/admin/dashboard">
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === "/admin/dashboard"
                                                    || location.pathname === "/admin/dashboard/"
                                                }
                                            >
                                                Profile
                                            </Anchor>
                                        </Link>
                                        <Link to={`/user/chat/${authedUser.uid}`}>
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === `/user/chat/${authedUser.uid}`
                                                    || location.pathname.startsWith(`/user/chat/${authedUser.uid}/`)
                                                }
                                            >
                                                Chats
                                            </Anchor>
                                        </Link>
                                        <Link to="/user/settings">
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === "/user/settings"
                                                    || location.pathname.startsWith("/user/settings")
                                                }
                                            >
                                                Settings
                                            </Anchor>
                                        </Link>
                                    </div>
                                ) :
                                <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/user/profile">
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === "/user/profile"
                                                    || location.pathname === "/user/profile/"
                                                }
                                            >
                                                Profile
                                            </Anchor>
                                        </Link>
                                        <Link to={`/user/chat/${authedUser.uid}`}>
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === "/admin/teams"
                                                    || location.pathname.startsWith("/admin/team")
                                                }
                                            >
                                                Chats
                                            </Anchor>
                                        </Link>
                                        <Link to="/admin/settings">
                                            <Anchor bgBlack
                                                routeBorderActive={location.pathname === "/admin/settings"
                                                    || location.pathname.startsWith("/admin/settings")
                                                }
                                            >
                                                Settings
                                            </Anchor>
                                        </Link>
                                    </div>

                            }


                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-gray-600 text-lg text-white"></i>
                        </Link>
                        <Link to="/user/dashboard/notifications">
                            <i className="fa-solid hover:text-gray-600 fa-bell text-lg text-white"></i>
                        </Link>
                        <div className='flex items-center flex-wrap'>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-full cursor-pointer' onClick={() => setPlusBox(!plusBox)}>

                                <i className='fa fa-solid fa-plus text-black'></i>
                                {
                                    plusBox && <div className='absolute flex flex-col select-none text-center w-32 h-30 top-10 right-5 bg-[#F1F4F8] rounded-lg shadow-lg z-40'>
                                        <Link to="/user/profile" className='text-black py-2 hover:text-red-500'>Profile</Link>
                                        <Link to="/admin/addfunds" className='text-black py-2 hover:text-red-500'>Invite User</Link>
                                        <div onClick={handleLogout}>Logout</div>
                                    </div>
                                }

                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="broken" className="shadow border-none object-cover" />
                            </div>
                        </div>

                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center px-2 py-1 rounded-md focus:outline-none hover:border hover:border-gray-500 transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <i className="fa-solid hover:text-white fa-bars text-xl"></i>
                        </button>
                    </div>
                    <div
                        className='md:hidden rounded-full h-10 w-10 bg-white flex items-center justify-center cursor-pointer relative'
                        onClick={() => setPlusBox(!plusBox)}
                    >
                        <i className='fa fa-solid fa-plus text-black'></i>
                        {
                            plusBox && <div className='absolute flex flex-col select-none text-center w-32 h-40 top-12 right-0 bg-[#F1F4F8] rounded-lg shadow-lg z-40'>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Invite User</Link>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Add Funds</Link>
                                <Link to="/admin/dashboard/user/create" className='text-black py-2 hover:text-red-500'>Create User</Link>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Create Team</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden transition-all" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <Link to="/admin/dashboard">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Dashboard
                            </button>
                        </Link>
                        <Link to="/admin/teams">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Teams
                            </button>
                        </Link>
                        <Link to="/admin/settings">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Settings
                            </button>
                        </Link>
                        <Link to="/admin/wallets">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Wallets
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-6 pl-6 pb-4">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-white text-lg text-gray-400"></i>
                        </Link>
                        <Link to="/user/dashboard/notifications">
                            <i className="fa-solid fa-bell text-lg text-gray-400 hover:text-white"></i>
                        </Link>
                        <div className='flex items-center flex-wrap'>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="broken" className="shadow border-none object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}
