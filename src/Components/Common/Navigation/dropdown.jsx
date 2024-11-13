import { useState } from 'react';
import { useLocation } from 'react-router';


const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};

const CustomDropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isHome = useIsHome();


    return (
        <div className="relative inline-block text-left">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <span className={`${isHome ? "sm:text-white " : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}>
                    <span className="mr-5 sm:py-5 py-2 px-3 text-xs flex items-center mt-1">{label}<svg className="h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" /></svg>
                    </span>
                </span>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg">
                    {items.map((item, index) => (
                        <div
                            key={index}


                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
