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
import axios from "axios";

export const SELECTED = React.createContext(undefined, undefined)

const AdminCategory = () => {
  const [selectedDepth1, setSelectedDepth1] = useState(null)
  const [subCate, setSubCate] = useState()

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getParentId = async (id) => {
    await setSelectedDepth1(id)
  }

  const getList = (depth) => {
    let parentID = selectedDepth1;
    if(depth == 1) {
      parentID = null;
    }
    axios.get('http://localhost:3011/admin/category', {params: {parentId: parentID}}).then(async res => {
      console.log(res.data)
      if(depth == 1) {
        setData(res.data)
      } else if(depth === 2 && selectedDepth1) {
        setData2(res.data)
      }
    })
  }

  useEffect(() => {
    getList(1)
  }, []);

  useEffect(() => {
    getList(2)
    if(!selectedDepth1) {
      setData2([])
    }
  }, [selectedDepth1]);

  return (
    <CRow>
      <SELECTED.Provider value={{getParentId, getList}}>
        <CCol xs={6}>
          <AdminCategoryList
            depth={1}
            parent={null}
            data={data}
          />
        </CCol>
        <CCol xs={6}>
          <AdminCategoryList
            depth={2}
            parent={selectedDepth1}
            data={data2}
          />
        </CCol>
      </SELECTED.Provider>
    </CRow>
  )
}

export default AdminCategory
