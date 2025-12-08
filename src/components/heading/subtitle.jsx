const Subtitle = ({ children, className }) => {
    return (
        <h6 className={`uppercase font-light leading-[150%] text-sm ${className}`}>
            {children}
        </h6>
    )
}

export default Subtitle
