const Section = ({ children }: any) => {
    return <div className="bg-lightWhite flex items-center flex-col dark:bg-blackDk"
        style={{ height: "calc(100vh - 3rem)" }}
    >
        {children}
    </div>
}

export default Section;