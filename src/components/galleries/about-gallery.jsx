import img_1 from "@/assets/about/img-1.png";
import img_2 from "@/assets/about/img-2.png";
import img_3 from "@/assets/about/img-3.png";
import img_4 from "@/assets/about/img-4.png";
import Fadeup from "@/components/motion/FadeUp";

const AboutGallery = () => {
    return <>
        <div className="grid grid-cols-2 md:grid-cols-[120px_120px_120px_120px] md:max-h-20 gap-1">
            <Fadeup duration={1}>
                <img src={img_1} className="rounded-sm h-auto md:max-h-20 w-full object-contain" alt="about image" />
            </Fadeup>
            <Fadeup duration={1.1}>
                <img src={img_2} className="rounded-sm h-auto md:max-h-20 w-full object-contain" alt="about image" />
            </Fadeup>
            <Fadeup duration={1.2}>
                <img src={img_3} className="rounded-sm h-auto md:max-h-20 w-full object-contain" alt="about image" />
            </Fadeup>
            <Fadeup duration={1.3}>
                <img src={img_4} className="rounded-sm h-auto md:max-h-20 w-full object-contain" alt="about image" />
            </Fadeup>
        </div>
    </>
}

export default AboutGallery;
