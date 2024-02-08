import { TiThMenu } from "react-icons/ti";
import { FaRegBell, FaEnvelope } from "react-icons/fa";
import classNames from "classnames";
import { useSideBarToggle } from "@/hooks/useSideBarToggle";

export default function Header() {

    const {toggleCollapse, invokeToggleCollapse} = useSideBarToggle();
    const sideBarToggle = () => {
        invokeToggleCollapse();
    }

    const headerStyle = classNames("fixed w-full z-0 px-4 shadow-lg",
        {
            ["sm:pl-[20rem]"] : !toggleCollapse,
            ["sm:pl-[5.6rem]"] : toggleCollapse
        }
    )

    return (
        <header className={headerStyle}>
            <div className="flex items-center justify-between h-16">
                <button onClick={sideBarToggle} className="order-2 sm:order-1 hover:bg-[#3a3f38] ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                    <TiThMenu></TiThMenu>
                </button>

                <div className="flex items-center gap-[15px] relative order-1 sm:order-2 flex-row-reverse sm:flex-row">
                    <div className="order-1 flex items-center gap-[25px] sm:border-r-[1px] sm:border-l-[0px] border-l-[1px] sm:pr-[25px] pl-[25px]">
                        <FaRegBell/>
                        <FaEnvelope/>
                    </div>

                    <div className="order-2 flex flex-row-reverse sm:flex-row items-center gap-[15px] relative ">
                        <p>Kasun Umesh</p>
                        <div className=" h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center cursor-pointer">
                            <span className="font-semibold text-sm">KU</span>
                        </div>
                    </div>
  
                </div>
             
            </div>
        </header>
    )
}