import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav_dev_admin = [
  {
    component: CNavTitle,
    name: 'ADMIN',
  },
  {
    component: CNavItem,
    name: 'Member',
    to: '/admin/member',
  },
  {
    component: CNavItem,
    name: 'Category',
    to: '/admin/category',
  },
  {
    component: CNavItem,
    name: 'Product',
    to: '/admin/product',
  },
]

export default _nav_dev_admin
