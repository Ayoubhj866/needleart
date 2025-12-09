import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import H4 from "@/components/heading/h4";
import Paragraph from "@/components/paragraph";
import img1 from "@/assets/services/img-1.png";
import { SERVICES_DATA } from "@/data/data";
import Card from "@/components/services/card";
import LayoutSection from "@/components/layouts/layout-section";
import FadeUp from "@/components/motion/FadeUp";

const Services = () => {
    return (
        <LayoutSection>
            <SectionHeader title="Our services" subtitle="What we do" />

            {/* services main content */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES_DATA.map((service, index) => (
                    <FadeUp key={service.id} duration={(index + 1) * 0.5}>
                        <Card key={service.id} title={service.title} description={service.description} image={service.image} />
                    </FadeUp>
                ))}
            </div>
        </LayoutSection>
    )
}


export default Services
