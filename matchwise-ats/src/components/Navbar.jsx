import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar shadow-sm" style={{ backgroundColor: '#5856D6' }}>
            <div className="flex-1">
                <a
                    href="/"
                    className="inline-block px-4 py-2 bg-[#5856D6] text-white text-xl font-semibold rounded-lg hover:bg-[#5856D6] active:bg-[#5856D6] focus:outline-none transition-none"
                >
                    MatchWise
                </a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost text-white hover:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
