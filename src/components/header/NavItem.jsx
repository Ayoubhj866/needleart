const NavItem = ({ url, label }) => {
    return (
        <a className="text-sm hover:text-muted-foreground transition-colors text-foreground font-medium" href={url}>
            {label}
        </a>)
}

export default NavItem;
