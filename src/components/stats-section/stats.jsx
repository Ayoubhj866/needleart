import subtitle from "@/components/heading/subtitle";
import { Circle } from "lucide-react";
import Paragraph from "@/components/paragraph";
import StatCard from "@/components/stats-section/card"
import FadeUp from "@/components/motion/FadeUp";


const Stats = () => {
    return (

        <section className="pt-20 lg:pt-[100px]">
            <div className="w-full dark:bg-zinc-900 bg-muted py-10 lg:py-[60px]">
                <div className="max-w-7xl flex flex-col gap-6 mx-auto px-4 xl:px-0">
                    <FadeUp duration={1} >
                        <p className="flex flex-col gap-2">
                            <subtitle className="flex gap-2 text-orange-500 items-center">
                                <Circle className="w-3 h-3" />
                                <span>Tattoo Trivia and Insights</span>
                            </subtitle>

                            <Paragraph className="max-w-xl">
                                Discover intriguing tattoo trivia and valuable insights, offering a deeper understanding of tattoo history.
                            </Paragraph>
                        </p>
                    </FadeUp>

                    <FadeUp duration={1.5}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard description="Happy customers who have experienced our commitment to excellence." count="1600+" />
                            <StatCard description="Where years of dedicated artistry ensure exceptional tattoo quality." count="40" />
                            <StatCard description="Explore our extensive collection of over 3200 unique artworks." count="3000+" />
                            <StatCard description="Dedicated to delivering top-notch tattoo artistry & personalized service." count="24" />
                        </div>
                    </FadeUp>

                </div>
            </div>
        </section >
    )
}

export default Stats
