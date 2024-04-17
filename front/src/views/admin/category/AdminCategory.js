import React, {useEffect, useState} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'
import {cilAlignRight} from "@coreui/icons";
import AdminCategoryList from "src/views/admin/category/AdminCategoryList";

export const SELECTED = React.createContext(undefined, undefined)

const AdminCategory = () => {
    const [selectedDepth1, setSelectedDepth1] = useState()
    const [subCate, setSubCate] = useState(

    )

    const getParentId = async (id) => {
        await setSelectedDepth1(id)
        setSubCate(
            <CCol xs={6}>
                <AdminCategoryList
                    depth={2}
                    parent={selectedDepth1}
                />
            </CCol>
        )
    }

    return (
        <CRow>
            <SELECTED.Provider value={{getParentId}}>
                <CCol xs={6}>
                    <AdminCategoryList
                        depth={1}
                    />
                </CCol>
                {subCate}
            </SELECTED.Provider>
        </CRow>
    )
}

export default AdminCategory
