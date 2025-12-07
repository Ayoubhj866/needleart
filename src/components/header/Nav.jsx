import NavItem from "@/components/header/NavItem";
import { TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/navlinks";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/ui-slice";

const Nav = () => {
    const dispatch = useDispatch();
    const isVisibleMenuOnMobile = useSelector((state) => state.ui.isMobileMenuOpen);

    const toggleMenuOnMobile = () => {
        dispatch(uiActions.toggleMobileMenu());
    }

    return (
        <nav className="flex gap-4 lg:gap-[30px] items-center ">
            {/* discktop navigation */}
            <div className="flex gap-4 max-md:hidden lg:gap-[30px]">
                {NAV_LINKS.map((link, index) => <NavItem key={index} url={link.url} label={link.label} />)}
            </div>

            {/* mobile navigation */}
            <div className={`md:hidden absolute top-[77px] z-50 bottom-0 -translate-x-full min-h-[calc(100vh-77px)] inset-x-0 bg-background flex flex-col gap-[30px] justify-start overflow-y-hidden pt-10 items-center transition-transform duration-300 ease-in-out ${isVisibleMenuOnMobile ? 'translate-x-0' : ''}`}>
                {NAV_LINKS.map((link, index) => <NavItem key={index} url={link.url} label={link.label} />)}
            </div>

            <Button onClick={toggleMenuOnMobile} variant="ghost" size="icon" className="hover:bg-transparent md:hidden text-muted-foreground transition-colors cursor-pointer">
                <TextAlignStart className="text-foreground size-[30px]" />
            </Button>
        </nav>
    )
}


export default Nav
