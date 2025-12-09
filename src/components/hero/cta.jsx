import FadeUp from "@/components/motion/FadeUp";
import hero_image2 from "@/assets/hero-assets/image-2.png";
import { MoveUpRight } from "lucide-react";
import Paragraph from "@/components/paragraph";
import Button from "@/components/button";

const CTA = () => {
    return (
        <div className="lg:py-9 flex flex-col gap-y-10 lg:gap-y-[100px] max-lg:mx-auto max-w-[750px] lg:pr-12">
            <FadeUp duration={1}>
                <div className="flex flex-col max-lg:mx-auto gap-y-[30px]">
                    <h1 className="text-5xl max-lg:text-center max-md:text-3xl leading-[141%] font-semibold text-foreground">
                        DISCOVER THE ART OF TATTOOING IN A UNIQUE AND MINIMALIST WAY</h1>
                    <Button label="Our work">
                        <MoveUpRight />
                    </Button>
                </div>
            </FadeUp>

            <div className="max-lg:hidden gap-8 max-w-xl items-center grid grid-cols-[auto_1fr]">
                <FadeUp duration={1}>
                    <div className="flex h-[150px] w-[150px]">
                        <img src={hero_image2} className="rounded-sm object-cover" alt="hero image" />
                    </div>
                </FadeUp>
                <FadeUp duration={1}>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Needleart</h3>
                        <FadeUp duration={1.5}>
                            <Paragraph>
                                We specialize in custom designs, working closely with our clients to transform their ideas into beautiful, one-of-a-kind pieces that they can wear with pride.
                            </Paragraph>
                        </FadeUp>
                    </div>
                </FadeUp>
            </div>
        </div>
    )
}

export default CTA
