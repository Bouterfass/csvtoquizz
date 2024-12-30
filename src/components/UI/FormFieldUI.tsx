import { ReactNode } from "react"

interface FFUIProps {
    children: ReactNode
}

const FormFieldUI = ({ children }: FFUIProps) => {

    return (
        <div className="flex flex-col space-y-1 font-bold text-lightPurple">
            {children}
        </div>
    )

}

export default FormFieldUI