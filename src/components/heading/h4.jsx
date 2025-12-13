const H4 = ({ children, className }) => {
    return (
        <h4 className={`text-lg md:text-xl font-medium  ${className}`}>
            {children}
        </h4>
    )
}

export default H4;
