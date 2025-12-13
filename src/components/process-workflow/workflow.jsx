import LayoutSection from "@/components/layouts/layout-section";
import SectionHeader from "@/components/section-header";
import img_1 from "@/assets/process-workflow/img-1.png";
import { PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Workflow = () => {
    return (
        <LayoutSection>
            <div className="flex flex-col gap-4">
                <SectionHeader title="Tattoo Workflow" subtitle="Our Process" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="relative">
                        <img src={img_1} alt="process-workflow image" />
                        <p className="absolute p-4 bg-transparent flex flex-col inset-0">
                            <Button className="rounded-full transition-colors duration-300 w-14 h-14 bg-muted/90 border-none" variant="ghost" size="icon">
                                <PlayIcon className="w-10 h-10" />
                            </Button>
                        </p>
                    </div>

                    <div>
                        card 2
                    </div>

                    <div>
                        card 3
                    </div>
                </div>
            </div>
        </LayoutSection>
    );
};


export default Workflow;
