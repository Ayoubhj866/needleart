import SectionHeader from "@/components/section-header";
import Subtitle from "@/components/heading/subtitle";
import { CheckCircleIcon, Circle, MoveUpRight } from "lucide-react";
import about_image from "@/assets/about/about-image.png"
import Paragraph from "@/components/paragraph";
import H3 from "@/components/heading/h3";
import FadeUp from "@/components/motion/FadeUp";
import AboutGallery from "@/components/galleries/about-gallery";
import ButtonUp from '@/components/button';
import H2 from '@/components/heading/h2';

const About = () => {
    return (
        <section className="pt-20 max-w-7xl mx-auto px-4 flex flex-col gap-4 md:gap-10 xl:px-0">
            <SectionHeader titleOnly={false} title="Our story" subtitle="WHO WE ARE">
                In our studio, hygiene and professionalism are top priorities. We use the highest quality equipment and follow strict sterilization procedures to provide a safe and comfortable environment for all our clients.
            </SectionHeader>

            {/* body */}
            {/* <div className="w-full flex items-center max-md:flex-col gap-4 lg:gap-10"> */}
            <div className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 lg:gap-10">
                {/* left */}
                <FadeUp duration={1}>
                    <div className="space-y-4">
                        <Subtitle className="flex items-center gap-2">
                            <Circle className="w-3 h-3" />
                            <span>Where art meet skin</span>
                        </Subtitle>

                        {/* image */}
                        <img src={about_image} className="rounded-sm h-auto w-full md:max-w-[560px] object-contain" alt="about image" />
                    </div>
                </FadeUp>

                {/* right */}
                <FadeUp className="flex flex-col gap-6" duration={1}>
                    <div className="w-full flex flex-col justify-center h-full flex-1 gap-4 mx-auto">
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
                        {/* 4 image on grid */}
                        <div>
                            <AboutGallery />
                        </div>
                        <div className="">
                            <ButtonUp label="About us">
                                <MoveUpRight />
                            </ButtonUp>
                        </div>
                    </div>

                    <div className="mt-auto space-y-2">
                        <H3>14 YEARS</H3>
                        <Paragraph>
                            Fourteen Years of Crafting Timeless Tattoos
                        </Paragraph>
                    </div>
                </FadeUp>
            </div>
        </section >
    )
}

export default About
