import H5 from "@/components/heading/h5"
import Paragraph from "@/components/paragraph"

const TeamMember = ({ name, position, image }) => {
    return <>
        <article className="flex flex-col gap-4">
            <div>
                <H5>{name}</H5>
                <Paragraph className="!text-sm">{position}</Paragraph>
            </div>

            <div className="group relative overflow-hidden rounded-sm">
                <img src={image} alt="Marvin McKinney image" className="group-hover:scale-110 duration-300 transition-all duration-300" />
            </div>
        </article>
    </>
}

export default TeamMember;
