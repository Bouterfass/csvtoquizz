import { NAVBAR_HEIGHT } from "../../globals/variables";

const Section = ({ children }: any) => {
    console.log(NAVBAR_HEIGHT);
    
    return <div className="bg-lightWhite flex items-center flex-col dark:bg-blackDk"
        style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px` }}
    >
        {children}
    </div>
}

export default Section;