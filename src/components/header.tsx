import { TiThMenu } from "react-icons/ti";
import { FaRegBell, FaEnvelope } from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed w-full z-0 px-4 shadow-lg pl-[20rem]">
            <div className="flex items-center justify-between h-16">
                <button className="hover:bg-[#3a3f38] ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
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