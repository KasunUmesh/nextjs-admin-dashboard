import { TiThMenu } from "react-icons/ti";
import { FaRegBell, FaEnvelope } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

export default function Header({toggleCollapse, setToggleCollapse} : {toggleCollapse : boolean, setToggleCollapse:Dispatch<SetStateAction<boolean>>}) {

    const sideBarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    }

    const headerStyle = classNames("fixed w-full z-0 px-4 shadow-lg",
        {
            ["pl-[20rem]"] : !toggleCollapse,
            ["pl-[5.6rem]"] : toggleCollapse,
        }
    )

    return (
        <header className={headerStyle}>
            <div className="flex items-center justify-between h-16">
                <button onClick={sideBarToggle} className="hover:bg-[#3a3f38] ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                    <TiThMenu></TiThMenu>
                </button>

                <div className="flex items-center gap-[15px] relative ">
                    <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
                        <FaRegBell/>
                        <FaEnvelope/>
                    </div>

                    <div className="flex items-center gap-[15px] relative">
                        <p>Kasun Umesh</p>
                        <div className="h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center cursor-pointer">
                            <span className="font-semibold text-sm">KU</span>
                        </div>
                    </div>
  
                </div>
             
            </div>
        </header>
    )
}