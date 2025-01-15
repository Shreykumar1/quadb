import { IoAddOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaMap } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const navigationItems = [
    { icon: <CiViewList />, label: "All Tasks" },
    { icon: <MdOutlineCalendarToday />, label: "Today" },
    { icon: <FaRegStar />, label: "Important" },
    { icon: <FaMap />, label: "Planned" },
    { icon: <MdOutlineAssignmentInd />, label: "Assigned to me" }
];

const Sidebar = () => {
    const { state } = useContext(GlobalContext);
    const isDark = state.theme === "dark";

    return (
        <aside className={`absolute w-52 md:static sm:w-2/6 lg:w-[20%] flex flex-col ${
            isDark ? "bg-[#2C2C2C]" : "bg-[#EEF6EF]"
        } px-4 py-6`}>
            {/* User Info */}
            <div className="flex flex-col items-center mb-8">
                <img
                    src="/image.jpg"
                    alt="User Profile"
                    className="rounded-full w-32 h-32 object-cover"
                />
                <h1 className="text-lg font-bold mt-2 text-green-600">Hey, Admin</h1>
            </div>

            {/* Navigation Links */}
            <nav className={`rounded-lg ${isDark ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}`}>
                <ul className="text-left">
                    {navigationItems.map((item, index) => (
                        <li 
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer"
                            role="button"
                            tabIndex={0}
                        >
                            <span aria-hidden="true">{item.icon}</span> {item.label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Add List Button */}
            <button 
                className={`flex rounded-md justify-center items-center gap-6 mt-4 w-full hover:text-[#357937] ${
                    isDark ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"
                }`}
            >
                <IoAddOutline className="text-xl" aria-hidden="true" />
                <span className="font-semibold py-2">Add List</span>
            </button>

            {/* Today Tasks Section */}
            <div className="mt-4">
                <h2 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                    Today Tasks
                </h2>
                <div className="flex justify-center">
                    <img
                        src={isDark ? "./darkdonegraph.png" : "./donegraph.png"}
                        alt="Pie chart showing task completion status"
                        className=" rounded-sm"
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

