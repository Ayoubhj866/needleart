import H5 from "@/components/heading/h5";
import Paragraph from "@/components/paragraph";

const WorkflowSteep = ({ steepNumber, title, children }) => {
    return <>
        <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1">
                <H5>{steepNumber}.</H5>
                <H5>{title}</H5>
            </p>
            <Paragraph>
                {children}
            </Paragraph>
        </div>
    </>
}

export default WorkflowSteep;
