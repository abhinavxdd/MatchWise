import React, { useState } from 'react'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="navbar shadow-sm" style={{ backgroundColor: '#2d2d2d' }}>
            <div className="flex-1">
                <a
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#2d2d2d] text-white text-2xl font-semibold rounded-lg hover:bg-[#2d2d2d] active:bg-[#2d2d2d] focus:outline-none transition-none"
                >
                    MatchWise
                </a>
            </div>
            <div className="flex-none relative">
                <button
                    className="btn btn-square btn-ghost text-white hover:bg-transparent"
                    onClick={() => setDropdownOpen((open) => !open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                        <a
                            href="https://github.com/abhinavxdd/MatchWise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abh1navvv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            LinkedIn
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar