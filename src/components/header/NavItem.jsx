const NavItem = ({ url, label }) => {
    return <>
        {/* desktop item */}
        <a className="hidden md:block text-sm hover:text-muted-foreground transition-colors text-foreground font-medium" href={url}>
            {label}
        </a>

        {/* mobile item */}
        <a className="md:hidden text-3xl hover:text-muted-foreground transition-colors block font-bold text-foreground" href={url}>
            {label}
        </a>
    </>

}

export default NavItem;
