const Anchor = ({ children, href }) => {
    return (
        <a href={href} 
            className="
                underline 
                underline-offset-1
                decoration-solid 
                decoration-slate-400
                decoration-1
                hover:decoration-indigo-500
                hover:decoration-2">
            {children}
        </a>
    );
}

export default Anchor;