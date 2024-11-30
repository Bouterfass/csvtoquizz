import React from "react";
import { NAVBAR_HEIGHT } from "../../globals/variables";

interface ThreePartsSectionProps {
    header?: React.ReactNode;
    children: [React.ReactNode, React.ReactNode, React.ReactNode];
    sizes?: [string, string, string] | undefined;
}

const ThreePartsSection: React.FC<ThreePartsSectionProps> = ({
    header,
    children,
    sizes = [],
}) => {
    const [left, center, right] = children;
    const [leftSize, centerSize, rightSize] = sizes;

    return (
        <div className="bg-lightWhite flex flex-col w-full dark:bg-blackDk"
            style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
            {header && (
                <div className="w-full p-4 text-center">
                    {header}
                </div>
            )}

            <div className="w-full h-full flex">
                <div className="flex justify-center items-center"
                    style={{ width: leftSize }}>
                    {left}
                </div>
                <div className="flex justify-center items-center"
                    style={{ width: centerSize }}>
                    {center}
                </div>
                <div className="flex justify-center items-center"
                    style={{ width: rightSize }}>
                    {right}
                </div>
            </div>
        </div>
    );
};

export default ThreePartsSection;
