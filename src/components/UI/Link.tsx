import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface LinkProps {
    route: string;
    children: ReactNode
}
const Link = ({ route, children }: LinkProps) => {

    const handleRedirection = () => {
        navigate(route)
    }

    const navigate = useNavigate()
    return <li 
    className="font-bold text-purpleDk hover:underline hover:cursor-pointer dark:text-yellow"
    onClick={handleRedirection}>
        {children}
    </li>
}

export default Link; 