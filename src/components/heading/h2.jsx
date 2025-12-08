const H2 = ({ children, className }) => {
    return (
        <h2 className={`text-white font-normal text-2xl md:text-3xl lg:text-4xl ${className}`}>
            {children}
        </h2>
    )
}

export default H2
