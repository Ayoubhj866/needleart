import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import H4 from "@/components/heading/h4";
import Paragraph from "@/components/paragraph";
import img1 from "@/assets/services/img-1.png";
import { SERVICES_DATA } from "@/data/data";
import Card from "@/components/services/card";

const Services = () => {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 flex flex-col gap-4 md:gap-20 lg:gap-20 xl:px-0 lg:py-[100px]">
            <SectionHeader title="Our services" subtitle="What we do" />

            {/* services main content */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES_DATA.map((service) => (
                    <Card key={service.id} title={service.title} description={service.description} image={service.image} />
                ))}
            </div>
        </section>
    )
}


export default Services
