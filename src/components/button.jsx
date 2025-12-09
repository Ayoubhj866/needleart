import { Button } from "@/components/ui/button";

const ButtonUp = ({ children, label }) => {
    return <>
        <span className="max-lg:text-center">
            <span className="bg-muted/30 group border border-foreground/10 pl-4 hover:border-orange-400 cursor-pointer duration-200 hover:text-orange-400 transition-colors rounded-full  items-center gap-x-1 inline-flex text-sm">
                {label}
                <Button size="icon" className="ml-2 rounded-full bg-muted/30 text-foreground hover:bg-muted/30 hover:text-foreground group-hover:bg-border-400 group-hover:bg-orange-500">
                    {children}
                </Button>
            </span>
        </span>
    </>
}

export default ButtonUp;
