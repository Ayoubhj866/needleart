import H2 from "@/components/heading/h2";
import Subtitle from "@/components/heading/subtitle";
import Paragraph from "@/components/paragraph";

const SectionHeader = ({ title, subtitle, children }) => {
    return (
        <div className="w-full flex gap-2 md:gap-10 lg:gap-20 items-start md:items-center max-md:flex-col">
            <div className="inline-flex flex-col items-start">
                <Subtitle className="text-orange-500">{subtitle}</Subtitle>
                <H2>{title}</H2>
            </div>
            <div className="inline-block min-h-full  w-px self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <div className="flex-1">
                <Paragraph>{children}</Paragraph>
            </div>

        </div>
    )
}

export default SectionHeader;
