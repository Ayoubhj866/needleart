import heart_logo from "@/assets/hero-assets/heart.png"
import pen_logo from "@/assets/hero-assets/pen.png"
import people_logo from "@/assets/hero-assets/peoples.png"
import svc_img_1 from "@/assets/services/img-1.png"
import svc_img_2 from "@/assets/services/img-2.png"
import svc_img_3 from "@/assets/services/img-3.png"
import img_1 from "@/assets/members/01.png"
import img_2 from "@/assets/members/02.png"
import img_3 from "@/assets/members/03.png"

export const NAV_LINKS = [
    { url: "#", label: "ABOUT" },
    { url: "#", label: "SERVICES" },
    { url: "#", label: "WORKS" },
    { url: "#", label: "BLOGS" },
    { url: "#", label: "CONTACT US" },
    { url: "#", label: "CART (0)" },
];


export const HERO_DATA = [
    {
        title: "Masterful Custom Tattoo Designs",
        logo: heart_logo,
    },
    {
        title: "Precision & Hygiene in Every Ink",
        logo: pen_logo,
    },
    {
        title: "Experienced Tattoo Artists",
        logo: people_logo,
    },
];


export const SERVICES_DATA = [
    {
        'id': 1,
        'title': "Black & Grey Tattoos",
        'description': "Where classics monocrome tattoos meet timeless style.",
        'image': svc_img_1,
    },
    {
        'id': 2,
        'title': "Color Tattoos",
        'description': "Vibrant hues and intricate details bring your vision to life.",
        'image': svc_img_2,
    },
    {
        'id': 3,
        'title': "Custom Tattoo Designs",
        'description': "Collaborate with our artists to create your unique masterpiece.",
        'image': svc_img_3,
    },
]

export const MEMBERS = [
    {
        'id': 1,
        'name': "Marvin McKinney",
        'position': "Piercing Specialist",
        'image': img_1,
    },
    {
        'id': 2,
        'name': "Esther Howards",
        'position': "Watercolor Tattoo Artist",
        'image': img_2,
    },
    {
        'id': 3,
        'name': "Leslie Alexander",
        'position': "Lead Tattoo Artist",
        'image': img_3,
    },
]
