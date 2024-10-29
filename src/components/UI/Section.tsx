import { ReactNode } from "react";


const Section = ({ children }: any) => {

    return <div className="h-screen bg-lightWhite flex items-center flex-col dark:bg-blackDk">
        {children}
    </div>

} 




export default Section;