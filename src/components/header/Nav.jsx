import NavItem from "@/components/header/NavItem";
import { TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/navlinks";

const Nav = () => {
    return (
        <nav className="flex space-x-4 items-center gap-7">
            <div className="flex gap-[30px]">
                {NAV_LINKS.map((link, index) => <NavItem key={index} url={link.url} label={link.label} />)}
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-transparent text-muted-foreground transition-colors cursor-pointer">
                <TextAlignStart className="text-foreground size-[30px]" />
            </Button>
        </nav>
    )
}


export default Nav
