import { NextResponse } from "next/server";

const headerData = [
    { label: 'About', href: '/#aboutus' },
    { label: 'Skills', href: '/#services' },
    { label: 'Projects', href: '/#work' },
    { label: 'Experience', href: '/#team' },
    { label: 'Achievements', href: '/#awards' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Satwik",
        tagline: "Software Development Engineer building scalable enterprise solutions. Passionate about creating high-performance applications that drive real business impact.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://github.com/satwik073"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in/satwikkanhere0730"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://github.com/satwik073"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://satwik073.github.io/SatwikPortFolio/"
            }
        ]
    },
    sitemap: {
        name: "Navigation",
        links: [
            { name: "Contact Me", url: "/contact" },
            { name: "About", url: "/#aboutus" },
            { name: "Projects", url: "/#work" },
            { name: "Skills", url: "/#services" },
            { name: "Achievements", url: "/#awards" }
        ]
    },
    otherPages: {
        name: "Resources",
        links: [
            { name: "GitHub", url: "https://github.com/satwik073" },
            { name: "LinkedIn", url: "https://linkedin.com/in/satwikkanhere0730" },
            { name: "Portfolio", url: "https://satwik073.github.io/SatwikPortFolio/" },
            { name: "Documentation", url: "/documentation" }
        ]
    },
    contactDetails: {
        name: "Get In Touch",
        address: "Chandigarh, India",
        email: "satwikkanhere2003@gmail.com",
        phone: "+91-6284486063"
    },
    copyright: "©2025 Satwik Kanhere. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};
