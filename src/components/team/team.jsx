import LayoutSection from "@/components/layouts/layout-section";
import SectionHeader from "@/components/section-header";
import H5 from "@/components/heading/h5";
import Paragraph from "@/components/paragraph";
import { MEMBERS } from "@/data/data"
import TeamMember from "@/components/team/team-member";
import FadeUp from "@/components/motion/FadeUp";

const Team = () => {
    return <LayoutSection>
        <SectionHeader titleOnly={true} title="Our Tattoo Experts" subtitle="Members" />

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            {MEMBERS.map((member) => (
                <FadeUp duration={member.id * 0.5}>
                    <TeamMember key={member.id} name={member.name} position={member.position} image={member.image} />
                </FadeUp>
            ))}
        </main>
    </LayoutSection>
}

export default Team;
