import Paragraph from "@/components/paragraph";
import H3 from "@/components/heading/h3";

const StatCard = ({ description, count }) => {
    return (
        <div className="flex border w-full p-5 border-foreground/20 flex-col min-h-[150px] gap-10">
            <H3 className="font-semibold">{count}</H3>
            <div className="">
                <Paragraph className="!text-sm">{description}</Paragraph>
            </div>
        </div>
    )
}

export default StatCard;
