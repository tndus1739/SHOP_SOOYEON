import React, {useContext, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {
    CCloseButton, CNavGroup, CNavItem,
    CSidebar,
    CSidebarBrand,
    CSidebarFooter,
    CSidebarHeader,
    CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {AppSidebarNav} from './AppSidebarNav'

import {logo} from 'src/assets/brand/logo'
import {sygnet} from 'src/assets/brand/sygnet'

// sidebar nav config
import _nav_dev from "src/_nav_dev";
import _nav_dev_admin from "src/_nav_dev_admin";
import {AuthModeDispatch, AuthModeInfo} from "src/layout/DefaultLayout";
import axios from "axios";

const AppSidebar = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

    const [nav, setNav] = useState([])
    const [category, setCategory] = useState([]);
    const mode = useContext(AuthModeInfo)

    const getCategory = async () => {
        await axios.get('http://localhost:3011/admin/category/all').then((res) => {
            // console.log(res.data)
            const cateList = [];
            const menu = _nav_dev
            if (res.data.length > 0) {
                for (const c of res.data) {
                    const obj = {}
                    obj['component'] = CNavGroup;
                    obj['name'] = c.name;
                    obj['items'] = []
                    for (const child of c.childCategories) {
                        const item = {
                            component: CNavItem,
                            name: child.name,
                            to: '/category/item/' + child.id
                        }
                        obj['items'].push(item)
                    }
                    menu.push(obj)
                }
            }
            setNav(menu)
        })
    }

    useEffect(() => {
        if (mode === 'ADMIN') {
            setNav(_nav_dev_admin)
        } else {
            setNav(_nav_dev)
        }
    }, [mode]);

    useEffect(() => {
        getCategory()
    }, []);


    return (
        <CSidebar
            className="border-end"
            colorScheme="light"
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch({type: 'set', sidebarShow: visible})
            }}
        >
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand to="/">
                    <CIcon customClassName="sidebar-brand-full" icon={logo} height={32}/>
                    <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32}/>
                </CSidebarBrand>
                <CCloseButton
                    className="d-lg-none"
                    dark
                    onClick={() => dispatch({type: 'set', sidebarShow: false})}
                />
            </CSidebarHeader>
            <AppSidebarNav items={nav}/>
            <CSidebarFooter className="border-top d-none d-lg-flex">
                <CSidebarToggler
                    onClick={() => dispatch({type: 'set', sidebarUnfoldable: !unfoldable})}
                />
            </CSidebarFooter>
        </CSidebar>
    )
}

export default React.memo(AppSidebar)
