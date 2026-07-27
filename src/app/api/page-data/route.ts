import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/satwik.jpg',
    title: 'Satwik Kanhere',
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
    title: 'Assembly — Enterprise Design Studio',
    tag: ['Next.js', 'Prisma', 'MySQL', 'Cloudflare'],
    link: 'https://assembly-stack.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Flux — AI-Powered Code IDE',
    tag: ['Next.js', 'WebContainers', 'MCP', 'AI'],
    link: 'https://flux-code.vercel.app',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Enterprise PIM — WizCommerce',
    tag: ['React', 'TypeScript', 'PIM', '100K+ SKUs'],
    link: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'iOS Assistive Technology — with Apple',
    tag: ['iOS', 'Accessibility', 'Apple', '300+ Students'],
    link: 'https://linkedin.com/in/satwikkanhere0730',
  },
]

const creativeMindList = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'WizCommerce, Gurugram',
    position: 'SDE 1 | July 2024 - Present',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Infosys, Mysuru',
    position: 'App Developer Intern & Scrum Master | May - June 2024',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Chitkara University',
    position: 'B.Tech CSE | 2021 - 2025 | 9.41 CGPA',
    twitterLink: 'https://github.com/satwik073',
    linkedinLink: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Apple Collaboration',
    position: 'Assistive Tech | 300+ Students',
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
      'Java · Spring Boot · Hibernate',
      'React.js & Next.js Applications',
      'Node.js Backend APIs',
      'Database Design & Optimization',
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
      'Java, Spring Boot, Hibernate, JPA, JavaScript (ES6+), TypeScript, SQL; React.js, Next.js, React Native, Tailwind CSS, Ag-Grid; Node.js, Express.js, REST APIs, Kafka; MongoDB, MySQL; GCP CDN, Cloudflare, Sentry, Grafana; eBizCharge, Finix, ACH, CyberSource; Git, GitHub, Docker, Postman, Jira.',
  },
  {
    faq_que: 'What is your professional experience?',
    faq_ans:
      'Software Development Engineer 1 at WizCommerce (Jul 2024–Present): CRM Kanban, PIM for 100K+ SKUs, Ag-Grid SSRM (500K+ records), payments, 65% faster loads for 120+ clients. Previously Application Developer Intern & Scrum Master at Infosys Mysuru (May–Jun 2024).',
  },
  {
    faq_que: 'What notable projects have you built?',
    faq_ans:
      'Assembly (assembly-stack.vercel.app) — Enterprise Design Studio with Next.js, Prisma, MySQL, Cloudflare. Flux (flux-code.vercel.app) — AI code IDE with WebContainers and MCP. Plus WizCommerce PIM, CRM Kanban, and an Apple-collaborated iOS assistive app for 300+ students.',
  },
  {
    faq_que: 'Do you have any research or leadership work?',
    faq_ans:
      'Yes. Led an iOS assistive learning app in collaboration with Apple Asia Head Ashish Chowdhary — modern Braille alternative supporting 300+ visually impaired students in Chandigarh.',
  },
  {
    faq_que: 'What is your educational background?',
    faq_ans:
      'Bachelor of Technology in Computer Science and Engineering from Chitkara University Institute of Engineering and Technology, Chandigarh (2021–2025), CGPA 9.41.',
  },
  {
    faq_que: 'How can I get in touch with you?',
    faq_ans:
      'Email satwikkanhere2003@gmail.com, LinkedIn linkedin.com/in/satwikkanhere0730, GitHub github.com/satwik073, phone +91 6284486063, resume satwik073.github.io/SatwikPortFolio/.',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Performance at Scale',
    title:
      'Content hashing, cache-busting, and CDN optimization with GCP and Cloudflare — reduced page load times by over 65% for 120+ enterprise clients.',
    year: '2024–Present',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Assistive Technology · Apple',
    title:
      'Led iOS assistive learning app with Apple Asia Head Ashish Chowdhary — supporting 300+ visually impaired students in Chandigarh.',
    year: 'Leadership',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Data-Intensive UIs',
    title:
      'Developed and optimized 10+ enterprise apps with Ag-Grid SSRM, handling datasets exceeding 500K+ records.',
    year: '2024–Present',
    url: 'https://linkedin.com/in/satwikkanhere0730',
  },
]


export const dynamic = 'force-static'
export const revalidate = false

export const GET = async () => {
  return NextResponse.json(
    {
      avatarList,
      brandList,
      innovationList,
      onlinePresenceList,
      creativeMindList,
      WebResultTagList,
      startupPlanList,
      faqList,
      achievementsList,
    },
    {
      headers: {
        'Cache-Control':
          'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=31536000, stale-if-error=31536000',
        'CDN-Cache-Control':
          'public, max-age=31536000, stale-while-revalidate=31536000, stale-if-error=31536000',
        'Vercel-CDN-Cache-Control':
          'public, max-age=31536000, stale-while-revalidate=31536000, stale-if-error=31536000',
      },
    }
  )
}
