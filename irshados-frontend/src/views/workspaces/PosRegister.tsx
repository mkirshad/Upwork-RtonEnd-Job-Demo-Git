const PosRegister = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Run the register online or offline
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Launch shifts, manage carts, accept payments, and print receipts. Offline mode stores orders in
                    IndexedDB and replays them once connectivity returns so you never lose a sale.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Select a register to load its cash drawer state and starting float.</li>
                    <li>Process orders with barcode scanning, quick keys, and customer price lists.</li>
                    <li>Close the shift with drawer reconciliation and export the audit trail for finance.</li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    API touchpoints
                </h4>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                    <code className="text-[11px]">
                        POST /api/pos/registers/open • POST /api/pos/registers/close •
                        POST /api/pos/sales • GET /api/pos/receipts
                    </code>
                </p>
            </section>
        </div>
    )
}

export default PosRegister
