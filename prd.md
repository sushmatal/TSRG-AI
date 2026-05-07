# Product Requirements Document (PRD)
**Project Name:** TSRG Website (The Schreiber Research Group)
**Version:** 1.0

## 1. Introduction
The Schreiber Research Group (TSRG) is a Colorado-based nonprofit organization dedicated to improving outcomes related to substance misuse through research, education, and community-driven initiatives. This project serves as their primary public-facing platform to share their story, highlight their impact, disseminate research findings, and connect with community partners and funders.

## 2. Objectives
- **Build Awareness:** Communicate TSRG's mission, vision, and core values clearly to a broad audience.
- **Showcase Impact:** Highlight real-world stories and measurable outcomes resulting from TSRG's work in rural and urban communities.
- **Disseminate Knowledge:** Provide a platform for publishing research, insights, blogs, and podcasts related to substance use and community resilience.
- **Drive Engagement:** Encourage donations and partnership inquiries.
- **Modern & Professional Web Presence:** Deliver a premium, responsive, and accessible user experience with dynamic animations and modern design aesthetics.

## 3. Target Audience
- **Community Leaders & Coalitions:** Seeking partnerships for community needs assessments and solutions.
- **Funders & Donors:** Looking to support evidence-based, community-driven initiatives.
- **Public Health Professionals & Researchers:** Interested in qualitative/quantitative research and methodologies regarding substance use.
- **General Public:** Seeking information, resources, and inspiring stories of impact and recovery.

## 4. Key Features & Pages

### 4.1 Home Page (`HomePage.jsx`)
- **Hero Section:** High-impact visual introduction with a clear value proposition.
- **Story Section:** Overview of mission, vision, and values (Trust, Service, Research, Guidance).
- **Impact Section:** "Stories of Change" showcasing individuals affected by TSRG's work.
- **Testimonials & Partners:** Social proof from community partners and a grid of supporter logos.
- **Recent Updates:** A preview of recent blog posts and news.

### 4.2 About Page (`AboutPage.jsx`)
- **Who We Are:** In-depth narrative about TSRG's history and backbone infrastructure approach.
- **Impact Metrics:** Key statistics (e.g., Year Founded, Substances Studied, Community Partners).
- **Explore Our Work:** Interactive breakdown of focus areas (Opioids, Benzodiazepines, Alcohol, Marijuana, Vaping).
- **Our Solutions (Services):** Detailed breakdown of the TSRG methodology (Name the Problem, Research Solutions, Take Action, Confirm Progress).
- **How We Work:** Step-by-step process of community engagement.
- **Contact CTA:** Direct channels for partnership inquiries.

### 4.3 Research & Insights
- **Insights Page (`InsightsPage.jsx`):** A blog/news hub for TSRG updates.
- **Insight Detail (`InsightDetailPage.jsx`):** Individual article view for deep dives.
- **Research (`ResearchPage.jsx`):** A repository for evidence-based studies and methodologies.
- **Podcast (`PodcastPage.jsx`):** Dedicated area for audio content and discussions.

### 4.4 Organization & Engagement
- **Team (`TeamPage.jsx`):** Profiles of the TSRG team members and board.
- **Contact (`ContactPage.jsx`):** Forms and contact information for outreach.
- **Donate (`DonatePage.jsx`):** Seamless donation flow for supporters.
- **Dashboard (`DashboardPage.jsx`):** Potential internal or partner-facing portal for managing data or viewing advanced metrics.

## 5. Technology Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Code Quality:** ESLint

## 6. Design Guidelines
- **Premium Aesthetics:** Utilize a curated, harmonious color palette with dynamic hover effects, smooth transitions, and glassmorphism where appropriate.
- **Responsive Layouts:** Ensure full usability across mobile, tablet, and desktop viewports.
- **Accessibility:** Adhere to WCAG guidelines, ensuring semantic HTML and clear typography.

## 7. Future Considerations
- Expand the Dashboard capabilities for interactive community data visualization.
- Automate content updates via a Headless CMS (e.g., Sanity or Contentful).
- Multi-language support to reach a broader demographic within Colorado and beyond.
