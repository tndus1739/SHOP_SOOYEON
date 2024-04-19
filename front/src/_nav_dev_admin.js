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
    name: '회원',
    to: '/admin/member',
  },
  {
    component: CNavItem,
    name: '카테고리',
    to: '/admin/category',
  },
  {
    component: CNavGroup,
    name: '상품',
    // to: '/admin/product',
    items: [
      {
        component: CNavItem,
        name: '상품 등록',
        to: '/admin/item/form',
      },
    ]
  },
  {
    component: CNavGroup,
    name: '색상',
    items: [
      {
        component: CNavItem,
        name: '등록',
        to: '/admin/item/color/form'
      }
    ]
  },
]

export default _nav_dev_admin
