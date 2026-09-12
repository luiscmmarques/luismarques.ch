// ============================================================
// Single source of truth for the whole site.
// Edit this file, push, done. No other file needs touching.
// House rule: public facts only. Job titles, cities, years.
// No customers, no internals, no phone numbers, no drama.
// ============================================================

export const person = {
  name: 'Luís Marques',
  title: 'Technical Account Manager (TAM) @ Amazon Web Services (AWS)',
  // Official description of what a TAM actually does, for the curious.
  titleUrl: 'https://aws.amazon.com/premiumsupport/tam-engagement/',
  location: 'Martigny, Switzerland',
  region: 'eu-alps-1', // not a real region. yet.
  photo: '/luis-sm.jpg', // resized for the page; the full /luis.jpg is used for link previews
  photoWebp: '/luis-sm.webp', // smaller, served first; browsers without WebP fall back to the jpg

  day1Start: '2022-09-01', // first day at AWS. It has been Day 1 ever since.
  careerStart: 2003, // first year of the work journey, used in the footer copyright.
  tagline:
    'Polyvalent problem-solver with 20+ years of turning “it’s broken” into “it works, don’t touch it”.',
  disclaimers: [
    'Everything on this page is my own content, written on my own time. Opinions, jokes and questionable metaphors are mine alone and do not represent my employer or anything related to my work.',
    'The ideas are mine. This page was built together with Claude Code, which also helps me debug the wording, since English and French are still in a race condition for second language.',
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
    icon: 'cloud',
    status: 'operational',
    note: 'Answering “it depends” with 99.99% consistency.',
  },
  {
    name: 'eCommerce expertise',
    icon: 'cart',
    status: 'operational',
    note: 'Legacy support mode. Magento memories retained for compliance reasons.',
  },
  {
    name: 'Languages',
    icon: 'globe',
    status: 'operational',
    note: 'PT native · EN fluent · FR fluent · ES still being promoted from alpha to beta.',
  },
  {
    name: 'Availability zones',
    icon: 'pin',
    status: 'operational',
    note: 'Three cantons served so far: Valais, Vaud and Geneva. Cross-zone latency: one train ride.',
    cantons: ['vs', 'vd', 'ge'],
  },
  {
    name: 'Coffee intake',
    icon: 'coffee',
    status: 'elevated',
    note: 'By design. A Nespresso stint left permanent configuration changes.',
  },
  {
    name: 'Sarcasm',
    icon: 'zap',
    status: 'operational',
    note: '100% uptime since initial boot. Cannot be disabled.',
  },
  {
    name: 'Weekends',
    icon: 'compass',
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
    org: 'Amazon Web Services (AWS) · Geneva, CH',
    flag: 'ch',
    canton: 'ge',
    role: 'Technical Account Manager (TAM)',
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
    flag: 'ch',
    canton: 'vd',
    role: 'Magento Developer → Tech Lead & Technical Project Manager',
    entries: [
      'New employer, same client for a while: the Nespresso engagement carried on into 2018, which is why the two incidents overlap.',
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
    flag: 'ch',
    canton: 'vd',
    role: 'eCommerce Consultant (SAP Hybris)',
    entries: [
      'On site as an external consultant, so the engagement outlived the contract that started it.',
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
    flag: 'ch',
    canton: 'vs',
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
    flag: 'pt',
    role: 'Part-time Computer Technician → Web Developer & SysAdmin',
    entries: [
      'Booted in part-time mode while studying: selling machines, fixing machines, then repairing the network the machines had upset.',
      'Promoted to full deployment: bespoke PHP/MySQL sites and eCommerce for clients in Portugal, Italy and Germany.',
      'Same badge, second hat: hybrid Windows/Linux networks, ERP rollouts, and an intranet nobody ever filed a ticket to thank me for.',
      'The era of fixing computers for everyone, including the neighbours. Root cause of everything that followed.',
    ],
  },
  {
    period: '1988',
    title: 'Initial boot',
    severity: 'resolved',
    org: 'Portugal',
    flag: 'pt',
    role: 'v1.0.0',
    entries: [
      'Cold start in Portugal, no documentation provided.',
      'Shipped with bugs. Still patching.',
    ],
  },
];

// Yearly "uptime bars", one per year, hover for context.
// Each era only declares the year it started. It then runs until the next era
// begins, and the last one runs to today, so these years are the same numbers
// as the incident periods above and cannot drift away from them.
// era controls the bar colour; label is the tooltip.
export const eras = [
  { start: 2003, era: 'qitsystem-pt', name: 'QitSystem (part-time)', label: 'QitSystem · part-time computer technician, studies in parallel · Portugal' },
  { start: 2010, era: 'qitsystem', name: 'QitSystem', label: 'QitSystem · web dev & sysadmin · Portugal' },
  { start: 2012, era: 'freelance', name: 'Freelance', label: 'Freelance · eCommerce consulting · Valais' },
  { start: 2016, era: 'nespresso', name: 'Nespresso', label: 'Nespresso · eCommerce consultant · Lausanne' },
  { start: 2018, era: 'sqli', name: 'SQLI', label: 'SQLI · tech lead · Lausanne' },
  { start: 2022, era: 'aws', name: 'AWS', label: 'AWS · Technical Account Manager (TAM) · Geneva' },
];

// Years that ran two engagements at once. Those bars render split, half of each colour.
// 2018: the employer changed, the Nespresso engagement did not, so the year belongs to both.
export const overlaps = [
  { from: 2018, to: 2018, era: 'nespresso', label: 'Nespresso engagement continued through the employer change' },
];
