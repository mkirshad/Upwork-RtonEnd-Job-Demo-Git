const InventoryWarehouses = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Locations, bins, and transfers
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Coordinate every warehouse, stock bin, and transfer order. Updates flow to the inventory
                    ledger so purchasing and POS reflect the same on-hand numbers.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Create or archive warehouses, then drill into bins for physical locations.</li>
                    <li>Draft transfer orders, capture pick / pack / ship, and post movements to costing.</li>
                    <li>Use the ledger snapshot to reconcile cycle counts against Fishbowl exports.</li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Operations checklist
                </h4>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>Confirm warehouse contact and stocking policies in tenant settings.</li>
                    <li>Create bins per zone or aisle so POS can reserve inventory accurately.</li>
                    <li>Run the nightly ledger export and compare to ERP adjustments.</li>
                </ol>
                <div className="mt-4 rounded-lg bg-gray-100 p-4 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    <p className="font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        API touchpoints
                    </p>
                    <p className="mt-1">
                        <code className="text-[11px]">
                            GET/POST /api/inventory/warehouses • GET/POST /api/inventory/transfers •
                            GET /api/inventory/ledger
                        </code>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default InventoryWarehouses
