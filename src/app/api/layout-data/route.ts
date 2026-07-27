import { NextResponse } from "next/server";

const headerData = [
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/#services' },
    { label: 'Projects', href: '/#work' },
    { label: 'Experience', href: '/#team' },
    { label: 'Achievements', href: '/#awards' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Satwik",
        tagline: "Full-stack SDE 1 at WizCommerce. Java, Spring Boot, Hibernate, React, Next.js, TypeScript — enterprise products for 120+ clients. B.Tech CSE, Chitkara University (9.41 CGPA).",
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
            { name: "About", url: "/about" },
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
            { name: "About", url: "/about" }
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
