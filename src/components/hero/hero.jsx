import { Button } from "@/components/ui/button";
import hero_image from "@/assets/hero-assets/image-1.png";
import hero_image2 from "@/assets/hero-assets/image-2.png";
import { LinkIcon, MoveUpRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="w-full py-[60px] px-4 xl:px-0 lg:py-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_546px] gap-y-10 max-w-7xl mx-auto justify-center">
                {/* cta */}
                <div className="lg:py-10 flex flex-col gap-y-10 lg:gap-y-[100px] max-lg:mx-auto max-w-[750px] lg:pr-12">
                    <div className="flex flex-col max-lg:mx-auto gap-y-[30px]">
                        <h1 className="text-5xl max-lg:text-center max-md:text-3xl leading-[141%] font-semibold text-foreground">
                            DISCOVER THE ART OF TATTOOING IN A UNIQUE AND MINIMALIST WAY</h1>
                        <span className="max-lg:text-center">
                            <span className="bg-muted/30 group border border-muted pl-4 hover:border-orange-400 cursor-pointer duration-200 hover:text-orange-400 transition-colors rounded-full  items-center gap-x-1 inline-flex text-sm">
                                Our workd
                                <Button size="icon" className="ml-2 rounded-full bg-muted/30 text-foreground hover:bg-muted/30 hover:text-foreground group-hover:bg-border-400 group-hover:bg-orange-500">
                                    <MoveUpRight />
                                </Button>
                            </span>
                        </span>
                    </div>

                    <div className="max-lg:hidden gap-8 max-w-xl items-center grid grid-cols-[auto_1fr]">
                        <div className="flex h-[150px] w-[150px]">
                            <img src={hero_image2} className="rounded-sm object-cover" alt="hero image" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Needleart</h3>
                            <p className="text-muted-foreground font-normal text-base leading-[170%]">
                                We specialize in custom designs, working closely with our clients to transform their ideas into beautiful, one-of-a-kind pieces that they can wear with pride.
                            </p>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className="max-w-sm flex items-center mx-auto rounded-sm justify-center text-center border border-muted/10 sm:max-w-[546px]">
                    <img src={hero_image} className="rounded-sm mx-auto" alt="hero image" />
                </div>
            </div>
        </section >
    )
}


export default Hero;
