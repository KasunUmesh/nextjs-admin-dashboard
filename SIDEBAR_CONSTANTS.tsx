import { SideNavItem } from "@/types/types";
import { BsHouseDoor, BsKanban, BsListUl } from "react-icons/bs";

export const SIDENAV_ITEMS:SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <BsHouseDoor size={20}/>
    },
    {
        title: "Products",
        path: "/products",
        icon: <BsKanban size={20}/>
    },
    {
        title: "Orders",
        path: "/orders",
        icon: <BsListUl size={20}/>
    }
]