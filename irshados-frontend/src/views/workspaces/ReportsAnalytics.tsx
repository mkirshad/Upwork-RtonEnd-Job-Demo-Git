const ReportsAnalytics = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Unified analytics across the stack
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Explore dashboards spanning inventory levels, purchasing cadence, sales velocity, and POS
                    settlements. Saved filters make it easy to replicate the Fishbowl and ECME demo reports.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Review weighted-average costing variances alongside ledger balances.</li>
                    <li>Compare purchase and sales pipelines to spot supply constraints early.</li>
                    <li>Export CSV snapshots for finance, or schedule Celery jobs for recurring delivery.</li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    API touchpoints
                </h4>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                    <code className="text-[11px]">
                        GET /api/reports/inventory-ledger • GET /api/reports/purchasing-pipeline •
                        GET /api/reports/sales-pipeline
                    </code>
                </p>
            </section>
        </div>
    )
}

export default ReportsAnalytics
