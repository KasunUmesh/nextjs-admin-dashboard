import { ReactNode } from "react";

export default function Pagewrapper({children} : { children : ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}