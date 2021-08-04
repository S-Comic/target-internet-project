// An array of the questions. 
window.questionArray = [
    "Our leaders and managers have a clear and shared understanding of how digital technology is impacting our business.",
    "We have clearly articulated the business need to transform into a truly digital business.",
    "Everyone in our organization has a shared understanding of what ‘being digital’ means for our business.",
    "Leaders and managers understand what digital transformation means for their own parts of the business.",
    "We have a clearly articulated vision for our digital transformation that has been shared and is understood across our organization.",
    "Our CEO is a key ambassador for digital in our organization, constantly reinforcing our ambitions, getting personally involved and role-modelling our desired ways of working and behaviours.",
    "CEO continually challenges leaders on their commitment to our digitalagenda, aligns managers throughout the business and resolves conflicts.",
    "Building our digital capability is a shared objective owned by all of our leadership team.",
    "Our digital goals and KPIs are cascaded beyond our leadership team into all of our functions.",
    "Resources, budgets and plans throughout the organization reflect our digital ambitions and priorities.",
    "We are fast-paced and decisive when it comes to new digital initiatives.",
    "Wherever possible, decision-making on new digital initiatives is delegated to project teams, rather than senior managers.",
    "We empower project teams by delegating decision-making and remove hierarchies or sign-off delays wherever possible.",
    "We work on a test-and-learn basis, regularly learning from testing with customers and iterating as needed.",
    "We are skilled at working in cross-functional teams on digital projects to identify barriers and blockers to progress, and collaborating to resolve them.",
    "Our working environment promotes collaboration.",
    "We use open and co-working spaces to help our people to work across teams and functions to improve pace and speed of working.",
    "We use our working environment to reinforce our digital vision and update colleagues on progress and performance.",
    "We use digital technology in the workplace to improve the day-to-day employee working experience.",
    "We have adapted our working environment to help us attract great digital talent.",
    "We have clearly articulated the skills and talent needed in our business to make our digital ambitions a reality.",
    "We have overhauled our recruitment process to give us access to a wider pool of talent, and to identify the best digital candidates with greater certainty.",
    "We use a diverse and innovative range of learning approaches beyond the classroom, to appeal to a range of different learning types and take advantages of advances in learning technology.",
    "Our employees take their learning and development seriously, and work together with management to ensure it is given the time it warrants.",
    "We encourage experimentation and an environment where failure is not stigmatized, to help learning transfer to the business as soon as possible.",
    "We have a clear and distinctive strategic (or brand) positioning that is universally understood within our business.",
    "Our strategic positioning goes beyond communications and informs how we design experiences with our business.",
    "The digital culture we aspire to build is strongly aligned to our strategic positioning.",
    "Our strategic positioning informs how we design digital user journeys within our business.",
    "When we create content to engage with our customers, it authentically reflects our core purpose as a business.",
    "We tailor our communications about our digital ambitions and digital performance to make it relevant and meaningful to different departments and at different levels.",
    "We maintain an ongoing commitment to communicating our digital vision and reiterating our change priorities.",
    "We have a network of digital evangelists in our business who help us to share our work to become a truly digital business.",
    "We proactively seek out and act on ideas, feedback and constructive criticism on our digital agenda from colleagues throughout the business.",
    "We use digital technology effectively in our internal communications to help role-model behavioursand ways of working.",
    "Our IT team works in close partnership with those leading our digital transformation efforts.",
    "We have a single view of our customer and ensure all of our systems are integrated.",
    "Our IT team helps to educate our leaders and the wider business on the implications of our technology choices.",
    "Technology (systems and infrastructure) decisions are made collaboratively within our business.",
    "Our IT team is seen as an internal service provider, rather than a department focused on risk mitigation, and internal customer satisfaction is a key measure of its performance.",
    "We have identified and mapped the key internal processes that impact our digital agenda.",
    "We use internal service level agreements to ensure interdependencies between teams are understood and work in synch.",
    "We review and iterate our governance and sign-off processes regularly to ensure they remain fit for purpose.",
    "Our internal processes are trained into our teams and used consistently, rather than left languishing in a drawer somewhere.",
    "We use workplace experimentation to test and refine new processes and ways of working to help mitigate risk.",
    "Our organization design is optimal for supporting a digital transformation.",
    "Our internal structure helps our efforts to build digital capability, more than it hinders it.",
    "The leadership of our digital agenda is optimal for supporting a digital transformation (we have the right role, in the right place in the business).",
    "Our digital team(s) are well integrated into the business, regardless of how we are structured, and are not perceived as a silo.",
    "We have a set of routines that ensure information and communication on our digital developments flows around the organization in a timely way, without interruption.",
    "We share knowledge and collaborate with other members of our value chain on digital developments.",
    "We work closely with key customers to inform our digital agenda.",
    "Our digital people are well networked and proactively seek to build connections with people and businesses that can add value to our digital efforts.",
    "We create (and protect) time for our people to get out of the business and access learning and information-gathering events.",
    "We proactively engage with start-ups and the digital community to help educate us on new thinking and developments.",
    "Our core business objectives are clearly articulated in ways which make them measurable and relevant to our digital agenda.",
    "We can connect the impact of our investment in digital initiatives on primary customer or market objectives.",
    "Our digital analytics are aligned to clear campaign objectives, which are connected to overarching business goals.",
    "Our finance team works in partnership with digital, marketing and other teams to improve the measurability of our investments and connect metrics to our primary customer or market objectives.",
    "We have a single, comprehensive measurement framework that helps us to understand the ROI for each of our channels.",
    "We have clear communication from our leaders that positively encourages experimentation and testing.",
    "We do not stigmatize failure and we proactively share lessons learned from our digital experimentation.",
    "Market insights are shared widely within our organization to help different teams to identify opportunities for innovation.",
    "We have clear processes in place to enable and govern experimentation, and to support a culture of managed risk.",
    "We incentivize and reward individuals and teams for developing new ideas or.",
    "We can connect the impact of our investment in digital initiatives on financial outcomes and business performance.",
    "Our finance team works in partnership with digital, marketing and other teams to improve the measurability of our investments and connect metrics to financial outcomes and business impact.",
    "We use financial impact assessments as part of developing business cases for investments in new digital initiatives.",
    "Where financial measurability is not possible, we collaborate effectively to agree alternative, robust performance evaluation.",
    "Financial impact is not the only criteria we use to evaluate investment in new digital initiatives –it is important, but we take a balanced approach so as not to stifle innovation and experimentation."
];

// The list of question categories 
window.labels = [
    'Definition and Vision',
    'Leadership',
    'Agility',
    'Environment',
    'Skills',
    'Strategic Positioning',
    'Communication',
    'Technology',
    'Governance',
    'Structure',
    'Connections',
    'Measurement',
    'Innovation',
    'Financial'
];

/* 
ICONS

<i class="fa-solid fa-eye"></i> = Vision
<i class="fa-solid fa-crown"></i> = Leadership
<i class="fa-solid fa-person-running"></i> = Agility
<i class="fa-solid fa-earth-americas"></i> = Environment
<i class="fa-solid fa-users"></i> = Skills & Talent
<i class="fa-solid fa-clipboard-check"></i> = Positioning
<i class="fa-solid fa-message"></i> = Communications
<i class="fa-solid fa-gear"></i> = Technology
<i class="fa-solid fa-scale-balanced"></i> = Process
<i class="fa-solid fa-helmet-safety"></i> = Structure
<i class="fa-solid fa-handshake"></i> = Connections
<i class="fa-solid fa-ruler"></i> = Measurement
<i class="fa-solid fa-brain"></i> = Innovation
<i class="fa-solid fa-chart-line"></i> = Financial

*/