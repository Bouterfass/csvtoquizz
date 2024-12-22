import { ReactNode } from "react";

interface ActionButtonProps {
    handler: () => void
    children: ReactNode
}

const ActionButton = ({ handler, children }: ActionButtonProps) => {
    return (
        <button
            className="w-fit rounded-md font-bold text-md py-2 px-4 transition-colors ease-in-out delay-50
                text-lg text-lightWhite bg-lightPurple dark:text-lightWhite dark:bg-darkPurple"
            onClick={handler}
        >
            {children}
        </button>
    );
};

export default ActionButton;
