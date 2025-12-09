import { Button } from "@/components/ui/button";
import H4 from "@/components/heading/h4";
import Paragraph from "@/components/paragraph";
import { MoveUpRight } from "lucide-react";

const Card = ({ title, description, image }) => {
    return (
        <div className="w-full hover:bg-muted transition-colors duration-300 p-5 min-h-[400px] lg:min-h-[480px] lg:p-7 border border-foreground/10 group flex flex-col relative">
            {/* card header */}
            <div className="flex justify-between items-center group">
                <H4>
                    {title}
                </H4>
            </div>

            <Button variant="outline" className="rounded-full size-2 group-hover:size-10 opacity-0 group-hover:opacity-100 duration-300 transition-all absolute top-5 right-5 hidden group-hover:inline-flex bg-muted" size="icon">
                <MoveUpRight className="w-6 h-6" />
            </Button>

            {/* card body */}
            <div className="mt-auto space-y-4">
                <Paragraph>
                    {description}
                </Paragraph>
                <div className="w-full h-auto overflow-hidden">
                    <img src={image} alt="service image" className="w-full h-auto object-cover group-hover:scale-105 duration-300 transition-all" />
                </div>
            </div>

        </div>
    )
}

export default Card
