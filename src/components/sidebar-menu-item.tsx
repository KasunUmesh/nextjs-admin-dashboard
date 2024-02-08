"use client";
import { useSideBarToggle } from "@/hooks/useSideBarToggle";
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBarMenuItem = ({item} : {item : SideNavItem}) => {

    const linkStyle = "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200";
    const activeLinkStyle = "rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]"

    const { toggleCollapse } = useSideBarToggle();
    const pathName = usePathname();

    return (
        <>
            {
                
                (<Link href={item.path} className={`${linkStyle} ${item.path === pathName ? activeLinkStyle : ''}`}>
                        {item.icon}
                        {!toggleCollapse && <span className="ml-3 leading-6 font-semibold">{item.title}</span>}
                </Link>)
            }
        </>
    )
}