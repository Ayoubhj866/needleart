import { cn } from "@/lib/utils";

const LayoutSection = ({ children, className, id }) => {
    return (
        <section id={id} className={cn("pt-20 lg:pt-[100px] max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-10 md:gap-14", className)}>
            {children}
        </section>
    );
};

export default LayoutSection;
