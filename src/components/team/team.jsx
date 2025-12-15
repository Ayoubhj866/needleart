import LayoutSection from "@/components/layouts/layout-section";
import SectionHeader from "@/components/section-header";
import H5 from "@/components/heading/h5";
import Paragraph from "@/components/paragraph";
import { MEMBERS } from "@/data/data"
import TeamMember from "@/components/team/team-member";

const Team = () => {
    return <LayoutSection>
        <SectionHeader titleOnly={true} title="Our Tattoo Experts" subtitle="Members" />

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            {MEMBERS.map((member) => (
                <TeamMember key={member.id} name={member.name} position={member.position} image={member.image} />
            ))}
        </main>
    </LayoutSection>
}

export default Team;
