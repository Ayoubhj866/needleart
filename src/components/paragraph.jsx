const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-muted-foreground font-light text-base lg:text-lg ${className}`}>
            {children}
        </p>
    )
}
export default Paragraph;
