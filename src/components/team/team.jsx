import LayoutSection from "@/components/layouts/layout-section";
import SectionHeader from "@/components/section-header";

const Team = () => {
    return <LayoutSection>
        <SectionHeader titleOnly={true} title="Our Tattoo Experts" subtitle="Members" />

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            <div className="bg-red-400">
                Member card 1
            </div>
            <div>
                Member card 2
            </div>
            <div>
                Member card 3
            </div>
        </main>
    </LayoutSection>
}

export default Team;
