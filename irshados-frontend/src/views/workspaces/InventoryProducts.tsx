import { Link } from 'react-router-dom'

const InventoryProducts = () => {
    return (
        <div className="space-y-6">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Catalog at a glance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Manage products, variants, pricing, and barcode assets. Every change posts
                    to the weighted-average costing engine so inventory, purchasing, and POS stay in sync.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                        Create items and variants with the slide-over form, including barcode,
                        tax, and unit conversions.
                    </li>
                    <li>
                        Bulk import with the CSV template, then confirm weighted-cost previews before committing.
                    </li>
                    <li>
                        Use the action bar to publish price lists or hand off to the POS workspace.
                    </li>
                </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Helpful links
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-primary-600 dark:text-primary-300">
                    <li>
                        <Link to="/inventory/warehouses">Map items to warehouses and bins</Link>
                    </li>
                    <li>
                        <a
                            href="/support/user-guide#inventory"
                            className="hover:underline"
                        >
                            Read the inventory quick start guide
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:underline"
                            href="mailto:support@irshados.dev"
                        >
                            Ask support for import templates
                        </a>
                    </li>
                </ul>
                <div className="mt-4 rounded-lg bg-gray-100 p-4 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    <p className="font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        API touchpoints
                    </p>
                    <p className="mt-1">
                        <code className="text-[11px]">
                            GET/POST /api/inventory/products • GET /api/inventory/ledger •
                            POST /api/inventory/import
                        </code>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default InventoryProducts
