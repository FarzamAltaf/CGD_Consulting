import { useState } from 'react';
import { Popover, Button, Dropdown, Menu } from 'antd';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import Logo from "../../../assets/images/new-logo-banner.png";
import LogoGray from "../../../assets/images/CGDC-Logo.png";
import "../../../App.css";
import { Link, useLocation } from 'react-router-dom';

const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};

const Navbar = () => {
    const isHome = useIsHome(); // Call the function here
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Dropdown menu for 'Our Services'
    const servicesMenu = (
        <Menu>
            <Menu.Item><Link to="/services/architecture">Architecture</Link></Menu.Item>
            <Menu.Item><Link to="/services/town-planning">Town Planning</Link></Menu.Item>
            <Menu.Item><Link to="/services/project-management">Project Management</Link></Menu.Item>
            <Menu.Item><Link to="/services/mep-designing">MEP Designing</Link></Menu.Item>
            <Menu.Item><Link to="/services/structure-engineering">Structure Engineering</Link></Menu.Item>
            <Menu.Item><Link to="/services/building-economics">Building Economics</Link></Menu.Item>
            <Menu.Item><Link to="/services/financial-feasibility">Financial Feasibility</Link></Menu.Item>
            <Menu.Item><Link to="/services/interior-designing">Interior Designing</Link></Menu.Item>
        </Menu>
    );

    const content = (
        <div>
            <Link to="/" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Home</Link>
            <Link to="/about" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">About us</Link>
            <Dropdown  overlay={servicesMenu} trigger={['click']}>
                <span className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose cursor-pointer">
                    Our Services <DownOutlined />
                </span>
            </Dropdown>
            <Link to="/projects" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Projects</Link>
            <Link to="/ourteam" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Our Team</Link>
            <Link to="/careers" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Careers</Link>
            <Link to="/affiliations" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Affiliations</Link>
            <Link to="/news" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">News</Link>
            <Link to="/contact" className="block hover:text-red-800 hover:underline uppercase font-jost leading-loose">Contact us</Link>
        </div>
    );

    return (
        <header className={`${isHome ? "navbar" : "bg-white"} text-gray-600 body-font font-outfit relative z-50`}>
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-8 py-2">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {isHome ? <img src={Logo} alt="Logo" /> : <img src={LogoGray} alt="Logo" />}
                </a>

                {/* Menu Button for Small Screens */}
                <Popover content={content} title=" " trigger="click" placement="bottom" onOpenChange={toggleMenu}>
                    <Button className="md:hidden p-2 -mt-5 text-gray-900">
                        <MenuOutlined />
                    </Button>
                </Popover>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex md:ml-auto font-outfit flex-wrap items-center text-base justify-center">
                    <Link to="/" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">HOME</span></Link>
                    <Link to="/about" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">ABOUT US</span></Link>
                    <Dropdown overlay={servicesMenu} trigger={['click']}>
                        <span className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}>
                            <span className="mr-5 py-5 text-xs">OUR SERVICES <DownOutlined /></span>
                        </span>
                    </Dropdown>
                    <Link to="/projects" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">PROJECTS</span></Link>
                    <Link to="/ourteam" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">OUR TEAM</span></Link>
                    <Link to="/careers" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">CAREERS</span></Link>
                    <Link to="/affiliations" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">AFFILIATIONS</span></Link>
                    <Link to="/news" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">NEWS</span></Link>
                    <Link to="/contact" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer`}><span className="mr-5 py-5 text-xs">CONTACT US</span></Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
