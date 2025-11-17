const PurchasingOrders = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Stay ahead of supplier commitments
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Monitor requisitions, purchase orders, receipts, bills, and payments from one workspace.
                    Weighted cost adjustments post automatically so inventory and finance match.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Filter the board by supplier, location, or status to surface blockers.</li>
                    <li>Convert approved requisitions to POs and email suppliers with one click.</li>
                    <li>Post receipts to trigger costing and automatically draft vendor bills.</li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Workflow references
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Aligns with the PO → GRN → Bill → Payment lifecycle described in the backend user guide and
                    Fishbowl purchasing tutorial.
                </p>
                <div className="mt-4 rounded-lg bg-gray-100 p-4 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    <p className="font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        API touchpoints
                    </p>
                    <p className="mt-1">
                        <code className="text-[11px]">
                            GET/POST /api/purchasing/orders • POST /api/purchasing/receipts •
                            POST /api/purchasing/payments
                        </code>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default PurchasingOrders
