const H3 = ({ children, className }) => {
    return (
        <h3 className={`text-xl md:text-3xl font-medium  ${className}`}>
            {children}
        </h3>
    )
}

export default H3;
