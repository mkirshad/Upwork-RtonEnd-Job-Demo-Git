import {
    PiHouseLineDuotone,
    PiPackageDuotone,
    PiWarehouseDuotone,
    PiHandshakeDuotone,
    PiShoppingCartSimpleDuotone,
    PiCashRegisterDuotone,
    PiChartLineUpDuotone,
    PiLifebuoyDuotone,
    PiBriefcaseMetalDuotone,
    PiClipboardTextDuotone,
    PiUsersThreeDuotone,
} from 'react-icons/pi'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <PiHouseLineDuotone />,
    inventory: <PiPackageDuotone />,
    'inventory.products': <PiPackageDuotone />,
    'inventory.warehouses': <PiWarehouseDuotone />,
    purchasing: <PiHandshakeDuotone />,
    'purchasing.orders': <PiHandshakeDuotone />,
    sales: <PiShoppingCartSimpleDuotone />,
    'sales.orders': <PiShoppingCartSimpleDuotone />,
    pos: <PiCashRegisterDuotone />,
    'pos.register': <PiCashRegisterDuotone />,
    reports: <PiChartLineUpDuotone />,
    'reports.analytics': <PiChartLineUpDuotone />,
    support: <PiLifebuoyDuotone />,
    'support.userGuide': <PiLifebuoyDuotone />,
}

export default navigationIcon
