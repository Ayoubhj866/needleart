import SectionHeader from "@/components/section-header";
import Subtitle from "@/components/heading/subtitle";
import { CheckCircleIcon, Circle } from "lucide-react";
import about_image from "@/assets/about/about-image.png"
import Paragraph from "@/components/paragraph";
import H3 from "@/components/heading/h3";

const About = () => {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 flex flex-col gap-4 md:gap-20 lg:gap-20 xl:px-0 lg:py-[100px]">
            <SectionHeader title="Our story" subtitle="WHO WE ARE">
                In our studio, hygiene and professionalism are top priorities. We use the highest quality equipment and follow strict sterilization procedures to provide a safe and comfortable environment for all our clients.
            </SectionHeader>

            {/* body */}
            <div className="w-full flex items-center max-md:flex-col gap-4 lg:gap-10">
                <div className="space-y-4">
                    <Subtitle className="flex items-center gap-2">
                        <Circle className="w-3 h-3" />
                        <span>Where art meet skin</span>
                    </Subtitle>

                    {/* image */}
                    <img src={about_image} className="rounded-sm  h-auto w-full md:max-w-[560px] md:max-h-[600px] object-contain" alt="about image" />
                </div>

                <div className="w-full flex-1 space-y-4 min-w-sm">
                    <H3>
                        The story and vision of our tattoo studio
                    </H3>
                    <p className="space-y-2">
                        <Paragraph>
                            A place where art and individuality could come together in a unique and meaningful way. From humble beginnings, we've grown into a creative haven for those seeking to express their stories through ink.
                        </Paragraph>
                        <Paragraph>
                            We strive to create an inclusive and inspiring environment where both artists and clients feel empowered to explore new ideas and techniques.
                        </Paragraph>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
