import Image from "next/image"
import { SIDENAV_ITEMS } from "../../SIDEBAR_CONSTANTS"
import { SideBarMenuItem } from "./sidebar-menu-item"
import classNames from "classnames"
import { useSideBarToggle } from "@/hooks/useSideBarToggle";

export default function Sidebar() {

    const {toggleCollapse} = useSideBarToggle();
    
    const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]", 
    {
        
        ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
        ["w-[20rem]"]: !toggleCollapse
    })

    return (
        <aside className={asideStyle}>
            <div className="sidebar-top flex relative items-center py-5 px-2">
                <Image alt="" src='/logo.png' width={35} height={35} className="w-12 mx-3.5 min-h-fit"></Image>
                {!toggleCollapse && <h3 className="pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max">
                    SB ADMIN
                </h3>}
            </div>

            <nav className="flex flex-col gap-2 transition duration-300">
                <div className="flex flex-col gap-2 px-4">
                    {
                        SIDENAV_ITEMS.map((item, index) => {
                            return <SideBarMenuItem key={index} item={item} toggleCollapse={toggleCollapse}></SideBarMenuItem>
                        })
                    }
                </div>
            </nav>
        </aside>
    )
}