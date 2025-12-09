const H4 = ({ children, className }) => {
    return (
        <h3 className={`text-lg md:text-xl font-medium  ${className}`}>
            {children}
        </h3>
    )
}

export default H4;
