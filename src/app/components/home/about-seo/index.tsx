'use client'

/**
 * SEO Content Section
 * Adds valuable content for search engines while being visually minimal
 * Targets 400+ words of keyword-rich, natural content
 */
function AboutSEO() {
  return (
    <section className="py-16 bg-dark_black/[0.02] dark:bg-white/[0.02]" aria-labelledby="about-seo-heading">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-seo-heading" className="text-3xl md:text-4xl font-medium mb-8 text-center">
            About Satwik Kanhere - Full Stack Developer
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-dark_black/70 dark:text-white/70 space-y-6">
            <p>
              <strong>Satwik Kanhere</strong> (also known as <em>Sat</em>) is a skilled Full Stack Developer and 
              Software Development Engineer based in Gurugram, India. With expertise in modern web technologies 
              including React.js, Next.js, Node.js, TypeScript, and JavaScript, Satwik specializes in building 
              high-performance enterprise applications that scale to serve thousands of users.
            </p>
            
            <p>
              Currently working as an SDE at <strong>WizCommerce</strong>, Satwik has built a complete Product 
              Information Management (PIM) system from scratch. This enterprise solution handles over 10,000 SKUs 
              daily and serves 85+ US clients with an impressive 99.8% uptime. The system processes more than 
              50,000 product updates monthly, demonstrating Satwik's ability to deliver robust, scalable solutions.
            </p>
            
            <h3 className="text-2xl font-medium mt-8 mb-4">Technical Expertise</h3>
            <p>
              Satwik's technical stack includes frontend technologies like React.js, Next.js, and TypeScript, 
              combined with backend expertise in Node.js, Express.js, and database technologies including 
              PostgreSQL, MongoDB, and Prisma ORM. He has extensive experience with Ag-Grid for complex data 
              visualization, implementing Server-Side Row Model (SSRM) to display 500,000+ records efficiently.
            </p>
            
            <h3 className="text-2xl font-medium mt-8 mb-4">Professional Experience</h3>
            <p>
              Before joining WizCommerce, Satwik completed an internship at <strong>Infosys</strong> in Mysuru, 
              where he worked as an Application Developer and Scrum Master. During this role, he led daily 
              standups and sprint planning for a 9-member agile team, successfully delivering 4 sprint milestones 
              on schedule. This experience honed his leadership and project management skills alongside technical 
              development.
            </p>
            
            <h3 className="text-2xl font-medium mt-8 mb-4">Education and Research</h3>
            <p>
              Satwik holds a <strong>B.Tech in Computer Science and Engineering</strong> from Chitkara University, 
              Chandigarh, graduating with an exceptional CGPA of 9.41. He is also a published researcher, having 
              authored "Blockchain and IoT for Healthcare: A Systematic Analysis" published in Springer's 
              Algorithms for Intelligent Systems series.
            </p>
            
            <h3 className="text-2xl font-medium mt-8 mb-4">Why Hire Satwik?</h3>
            <p>
              Whether you need a React developer for your startup, a Node.js expert for backend development, 
              or a full-stack engineer for enterprise solutions, Satwik brings a proven track record of 
              delivering high-quality software. His combination of technical excellence, attention to detail, 
              and ability to work in agile environments makes him an ideal choice for companies looking to 
              build scalable web applications.
            </p>
            
            <p>
              <strong>Available for:</strong> Freelance projects, contract work, and full-time opportunities. 
              Remote-friendly and experienced in collaborating with international teams across different time zones.
            </p>
            
            <div className="mt-8 p-6 bg-purple_blue/5 dark:bg-purple_blue/10 rounded-xl">
              <h3 className="text-xl font-medium mb-3">Contact Information</h3>
              <ul className="space-y-2">
                <li><strong>Email:</strong> satwikkanhere2003@gmail.com</li>
                <li><strong>Phone:</strong> +91-6284486063</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/satwikkanhere0730</li>
                <li><strong>GitHub:</strong> github.com/satwik073</li>
                <li><strong>Location:</strong> Gurugram, Haryana, India (Available Worldwide)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSEO

