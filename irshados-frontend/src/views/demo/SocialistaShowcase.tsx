import { Fragment } from 'react'
import {
    socialistaHeroStats,
    socialistaPillars,
    socialistaEvents,
    socialistaCities,
    socialistaTimeline,
} from '@/data/socialista'
import type { SocialistaPillar, SocialistaEvent } from '@/data/socialista'
import {
    FiShield,
    FiSmartphone,
    FiGlobe,
    FiBarChart2,
    FiCreditCard,
    FiZap,
    FiServer,
    FiMessageCircle,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

const iconMap: Record<SocialistaPillar['key'], IconType> = {
    mobile: FiSmartphone,
    web: FiGlobe,
    organizer: FiBarChart2,
    admin: FiShield,
}

const statusStyles: Record<SocialistaEvent['status'], string> = {
    'On sale': 'bg-emerald-400/10 text-emerald-300 border-emerald-500/40',
    'Low inventory': 'bg-amber-400/10 text-amber-300 border-amber-500/40',
    Waitlist: 'bg-cyan-400/10 text-cyan-300 border-cyan-500/40',
    'Sold out': 'bg-rose-400/10 text-rose-300 border-rose-500/40',
}

const paymentStack = [
    {
        title: 'Stripe Connect + Issuing',
        detail: 'Full-stack payments, instant payouts, automated 1099s, and dynamic holdbacks per organizer health.',
        metric: 'PCI scope minimized',
    },
    {
        title: 'Supabase/Postgres backend',
        detail: 'Row-level security for every workspace, edge functions for QR validation, and per-city analytics cubes.',
        metric: 'Sub 200ms reads',
    },
    {
        title: 'Observability + comms',
        detail: 'Grafana Cloud traces, Sentry release health, and incident runbooks pushed via Slack + PagerDuty.',
        metric: '99.9% target uptime',
    },
]

const operationsCards: Array<{ title: string; icon: IconType; detail: string; metric: string }> = [
    {
        title: 'Organizer cockpit',
        icon: FiBarChart2,
        detail: 'Tier builder, conversion funnels, and collaborator roles with per-venue permissions.',
        metric: '2.3x lift on presales',
    },
    {
        title: 'Admin command center',
        icon: FiShield,
        detail: 'Flagged payouts, chargeback queues, and dispute tooling tied to Firestore audit logs.',
        metric: 'Under 30m SLA',
    },
]

const SocialistaShowcase = () => {
    return (
        <div className="bg-slate-950 text-white min-h-screen">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-900/80 via-slate-950 to-slate-950">
                <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col gap-14 relative">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.6em] text-white/60">
                            Socialista • Event Discovery & Ticketing
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light leading-tight">
                            Proof-of-execution for a multi-city React Native, Next.js, and Postgres powered platform.
                        </h1>
                        <p className="text-lg text-white/80 max-w-3xl">
                            This IrshadOS branch carries the same architecture we&apos;d ship for Socialista: a shared design
                            system across mobile, web, organizer dashboards, and the admin panel with Stripe-native payouts.
                            Austin, Miami, and Madrid launch packs are already templated with venue cohorts and go-to-market
                            scripts.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                type="button"
                                className="px-6 py-3 rounded-full bg-white text-slate-900 text-sm uppercase tracking-wide"
                            >
                                View working demo
                            </button>
                            <button
                                type="button"
                                className="px-6 py-3 rounded-full border border-white/40 text-white/80 text-sm uppercase tracking-wide hover:text-white"
                            >
                                Download delivery outline
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {socialistaHeroStats.map((stat) => (
                            <article
                                key={stat.label}
                                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                            >
                                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                                <p className="text-xl mt-3 font-light">{stat.value}</p>
                                <p className="text-sm text-white/60 mt-1">{stat.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.5em] text-fuchsia-300">Platform pillars</p>
                        <h2 className="text-3xl mt-3 font-light">Every surface built in tandem</h2>
                    </div>
                    <p className="text-sm text-white/70 max-w-md">
                        Shared UI tokens power the attendee experiences, Next.js web, organizer cockpit, and admin control
                        plane. The repo demonstrates the same multi-surface component model.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {socialistaPillars.map((pillar) => {
                        const Icon = iconMap[pillar.key]
                        return (
                            <article
                                key={pillar.key}
                                className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col gap-4 shadow-xl shadow-purple-900/10"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-semibold">{pillar.title}</h3>
                                        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{pillar.metrics}</p>
                                    </div>
                                </div>
                                <p className="text-white/70">{pillar.description}</p>
                                <ul className="text-white/70 space-y-2 text-sm">
                                    {pillar.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="text-fuchsia-300 mt-0.5">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )
                    })}
                </div>
            </section>

            <section className="bg-slate-900/30 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.5em] text-emerald-300">Live operating snapshot</p>
                            <h2 className="text-3xl font-light mt-3">Event inventory & flow health</h2>
                        </div>
                        <div className="text-sm text-white/70">
                            Real data mocks referencing Supabase views + Stripe dashboard exports seeded in this repo.
                        </div>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        {socialistaEvents.map((event) => (
                            <article key={event.name} className="border border-white/10 rounded-3xl p-6 bg-slate-950/70">
                                <div className="flex justify-between items-center gap-3">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{event.city}</p>
                                        <h3 className="text-xl font-semibold">{event.name}</h3>
                                    </div>
                                    <span
                                        className={`text-xs px-3 py-1 rounded-full border ${statusStyles[event.status]} uppercase tracking-wide`}
                                    >
                                        {event.status}
                                    </span>
                                </div>
                                <p className="text-white/60 mt-2">{event.venue}</p>
                                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/80">
                                    <div>
                                        <p className="text-white text-2xl font-light">{event.ticketsSold.toLocaleString()}</p>
                                        <p className="text-white/50 uppercase tracking-[0.4em] text-xs">Tickets sold</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-2xl font-light">{event.gmv}</p>
                                        <p className="text-white/50 uppercase tracking-[0.4em] text-xs">GMV</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between text-sm text-white/60">
                                    <span>{event.type}</span>
                                    <span>{event.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.5em] text-sky-300">Organizer & admin flows</p>
                    <h2 className="text-3xl font-light">Dashboards grounded in settlements and comms</h2>
                    <p className="text-white/70">
                        The dashboard view inside this repo mirrors how Socialista would surface payouts, allocations, and
                        automated communications. Each module ships with reusable hooks, Zod validation, and optimistic UI
                        layers mirroring the actual production pitch.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        {operationsCards.map((card) => {
                            const Icon = card.icon
                            return (
                                <article key={card.title} className="rounded-3xl border border-white/10 p-5 bg-slate-950">
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-6 w-6 text-sky-300" />
                                        <div>
                                            <p className="font-semibold">{card.title}</p>
                                            <p className="text-xs text-white/50 uppercase tracking-[0.4em]">{card.metric}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/70 mt-3">{card.detail}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <div className="border border-white/10 rounded-3xl p-6 bg-slate-950 space-y-4">
                    <p className="text-xs uppercase tracking-[0.5em] text-amber-200">Launch board</p>
                    {socialistaCities.map((city) => (
                        <article
                            key={city.name}
                            className="rounded-2xl border border-white/10 p-4 bg-white/5 text-white/80 space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold text-white">{city.name}</p>
                                <span className="text-xs uppercase tracking-[0.4em] text-white/60">{city.launch}</span>
                            </div>
                            <p className="text-sm">{city.focus}</p>
                            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/50">
                                <span>{city.venues} venues</span>
                                <span>{city.waitlist.toLocaleString()} waitlist</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-slate-900/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.5em] text-emerald-300">Payments & reliability</p>
                            <h2 className="text-3xl font-light mt-3">Stripe-native from day zero</h2>
                        </div>
                        <div className="text-sm text-white/70 max-w-sm">
                            Payouts flow through Stripe Connect, marketplace logic is modeled in Postgres, and the comms stack
                            ensures finance + CX can collaborate in real time.
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {paymentStack.map((item) => (
                            <article key={item.title} className="rounded-3xl border border-white/10 p-6 bg-slate-950/70">
                                <div className="flex items-center gap-3 text-emerald-300">
                                    <FiCreditCard className="h-5 w-5" />
                                    <p className="text-xs uppercase tracking-[0.4em]">{item.metric}</p>
                                </div>
                                <h3 className="text-xl font-semibold mt-3 text-white">{item.title}</h3>
                                <p className="text-sm text-white/70 mt-2">{item.detail}</p>
                            </article>
                        ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 text-sm text-white/70">
                        <div className="flex items-center gap-2">
                            <FiZap className="text-fuchsia-300" />
                            <span>Realtime seat maps + demand curves backed by Supabase events.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiServer className="text-emerald-300" />
                            <span>Edge middleware for geo gating + locale aware pricing.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMessageCircle className="text-sky-300" />
                            <span>Automations into Braze / Attio for retention + organizer comms.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.5em] text-purple-300">Execution timeline</p>
                        <h2 className="text-3xl font-light">Fourteen-week delivery run</h2>
                    </div>
                    <p className="text-sm text-white/70 max-w-md">
                        Each phase of the repo demos includes working code, docs, and QA harnesses—mirroring how the real build
                        for Socialista will be executed.
                    </p>
                </div>
                <div className="grid gap-4">
                    {socialistaTimeline.map((phase, index) => (
                        <Fragment key={phase.title}>
                            <article className="rounded-3xl border border-white/10 p-6 bg-slate-950/80">
                                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Phase {index + 1}</p>
                                <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
                                    <h3 className="text-2xl font-semibold">{phase.title}</h3>
                                    <p className="text-sm text-white/60">{phase.timeframe}</p>
                                </div>
                                <p className="text-white/70 mt-3">{phase.detail}</p>
                            </article>
                        </Fragment>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SocialistaShowcase
