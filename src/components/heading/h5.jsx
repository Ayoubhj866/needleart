const H5 = ({ children, className }) => {
    return (
        <h3 className={`text-base md:text-lg font-medium  ${className}`}>
            {children}
        </h3>
    )
}

export default H5;
