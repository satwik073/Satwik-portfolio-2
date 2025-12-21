import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Team Member',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Colleague',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Collaborator',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Mentor',
  },
]

const brandList = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'React.js',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Next.js',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Node.js',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'TypeScript',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'PostgreSQL',
  },
]

const innovationList = [
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Full-Stack\nDevelopment',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'React.js &\nNext.js',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Node.js &\nExpress.js',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'PostgreSQL &\nMongoDB',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Java &\nTypeScript',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'Arobix: Enterprise Design Studio',
    tag: ['Next.js', 'Prisma', 'MySQL', 'Cloudflare'],
    link: 'https://github.com/satwik073',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Priscus: AI Project Analysis Platform',
    tag: ['React Flow', 'Kanban', 'MCP Server', 'Cursor IDE'],
    link: 'https://priscus.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Product Information Management (PIM)',
    tag: ['Ag-Grid', 'SSRM', 'Real-time Sync', '10K+ SKUs'],
    link: 'https://github.com/satwik073',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'iOS Assistive Technology App',
    tag: ['iOS', 'Accessibility', 'Braille Alternative', '300+ Students'],
    link: 'https://github.com/satwik073',
  },
]

const creativeMindList = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'WizCommerce, Gurugram',
    position: 'SDE 1 | July 2025 - Present',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Infosys, Mysuru',
    position: 'App Developer Intern | May - June 2024',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Chitkara University',
    position: 'B.Tech CSE | 2021 - 2025',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Springer Publication',
    position: 'Lead Author | Research Paper',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
]

const WebResultTagList = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Innovation',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Scalability',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Performance',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Freelance',
    plan_descp: 'For startups and businesses needing scalable full-stack development solutions',
    plan_price: 'Contact',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Full-Stack Web Development',
      'React.js & Next.js Applications',
      'Node.js Backend APIs',
      'Database Design & Optimization',
      'Real-time Data Sync',
      'Post-launch Support',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Full-Time',
    plan_descp: 'Open to SDE roles at innovative tech companies building impactful products',
    plan_price: 'Open',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Enterprise-grade Solutions',
      'High-performance Systems',
      'Agile Team Collaboration',
      'Code Reviews & Best Practices',
      'System Architecture Design',
      'Mentorship & Leadership',
    ],
  },
]

const faqList = [
  {
    faq_que: 'What technologies do you specialize in?',
    faq_ans:
      'I specialize in JavaScript, TypeScript, Java, React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and have experience with Kafka, Prisma, Ag-Grid, and performance monitoring tools like Sentry and Grafana.',
  },
  {
    faq_que: 'What is your professional experience?',
    faq_ans:
      'I am currently working as a Software Development Engineer 1 at WizCommerce, Gurugram, where I built a complete PIM system handling 10,000+ SKUs daily for 85+ US clients. Previously, I interned at Infosys as an Application Developer and Scrum Master.',
  },
  {
    faq_que: 'What notable projects have you built?',
    faq_ans:
      'I have built Arobix - an Enterprise Design Studio Platform with subdomain hosting and funnel building tools, and Priscus - an AI-Powered Project Analysis Platform with automated Kanban boards and React Flow workflow generators. I also contributed to an iOS assistive technology app serving 300+ visually impaired students.',
  },
  {
    faq_que: 'Do you have any research publications?',
    faq_ans:
      'Yes, I am a Lead Author of "Blockchain and IoT for Healthcare: A Systematic Analysis" published in Springer\'s Algorithms for Intelligent Systems. The paper explores blockchain integration with IoT for healthcare systems.',
  },
  {
    faq_que: 'What is your educational background?',
    faq_ans:
      'I completed my Bachelor of Technology in Computer Science and Engineering from Chitkara University, Chandigarh (2021-2025) with a CGPA of 9.41.',
  },
  {
    faq_que: 'How can I get in touch with you?',
    faq_ans:
      'You can reach me via email at satwikkanhere2003@gmail.com, connect on LinkedIn at linkedin.com/in/satwikkanhere0730, or call me at +91-6284486063. You can also check out my work on GitHub at github.com/satwik073.',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Springer Publication',
    title:
      'Lead Author - "Blockchain and IoT for Healthcare: A Systematic Analysis" in Algorithms for Intelligent Systems.',
    year: '2024',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Social Impact Initiative',
    title: 'Built iOS assistive technology app for visually impaired students, deployed across schools serving 300+ students in Chandigarh.',
    year: '2024',
    url: 'https://github.com/satwik073',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Enterprise Solution',
    title:
      'Built PIM system at WizCommerce processing 50,000+ product updates monthly with 99.8% uptime for 85+ US clients.',
    year: '2025',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
