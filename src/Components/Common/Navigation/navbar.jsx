import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Logo from "../../../assets/images/new-logo-banner.png";
import LogoGray from "../../../assets/images/CGDC-Logo.png";
import "../../../App.css";
import { Link, useLocation } from 'react-router-dom';
import CustomDropdown from './dropdown';

const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};

const Navbar = () => {
    const isHome = useIsHome();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Adjusted services menu using items array
    const servicesMenu = [
        { key: '1', label: <Link to="/services/architecture" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Architecture</Link> },
        { key: '2', label: <Link to="/services/town-planning" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Town Planning</Link> },
        { key: '3', label: <Link to="/services/project-management" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Project Management</Link> },
        { key: '4', label: <Link to="/services/mep-designing" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">MEP Designing</Link> },
        { key: '5', label: <Link to="/services/structure-engineering" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Structure Engineering</Link> },
        { key: '6', label: <Link to="/services/building-economics" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Building Economics</Link> },
        { key: '7', label: <Link to="/services/financial-feasibility" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Financial Feasibility</Link> },
        { key: '8', label: <Link to="/services/interior-designing" className="block px-8 py-3 text-sm uppercase whitespace-nowrap text-gray-700 hover:bg-gray-600 hover:text-white">Interior Designing</Link> },
    ];

    return (
        <header className={`${isHome ? "navbar" : "bg-white"} text-gray-600 body-font font-outfit relative z-50`}>
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-8 py-2">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {isHome ? <img src={Logo} alt="Logo" /> : <img src={LogoGray} alt="Logo" />}
                </a>
                <div className="relative md:hidden">
                    {/* Menu Button for Small Screens */}
                    <button onClick={toggleMenu} className="p-2 text-gray-900">
                        <MenuOutlined />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-44 uppercase font-medium bg-white z-10">
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <CustomDropdown label="OUR SERVICES" items={servicesMenu} />
                            <Link
                                to="/projects"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                to="/ourteam"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Our Team
                            </Link>
                            <Link
                                to="/careers"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Careers
                            </Link>
                            <Link
                                to="/affiliations"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Affiliations
                            </Link>
                            <Link
                                to="/news"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    )}
                </div>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex md:ml-auto font-outfit flex-wrap items-center text-base justify-center">
                    <Link to="/" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">HOME</span></Link>
                    <Link to="/about" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">ABOUT US</span></Link>
                    <CustomDropdown label="OUR SERVICES" items={servicesMenu} />
                    <Link to="/projects" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">PROJECTS</span></Link>
                    <Link to="/ourteam" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">OUR TEAM</span></Link>
                    <Link to="/careers" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">CAREERS</span></Link>
                    <Link to="/affiliations" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">AFFILIATIONS</span></Link>
                    <Link to="/news" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">NEWS</span></Link>
                    <Link to="/contact" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">CONTACT US</span></Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
