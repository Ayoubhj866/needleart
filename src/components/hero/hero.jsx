import hero_image from "@/assets/hero-assets/image-1.png";
import FadeUp from "@/components/motion/FadeUp";
import CTA from "@/components/hero/cta";
import { HeadsetIcon, HeartCrack } from "lucide-react";
import { HERO_DATA } from "@/data/data.jsx";

const Hero = () => {
    return <>
        <section className="w-full py-[60px] lg:py-[80px]">
            <div className="grid grid-cols-1 px-4 xl:px-0 lg:grid-cols-[1fr_546px] gap-y-10 max-w-7xl mx-auto justify-center">
                {/* cta */}
                <CTA />

                {/* right image */}
                <div className="max-w-sm flex items-center mx-auto rounded-sm justify-center text-center border border-muted/10 sm:max-w-[546px]">
                    <FadeUp duration={1}>
                        <img src={hero_image} className="rounded-sm mx-auto" alt="hero image" />
                    </FadeUp>
                </div>
            </div>

            {/*  */}
            <div className="w-full px-4 xl:px-0 mt-10 bg-muted py-5">
                <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
                    {HERO_DATA.map((item, index) => (
                        <FadeUp key={index} duration={(index + 1) * 0.5}>
                            <div key={index} className="flex items-center justify-center lg:justify-start gap-4">
                                <img src={item.logo} className="size-8" alt={item.title} />
                                <h2 className="text-lg font-medium text-foreground">
                                    {item.title}
                                </h2>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section >
    </>
}


export default Hero;
