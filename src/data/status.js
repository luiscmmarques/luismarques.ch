// ============================================================
// Single source of truth for the whole site.
// Edit this file, push, done. No other file needs touching.
// House rule: public facts only. Job titles, cities, years.
// No customers, no internals, no phone numbers, no drama.
// ============================================================

export const person = {
  name: 'Luís Marques',
  title: 'Technical Account Manager @ Amazon Web Services',
  // Official description of what a TAM actually does, for the curious.
  titleUrl: 'https://aws.amazon.com/premiumsupport/tam-engagement/',
  location: 'Martigny, Switzerland',
  region: 'eu-alps-1', // not a real region. yet.
  photo: '/luis-sm.jpg', // resized for the page; the full /luis.jpg is used for link previews

  day1Start: '2022-09-01', // first day at AWS. It has been Day 1 ever since.
  careerStart: 2003, // first year of the work journey, used in the footer copyright.
  tagline:
    'Polyvalent problem-solver with 20+ years of turning “it’s broken” into “it works, don’t touch it”.',
  disclaimers: [
    'Everything on this page is my own content, written on my own time. Opinions, jokes and questionable metaphors are mine alone and do not represent my employer or anything related to my work.',
    'The ideas are mine. An AI occasionally helps me debug the wording, since English is roughly my third language.',
    'This is a parody of a status page. No SLAs were harmed in the making.',
    'Analytics: this site uses GoatCounter, a privacy-friendly counter with no cookies. It records anonymous page views and which links get clicked, mostly to answer the question "does anyone actually visit this". Nothing personal is stored, which is why there is no cookie banner.',
  ],
};

export const links = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/luiscmmarques' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/luiscmmarques' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/luiscmmarques' },
];

// Privacy-friendly analytics via GoatCounter (goatcounter.com): no cookies,
// no personal data, no consent banner needed. Sign up and claim this exact
// site code (or change it here). Set to '' to disable analytics entirely.
export const analytics = {
  goatcounter: 'luismarques',
};

// Escalation paths. Pick yours according to severity and familiarity.
export const channels = [
  {
    name: 'Ping',
    description: 'ICMP is disabled for security reasons. Email works though.',
    sla: 'Response time: a few business coffees.',
    cta: 'Send email',
    icon: 'email',
    href: 'mailto:hi@luismarques.ch',
  },
  {
    name: 'You know me professionally',
    description: 'Cloud, eCommerce, or “quick question” that never is.',
    sla: 'SLA: business hours, Swiss punctuality.',
    cta: 'Open LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/luiscmmarques',
  },
  {
    name: 'You know me personally',
    description: 'Mountains, a dachshund, and the occasional proof I leave the terminal.',
    sla: 'Best-effort delivery. No SLA whatsoever.',
    cta: 'Open Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/luiscmmarques',
  },
];

// status: 'operational' | 'degraded' | 'elevated' | 'maintenance'
export const components = [
  {
    name: 'Cloud advisory',
    status: 'operational',
    note: 'Answering “it depends” with 99.99% consistency.',
  },
  {
    name: 'eCommerce expertise',
    status: 'operational',
    note: 'Legacy support mode. Magento memories retained for compliance reasons.',
  },
  {
    name: 'Languages',
    status: 'operational',
    note: 'PT native · EN fluent · FR fluent · ES still in beta.',
  },
  {
    name: 'Coffee intake',
    status: 'elevated',
    note: 'By design. Two years at Nespresso left permanent configuration changes.',
  },
  {
    name: 'Sarcasm',
    status: 'operational',
    note: '100% uptime since initial boot. Cannot be disabled.',
  },
  {
    name: 'Weekends',
    status: 'maintenance',
    note: 'Scheduled maintenance windows: hiking, family, and walking a dachshund whose legs do not match the terrain. The Alps are the runbook.',
  },
];

// Career history, rendered as an incident log. Newest first.
export const incidents = [
  {
    period: 'Since 2022',
    title: 'Migrated to AWS, the employer this time, not just the cloud',
    severity: 'resolved',
    org: 'Amazon Web Services · Geneva, CH',
    role: 'Technical Account Manager',
    entries: [
      'Zero-downtime migration from consulting to cloud advisory.',
      'Now professionally invested in other people’s architectures staying up.',
      'Monitoring: enabled. Meetings: auto-scaling.',
    ],
  },
  {
    period: '2018 to 2022',
    title: 'Failover to agency life',
    severity: 'resolved',
    org: 'SQLI · Lausanne, CH',
    role: 'Magento Developer → Tech Lead & Technical Project Manager',
    entries: [
      'Promoted from debugging code to debugging projects, and occasionally humans.',
      'Led local and nearshore teams on Adobe Commerce, standard and headless.',
      'Deprecated: writing PHP at 2am. Mostly.',
    ],
  },
  {
    period: '2016 to 2018',
    title: 'Deployed to Nespresso. What else?',
    severity: 'resolved',
    org: 'Nestlé Nespresso · Lausanne, CH',
    role: 'eCommerce Consultant (SAP Hybris)',
    entries: [
      'Rolled out storefronts to markets worldwide, cross-channel and cross-platform.',
      'Learned that enterprise Java and espresso pair surprisingly well.',
      'Side effect: coffee intake permanently reclassified as “elevated”.',
    ],
  },
  {
    period: '2012 to 2016',
    title: 'Self-hosted mode: freelancing',
    severity: 'resolved',
    org: 'Independent · Valais, CH (remote for DE clients)',
    role: 'eCommerce Consultant & Technical Lead',
    entries: [
      'Ran eCommerce platforms, campaigns and analytics for European retailers.',
      'One-person on-call rotation. Escalation path: also me.',
      'Shipped a PrestaShop module to the public marketplace, because why not.',
    ],
  },
  {
    period: '2003 to 2012',
    title: 'Initial deployment: Portugal',
    severity: 'resolved',
    org: 'QitSystem · Coimbra & Seia, PT',
    role: 'Web Developer & SysAdmin',
    entries: [
      'Bespoke PHP/MySQL websites, eCommerce, hybrid Windows/Linux networks.',
      'The era of fixing computers for everyone, including the neighbours.',
      'Root cause of everything that followed.',
    ],
  },
  {
    period: 'A while ago',
    title: 'Initial boot',
    severity: 'resolved',
    org: 'Portugal',
    role: 'v1.0.0',
    entries: [
      'Exact timestamp lost in a log rotation. Auditors were told “it was a while ago”.',
      'Shipped with bugs. Still patching.',
    ],
  },
];

// Yearly "uptime bars", one per year, hover for context.
// era controls the bar colour; label is the tooltip.
export const eras = [
  { from: 2003, to: 2011, era: 'qitsystem', name: 'QitSystem', label: 'QitSystem · web dev & sysadmin · Portugal' },
  { from: 2012, to: 2015, era: 'freelance', name: 'Freelance', label: 'Freelance · eCommerce consulting · Valais' },
  { from: 2016, to: 2017, era: 'nespresso', name: 'Nespresso', label: 'Nespresso · eCommerce · Lausanne' },
  { from: 2018, to: 2021, era: 'sqli', name: 'SQLI', label: 'SQLI · tech lead · Lausanne' },
  { from: 2022, to: new Date().getFullYear(), era: 'aws', name: 'AWS', label: 'AWS · Technical Account Manager · Geneva' },
];
