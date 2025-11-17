const SalesOrders = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Orchestrate the entire sales pipeline
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Convert quotes, reserve inventory, launch fulfilment, and invoice customers without leaving the
                    workspace. Every step mirrors the ECME demo and ties back to tenant RBAC permissions.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Drag and drop cards between stages to update pipeline status instantly.</li>
                    <li>Create deliveries and invoices from the action panel, capturing payments in-line.</li>
                    <li>Issue refunds or credit notes while preserving ledger accuracy for finance.</li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    API touchpoints
                </h4>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                    <code className="text-[11px]">
                        GET/POST /api/sales/orders • POST /api/sales/invoices • POST /api/sales/payments •
                        POST /api/sales/refunds
                    </code>
                </p>
            </section>
        </div>
    )
}

export default SalesOrders
