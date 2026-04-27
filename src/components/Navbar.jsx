import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = [
    { name: "Home", href: "/", id: "hero" },
    { name: "About", href: "/about", id: "about" },
    { name: "Skills", href: "/skills", id: "skills" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/contact", id: "contact" }
]

const Navbar = () => {
    const [Scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setScroll(true);
            else setScroll(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- YE FUNCTION ZAROORI HAI ---
    const handleScrollTo = (id) => {
        setMenuOpen(false); // Menu band karein
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${Scroll ? "bg-[#0a0e1a]/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg" : "bg-transparent"}`}>
            <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 h-16">
                {/* Logo */}
                <Link to="/" onClick={() => handleScrollTo('hero')} className="font-bold text-xl text-orange-500 tracking-tight flex items-center">
                    Portfolio <span className='text-white ml-1'>Alishba</span>
                </Link>

                {/* Desktop Links */}
                <ul className='hidden md:flex list-none gap-12 items-center'>
                    {NavLinks.map((link) => (
                        <li key={link.href} className='relative group cursor-pointer'>
                            <Link 
                                to={link.href} 
                                onClick={() => handleScrollTo(link.id)}
                                className='hover:text-orange-500 font-bold transition-all'
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover: transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* HIRE ME BUTTON */}
                <Link to='/contact' onClick={() => handleScrollTo('contact')} className='hidden md:block text-white bg-orange-500 text-base font-bold px-4 py-1 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-600/30'>
                    Hire Me
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
                        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-[#0a0e1a]/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg`}>
                <ul className="flex flex-col items-center gap-6 py-8">
                    {NavLinks.map((link) => (
                        <li key={link.href}>
                            <Link to={link.href} onClick={() => handleScrollTo(link.id)} className="text-lg font-semibold">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <Link to="/contact" onClick={() => handleScrollTo('contact')} className="bg-orange-500 text-white text-center font-bold px-6 py-2 rounded-lg w-[80%]">
                        Hire Me
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;