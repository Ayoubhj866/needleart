import LayoutSection from "@/components/layouts/layout-section";
import SectionHeader from "@/components/section-header";
import img_1 from "@/assets/process-workflow/img-1.png";
import img_2 from "@/assets/process-workflow/img-2.png";
import img_3 from "@/assets/process-workflow/img-3.png";
import { PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import H4 from "@/components/heading/h4";
import H5 from "@/components/heading/h5";
import Paragraph from "@/components/paragraph";
import WorkflowSteep from '@/components/process-workflow/workflow-steep'

const Workflow = () => {
    return (
        <LayoutSection>
            <div className="flex flex-col gap-4">
                <SectionHeader title="Tattoo Workflow" subtitle="Our Process" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                    <div className="relative flex">
                        <img src={img_1} alt="process-workflow  image" />
                        <p className="absolute p-4 lg:p-6 bg-transparent flex flex-col inset-0">
                            <Button className="rounded-full group transition-colors duration-300 w-14 h-14 bg-muted/90 border-none" variant="ghost" size="icon">
                                <PlayIcon className="w-10 group-hover:scale-110 transition-all duration-300 h-10" />
                            </Button>

                            <H4 className="mt-auto ">
                                STEEP-BY-STEEP GUIDE TO OUR TATTOOWING WORKFLOW AND AFTERCARE
                            </H4>
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <WorkflowSteep steepNumber="1" title="Consultation & Design">
                            Our artists then create a custom design based on your input, making any necessary adjustments until you’re satisfied with the final artwork.
                        </WorkflowSteep>

                        <WorkflowSteep steepNumber="2" title="Preparation">
                            We review the design with you, discuss the procedure, ensure you’re comfortable and informed about what to expect.
                        </WorkflowSteep>
                        <div>
                            <img src={img_2} alt="process-workflow image" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div>
                            <img src={img_3} alt="process-workflow image" />
                        </div>
                        <WorkflowSteep steepNumber="3" title="Consultation & Design">
                            We focus on precision and your comfort throughout the process, maintaining a clean and safe environment.
                        </WorkflowSteep>

                        <WorkflowSteep steepNumber="4" title="Aftercare & FlowUp">
                            We also offer follow-up support to address any questions or concerns as your tattoo heals, ensuring a great result.
                        </WorkflowSteep>
                    </div>
                </div>
            </div>
        </LayoutSection>
    );
};


export default Workflow;
