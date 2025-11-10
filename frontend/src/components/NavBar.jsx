import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar({userData}) {

    let nameSymbol = userData?.name?.charAt(0)
    let lastnameSymbol = userData?.name?.split(" ")[1]?.charAt(0)

    return (
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white px-6 py-4 shadow-xl">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="text-xl font-extrabold tracking-tight drop-shadow-md select-none">
                    AuthDRF
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <Link to = "/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                    {
                        userData?.id?
                        <>
                            <Link to = "/products" className="text-white/90 hover:text-white transition-colors">Products</Link>
                            <Link to = "/profile" className="text-white/90 hover:text-white transition-colors">Profile</Link>
                            <div id="Avtar" className="w-9 h-9 rounded-full bg-white text-indigo-700 flex items-center justify-center font-semibold shadow-md">
                                {nameSymbol}{lastnameSymbol}
                            </div>
                        </>
                        :
                        <Link to = "/auth" className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition">
                            Login
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}