import { Button } from "@/components/ui/button";
import hero_image from "@/assets/hero-assets/image-1.png";
import { LinkIcon, MoveUpRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="w-full py-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_546px] max-w-7xl mx-auto justify-center">
                {/* cta */}
                <div className="py-10 flex flex-col gap-y-[60px] max-w-[750px] pr-12">
                    <div className="flex flex-col gap-y-[30px]">
                        <h1 className="text-5xl leading-[141%] font-semibold text-foreground">
                            DISCOVER THE ART OF TATTOOING IN A UNIQUE AND MINIMALIST WAY</h1>
                        <div>
                            <span className="bg-muted/30 group p-1 border border-muted px-1.5 hover:border-orange-400 cursor-pointer duration-200 hover:text-orange-400 transition-colors rounded-full  items-center gap-x-1 inline-flex text-sm">
                                Our workd
                                <Button size="icon" className="ml-2 rounded-full bg-muted/30 text-foreground hover:bg-muted/30 hover:text-foreground group-hover:bg-border-400 group-hover:text-orange-400">
                                    <MoveUpRight />
                                </Button>
                            </span>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

                {/* image */}
                <div className="max-w-[546px]">
                    <img src={hero_image} height="592" width="546" className="" alt="hero image" />
                </div>
            </div>
        </section >
    )
}


export default Hero;
