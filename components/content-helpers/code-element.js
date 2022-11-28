const CodeElement = ({ children }) => {
    return (
        <code 
            className="
                text-xs
                bg-slate-200
                rounded
                px-px
            ">
            {children}
        </code>
    )
}

export default CodeElement;