import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import storefrontRoute from './storefrontRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...storefrontRoute, ...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'inventory.products',
        path: '/inventory/products',
        component: lazy(() => import('@/views/workspaces/InventoryProducts')),
        authority: ['inventory.view'],
        meta: {
            header: {
                title: 'Inventory • Products & Variants',
                description:
                    'Manage catalog items, variants, and pricing aligned with weighted-average costing.',
            },
        },
    },
    {
        key: 'inventory.warehouses',
        path: '/inventory/warehouses',
        component: lazy(() => import('@/views/workspaces/InventoryWarehouses')),
        authority: ['inventory.view'],
        meta: {
            header: {
                title: 'Inventory • Warehouses & Bins',
                description:
                    'Oversee stocking locations, transfers, and bin capacity for every facility.',
            },
        },
    },
    {
        key: 'purchasing.orders',
        path: '/purchasing/orders',
        component: lazy(() => import('@/views/workspaces/PurchasingOrders')),
        authority: ['purchasing.view'],
        meta: {
            header: {
                title: 'Purchasing Pipeline',
                description:
                    'Track purchase orders from requisition through receipt, billing, and payment.',
            },
        },
    },
    {
        key: 'sales.orders',
        path: '/sales/orders',
        component: lazy(() => import('@/views/workspaces/SalesOrders')),
        authority: ['sales.view'],
        meta: {
            header: {
                title: 'Sales Workspace',
                description:
                    'Convert quotes, manage allocations, and invoice customers with ECME-aligned tooling.',
            },
        },
    },
    {
        key: 'pos.register',
        path: '/pos/register',
        component: lazy(() => import('@/views/workspaces/PosRegister')),
        authority: ['pos.view'],
        meta: {
            header: {
                title: 'POS Register & Shifts',
                description:
                    'Open registers, manage carts, and reconcile drawers with offline resilience.',
            },
        },
    },
    {
        key: 'reports.analytics',
        path: '/reports/analytics',
        component: lazy(() => import('@/views/workspaces/ReportsAnalytics')),
        authority: ['reports.view'],
        meta: {
            header: {
                title: 'Reports & Analytics',
                description:
                    'Review cross-module dashboards, ledger exports, and costing analytics.',
            },
        },
    },
    {
        key: 'support.userGuide',
        path: '/support/user-guide',
        component: lazy(() => import('@/views/support')),
        authority: [],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
            header: {
                title: 'In App User Guide',
                description:
                    'Follow the ECME DEMO flows for onboarding, inventory, purchasing, sales, POS, and reporting.',
            },
        },
    },
    ...othersRoute,
]
