export type StaticPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
  updated?: string;
};

export const staticPages: Record<string, StaticPageContent> = {
  integrations: {
    slug: 'integrations',
    eyebrow: 'Product',
    title: 'Integrations',
    description: 'Connect Nexus to the tools your team already uses, so data flows automatically instead of being copied by hand.',
    sections: [
      { heading: 'Popular integrations', body: 'Nexus connects with tools across sales, support, and engineering, including Slack, Gmail, Notion, Jira, and GitHub, so updates in one place show up everywhere else automatically.' },
      { heading: 'How it works', body: 'Each integration is a one-click connection from your Nexus dashboard. Once connected, Nexus keeps data in sync in both directions without any manual exporting or importing.' },
      { heading: 'Building your own', body: 'If you need something custom, our API and webhooks let your engineering team build a private integration in an afternoon.' },
    ],
  },
  changelog: {
    slug: 'changelog',
    eyebrow: 'Product',
    title: 'Changelog',
    description: 'Every update, improvement, and fix we ship, in one place.',
    sections: [
      { heading: 'Latest release', body: 'Faster dashboard load times, a redesigned notifications panel, and improved mobile responsiveness across the app.' },
      { heading: 'Recent improvements', body: 'Bulk actions on the tasks table, dark mode support, and better error messages when a form submission fails.' },
      { heading: 'Bug fixes', body: 'Fixed an issue where timestamps displayed in the wrong timezone, and resolved a rare crash when uploading large files.' },
    ],
  },
  roadmap: {
    slug: 'roadmap',
    eyebrow: 'Product',
    title: 'Roadmap',
    description: 'A look at what we are building next, based on direct feedback from teams using Nexus every day.',
    sections: [
      { heading: 'In progress', body: 'Deeper reporting and analytics, a mobile app for iOS and Android, and expanded automation triggers.' },
      { heading: 'Planned', body: 'Custom roles and permissions, an audit log for enterprise teams, and multi-language support.' },
      { heading: 'Under consideration', body: 'AI-assisted workflow suggestions and a public API marketplace for community-built integrations.' },
    ],
  },
  'api-docs': {
    slug: 'api-docs',
    eyebrow: 'Product',
    title: 'API Docs',
    description: 'Everything you need to build on top of Nexus, from authentication to your first API call.',
    sections: [
      { heading: 'Getting started', body: 'Generate an API key from your account settings, then authenticate requests using a simple bearer token in the header.' },
      { heading: 'Core endpoints', body: 'Manage users, projects, and tasks programmatically. Every endpoint that is available in the dashboard is also available through the API.' },
      { heading: 'Rate limits', body: 'Free accounts can make up to 100 requests per minute. Higher limits are available on paid plans.' },
    ],
  },
  about: {
    slug: 'about',
    eyebrow: 'Company',
    title: 'About Nexus',
    description: 'We are building the platform we always wished existed, one that helps teams move faster without adding more tools to juggle.',
    sections: [
      { heading: 'Our mission', body: 'Teams lose hours every week switching between disconnected tools. Nexus brings the essentials into one place, so teams spend less time managing tools and more time doing the actual work.' },
      { heading: 'How we got here', body: 'Nexus started as an internal tool built to solve our own frustration with scattered workflows. After seeing how much time it saved our own team, we decided to build it for everyone.' },
      { heading: 'Where we are headed', body: 'We are focused on making Nexus the default operating layer for growing teams, expanding steadily based on what our users actually ask for.' },
    ],
  },
  'press-kit': {
    slug: 'press-kit',
    eyebrow: 'Company',
    title: 'Press Kit',
    description: 'Brand assets, logos, and background information for journalists and partners writing about Nexus.',
    sections: [
      { heading: 'Brand assets', body: 'Logo files, brand colors, and usage guidelines are available on request. Please reach out through the contact page for the full asset pack.' },
      { heading: 'Company facts', body: 'Nexus is a business platform built to help modern teams automate workflows, unify data, and scale faster, without unnecessary complexity.' },
      { heading: 'Media inquiries', body: 'For interviews, quotes, or additional information, please get in touch through our contact page and our team will respond promptly.' },
    ],
  },
  partners: {
    slug: 'partners',
    eyebrow: 'Company',
    title: 'Partners',
    description: 'We work with agencies, consultants, and technology partners to help more teams get the most out of Nexus.',
    sections: [
      { heading: 'Partner program', body: 'Our partner program offers training, co-marketing opportunities, and revenue share for agencies that implement Nexus for their clients.' },
      { heading: 'Technology partners', body: 'We collaborate closely with complementary tools to build integrations that genuinely make workflows better, not just technically possible.' },
      { heading: 'Become a partner', body: 'If you are interested in partnering with Nexus, reach out through our contact page and our partnerships team will follow up.' },
    ],
  },
  'help-center': {
    slug: 'help-center',
    eyebrow: 'Resources',
    title: 'Help Center',
    description: 'Answers to common questions, and guidance on getting the most out of Nexus.',
    sections: [
      { heading: 'Getting started', body: 'New to Nexus? Start with setting up your workspace, inviting your team, and connecting your first integration.' },
      { heading: 'Account and billing', body: 'Manage your subscription, update payment details, and understand what is included in each plan.' },
      { heading: 'Still stuck?', body: 'If you cannot find what you are looking for, reach out through our contact page and our team will help directly.' },
    ],
  },
  community: {
    slug: 'community',
    eyebrow: 'Resources',
    title: 'Community',
    description: 'Connect with other Nexus users, share workflows, and learn from how other teams are using the platform.',
    sections: [
      { heading: 'Join the conversation', body: 'Our community space is where users share tips, ask questions, and give feedback directly to the team building Nexus.' },
      { heading: 'Community events', body: 'We host periodic virtual meetups where users showcase how they use Nexus and the team shares what is coming next.' },
      { heading: 'Get involved', body: 'Whether you are just getting started or have been using Nexus for years, there is a place for you in the community.' },
    ],
  },
  tutorials: {
    slug: 'tutorials',
    eyebrow: 'Resources',
    title: 'Tutorials',
    description: 'Step-by-step guides to help you set up workflows and get real value from Nexus quickly.',
    sections: [
      { heading: 'Beginner guides', body: 'Learn how to set up your first project, invite teammates, and organize your workspace effectively.' },
      { heading: 'Advanced workflows', body: 'Explore automation rules, custom fields, and how to connect Nexus with the other tools your team relies on.' },
      { heading: 'Video walkthroughs', body: 'Prefer watching over reading? Our video tutorials cover the same ground with a guided, visual walkthrough.' },
    ],
  },
  webinars: {
    slug: 'webinars',
    eyebrow: 'Resources',
    title: 'Webinars',
    description: 'Live and recorded sessions covering best practices, new features, and how real teams use Nexus.',
    sections: [
      { heading: 'Upcoming sessions', body: 'We host regular live webinars covering everything from onboarding basics to advanced automation strategies.' },
      { heading: 'On-demand library', body: 'Missed a live session? Every webinar is recorded and made available afterward, so you can watch at your own pace.' },
      { heading: 'Request a topic', body: 'Have something specific you would like us to cover? Let us know through the contact page.' },
    ],
  },
  templates: {
    slug: 'templates',
    eyebrow: 'Resources',
    title: 'Templates',
    description: 'Ready-made workflow templates to help your team get started faster, without building everything from scratch.',
    sections: [
      { heading: 'Popular templates', body: 'Project kickoffs, sales pipelines, and support ticket workflows are among the most used templates by Nexus teams.' },
      { heading: 'Customizing a template', body: 'Every template is fully editable, so you can start from a solid foundation and adjust it to fit your exact process.' },
      { heading: 'Share your own', body: 'Built a workflow you are proud of? You can share it with the Nexus community for others to use.' },
    ],
  },
  status: {
    slug: 'status',
    eyebrow: 'Resources',
    title: 'System Status',
    description: 'Real-time status of Nexus services and a history of past incidents.',
    sections: [
      { heading: 'Current status', body: 'All Nexus systems are currently operational, including the core application, API, and integrations.' },
      { heading: 'Uptime', body: 'Nexus maintains a strong uptime track record, with transparent reporting whenever an incident does occur.' },
      { heading: 'Incident history', body: 'Past incidents, their causes, and how they were resolved are documented here for full transparency.' },
    ],
  },
  privacy: {
    slug: 'privacy',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    description: 'How Nexus collects, uses, and protects your information.',
    updated: 'Last updated September 2026',
    sections: [
      { heading: 'Information we collect', body: 'We collect information you provide directly, such as your name and email during signup, along with basic usage data to improve the product.' },
      { heading: 'How we use it', body: 'Your information is used to provide and improve Nexus, communicate important updates, and ensure account security.' },
      { heading: 'Your rights', body: 'You can request access to, correction of, or deletion of your personal data at any time by contacting our team.' },
    ],
  },
  terms: {
    slug: 'terms',
    eyebrow: 'Legal',
    title: 'Terms of Service',
    description: 'The terms that govern your use of Nexus.',
    updated: 'Last updated September 2026',
    sections: [
      { heading: 'Using Nexus', body: 'By creating an account, you agree to use Nexus in accordance with these terms and all applicable laws.' },
      { heading: 'Your account', body: 'You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.' },
      { heading: 'Changes to these terms', body: 'We may update these terms from time to time. Continued use of Nexus after changes means you accept the updated terms.' },
    ],
  },
  security: {
    slug: 'security',
    eyebrow: 'Legal',
    title: 'Security',
    description: 'How we keep your data safe at Nexus.',
    sections: [
      { heading: 'Data encryption', body: 'All data is encrypted in transit and at rest, using industry-standard encryption protocols.' },
      { heading: 'Access controls', body: 'Passwords are hashed and never stored in plain text. Access to production systems is limited to authorized team members only.' },
      { heading: 'Reporting a concern', body: 'If you discover a security issue, please report it through our contact page so our team can investigate promptly.' },
    ],
  },
  gdpr: {
    slug: 'gdpr',
    eyebrow: 'Legal',
    title: 'GDPR Compliance',
    description: 'How Nexus supports compliance with the General Data Protection Regulation.',
    sections: [
      { heading: 'Your rights under GDPR', body: 'If you are located in the EU, you have the right to access, correct, export, or delete your personal data at any time.' },
      { heading: 'Data processing', body: 'We process personal data only as needed to provide the Nexus service, and never sell personal data to third parties.' },
      { heading: 'Data requests', body: 'To make a data request, contact our team directly and we will respond within the timeframe required by law.' },
    ],
  },
  dpa: {
    slug: 'dpa',
    eyebrow: 'Legal',
    title: 'Data Processing Agreement',
    description: 'Details on how Nexus processes data on behalf of business customers.',
    sections: [
      { heading: 'Purpose', body: 'This agreement outlines how Nexus handles personal data processed on behalf of customers using the platform for their own teams.' },
      { heading: 'Sub-processors', body: 'We use a small number of trusted sub-processors for hosting and infrastructure, all bound by equivalent data protection obligations.' },
      { heading: 'Requesting a copy', body: 'Business customers can request a signed copy of our Data Processing Agreement through our contact page.' },
    ],
  },
  soc2: {
    slug: 'soc2',
    eyebrow: 'Legal',
    title: 'SOC 2',
    description: 'Our approach to security, availability, and confidentiality controls.',
    sections: [
      { heading: 'Our commitment', body: 'Nexus is built with security and reliability as core principles, following practices aligned with SOC 2 trust service criteria.' },
      { heading: 'Ongoing monitoring', body: 'We continuously monitor our systems for availability and security, with processes in place to respond quickly to any issue.' },
      { heading: 'Requesting our report', body: 'Enterprise customers can request more detail on our compliance posture through our contact page.' },
    ],
  },
};
