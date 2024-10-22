import { ReactNode } from "react";


const Section = ({ children }: any) => {

    return <div className="h-screen bg-yellow flex items-center flex-col dark:bg-blackDk">
        {children}
    </div>

} 




export default Section;