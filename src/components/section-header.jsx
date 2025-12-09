import H2 from "@/components/heading/h2";
import Subtitle from "@/components/heading/subtitle";
import Paragraph from "@/components/paragraph";
import FadeUp from "@/components/motion/FadeUp";

const SectionHeader = ({ title, subtitle, children, titleOnly = true }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-2 md:gap-10 lg:gap-18 md:items-center">
            <div className="flex  flex-col items-start">
                <FadeUp duration={1}>
                    <Subtitle className="text-orange-500 uppercase">{subtitle}</Subtitle>
                    <H2>{title}</H2>
                </FadeUp>
            </div>

            {!titleOnly && <div className="inline-block min-h-full  w-px self-stretch bg-neutral-100 dark:bg-white/10"></div>}

            <FadeUp duration={1}>
                <div className="flex-1">
                    <Paragraph>{children}</Paragraph>
                </div>
            </FadeUp>
        </div>
    )
}

export default SectionHeader;
