export type SocialistaPillar = {
    key: 'mobile' | 'web' | 'organizer' | 'admin'
    title: string
    description: string
    metrics: string
    bullets: string[]
}

export type SocialistaEvent = {
    name: string
    city: string
    venue: string
    date: string
    type: string
    ticketsSold: number
    gmv: string
    status: 'On sale' | 'Low inventory' | 'Waitlist' | 'Sold out'
}

export type SocialistaCity = {
    name: string
    launch: string
    venues: number
    waitlist: number
    focus: string
}

export const socialistaHeroStats = [
    { label: 'Cities launching', value: 'Austin · Miami · Madrid', detail: 'Phased deployments locked in Q1' },
    { label: 'Ticketed experiences', value: '640+', detail: 'Seeded through founding partners' },
    { label: 'GMV secured', value: '$4.8M', detail: 'Projected within first 9 months' },
    { label: 'Stripe payout SLA', value: '< 12h', detail: 'Instant settlement through Connect' },
]

export const socialistaPillars: SocialistaPillar[] = [
    {
        key: 'mobile',
        title: 'React Native attendee app',
        description:
            'Personalized discovery with offline QR wallets and dynamic perks. Built with Expo Router + Zustand for state managed check-ins.',
        metrics: '4.8★ beta feedback',
        bullets: [
            'Event graph tuned per city & micro scenes',
            'Apple / Google Pay passes with dynamic NFC',
            'In-app messaging + safety escalation flows',
        ],
    },
    {
        key: 'web',
        title: 'Next.js 15 web portal',
        description:
            'Searchable, SEO-friendly storefront that mirrors mobile content with server components and image/CDN automation.',
        metrics: '95+ Lighthouse',
        bullets: [
            'Edge cached landing pages per city',
            'Supabase row-level access for curated picks',
            'Schema.org events feed powering Google listings',
        ],
    },
    {
        key: 'organizer',
        title: 'Organizer cockpit',
        description:
            'Revenue tooling for promoters to launch drops, manage allocations, and view settlement data in real time.',
        metrics: '12 clubs onboarded',
        bullets: [
            'Weighted allocations per promoter cohort',
            'Drag-and-drop running order & tier releases',
            'Live audience segmentation with lookalikes',
        ],
    },
    {
        key: 'admin',
        title: 'Compliance-first admin',
        description:
            'SOC2-ready audit trails, risk flagging, and content approvals merged with centralized messaging + refunds.',
        metrics: 'Audit baseline ready',
        bullets: [
            'Rules engine for fraud & resale monitoring',
            'Fine grained back office roles via Supabase RLS',
            'Full ledger exports for finance + operations',
        ],
    },
]

export const socialistaEvents: SocialistaEvent[] = [
    {
        name: 'Neon Nights at the Wharf',
        city: 'Miami',
        venue: 'The Wharf',
        date: 'Mar 14',
        type: 'Nightlife',
        ticketsSold: 1320,
        gmv: '$86K',
        status: 'On sale',
    },
    {
        name: 'Desert Bloom Live',
        city: 'Austin',
        venue: 'Moody Amphitheater',
        date: 'Apr 5',
        type: 'Festival',
        ticketsSold: 780,
        gmv: '$142K',
        status: 'Low inventory',
    },
    {
        name: 'Casa Flamenca Sessions',
        city: 'Madrid',
        venue: 'Teatro Magno',
        date: 'May 1',
        type: 'Culture',
        ticketsSold: 620,
        gmv: '$54K',
        status: 'On sale',
    },
    {
        name: 'Deep Tech Weekender',
        city: 'Austin',
        venue: 'East 6th Circuit',
        date: 'Apr 26',
        type: 'Conference',
        ticketsSold: 450,
        gmv: '$190K',
        status: 'Waitlist',
    },
]

export const socialistaCities: SocialistaCity[] = [
    { name: 'Austin', launch: 'Beta · February', venues: 38, waitlist: 1400, focus: 'SXSW crossover & live shows' },
    { name: 'Miami', launch: 'Launch · March', venues: 52, waitlist: 2100, focus: 'Nightlife & culinary pop-ups' },
    { name: 'Madrid', launch: 'Launch · April', venues: 41, waitlist: 980, focus: 'Culture, art & boutique venues' },
]

export const socialistaTimeline = [
    {
        title: 'Discovery & brand sprint',
        timeframe: 'Weeks 1-2',
        detail: 'Research decks, user journeys, and naming locked for Socialista with bilingual tone.',
    },
    {
        title: 'Platform foundation',
        timeframe: 'Weeks 3-6',
        detail: 'Next.js 15 web + Supabase scaffolding, React Native workspace, and shared design system.',
    },
    {
        title: 'Organizer & admin surfaces',
        timeframe: 'Weeks 7-10',
        detail: 'Stripe Connect payout flows, settlement reports, and compliance workflows.',
    },
    {
        title: 'Payments, QA & launch',
        timeframe: 'Weeks 11-14',
        detail: 'Full Stripe certification, SOC-lite practices, load testing, and city marketing kits.',
    },
]
