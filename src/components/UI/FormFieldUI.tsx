import { ReactNode } from "react"

interface FFUIProps {
    children: ReactNode
}

const FormFieldUI = ({ children }: FFUIProps) => {

    return (
        <div className="bg-test flex flex-col">
            {children}
        </div>
    )

}

export default FormFieldUI