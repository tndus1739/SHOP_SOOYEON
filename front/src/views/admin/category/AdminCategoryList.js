import React, {useContext, useEffect, useState} from 'react';
import {
  CButton, CCard,
  CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import {cilCheckCircle, cilDelete, cilPlaylistAdd} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {SELECTED} from "src/views/admin/category/AdminCategory";
import axios from "axios";
import {Await} from "react-router-dom";

function AdminCategoryList({depth, parent, data}) {

  const {getParentId, getList} = useContext(SELECTED)

  const setDepth1Id = (id) => {
    getParentId(id)
  }

  const [input, setInput] = useState()

  const insertCategory = (e) => {
    e.preventDefault()
    const frm = new FormData(e.target)
    const params = {}
    for (const k of frm.keys()) {
      params[k] = frm.get(k)
    }
    console.log(params)
    axios.post('http://localhost:3011/admin/category', params).then(async res => {
      console.log(res)
      await setInput(null)
      getList(depth)
    })
  }

  const addCategory = () => {
    setInput(
      <CTableRow>
        <CTableHeaderCell scope="row">{data.length + 1}</CTableHeaderCell>
        <CTableDataCell>
          <CForm onSubmit={insertCategory}>
            <CRow>
              <CCol xs={9}>
                <CFormInput name={'name'}/>
                {
                  depth > 1 ?
                    <CFormInput name={'parentId'} className='d-none' value={parent}/>
                    :
                    ''
                }
                <CFormInput name={'depth'} className='d-none' value={depth} />
              </CCol>
              <CCol xs={3}>
                <CButton color={"info"} type='submit'><CIcon icon={cilPlaylistAdd}/></CButton>
              </CCol>
            </CRow>
          </CForm>
        </CTableDataCell>
        <CTableDataCell>
          <CButton color={"danger"} onClick={() => deleteCategory()}><CIcon icon={cilDelete}/></CButton>
        </CTableDataCell>

      </CTableRow>
    )
  }

  const deleteCategory = (id) => {
    if (id) {
      axios.delete('http://localhost:3011/admin/category', {params: {id: id}}).then((res) => {
        console.log(res)
        getList(depth)
      })
    }
    setInput(null)
  }

  const saveCategory = () => {

  }

  const selectCategory = async (tag, id) => {
    if(depth > 1) return
    let tr;
    while (tag.parentNode) {
      if (tag.parentNode.tagName === 'TR') {
        tr = tag.parentNode
        break
      }
      tag = tag.parentNode
    }
    if (!tr.classList.contains('active')) {
      const bro = tr.parentNode.children
      for (const it of bro) {
        if (it.classList.contains('active')) {
          it.classList.remove('active')
        }
      }
      tr.classList.add('active')
      await setDepth1Id(id)
    } else {
      tr.classList.remove('active')
      await setDepth1Id(null)
    }
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>{depth}차 카테고리</strong>
        {
          depth === 1 || parent ?
            <div className="float-end">
              <CButton color="dark" variant="ghost" size='sm' className="me-md-2"
                       onClick={addCategory}>+</CButton>
            </div> : ''
        }
      </CCardHeader>
      <CCardBody>
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">카테고리명</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {
              (data.length > 0) ?
                (data.map((it, idx) => (
                    <CTableRow key={it.id}
                               onClick={(e) => depth === 1 ? selectCategory(e.target, it.id) : e.preventDefault()}>
                      <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                      <CTableDataCell>{it.name}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color={"danger"} onClick={() => deleteCategory(it.id)}>x</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  )
                )) :
                (<CTableRow>
                  <CTableDataCell colSpan={4}>등록된 카테고리가 없습니다.</CTableDataCell>
                </CTableRow>)
            }
            {input}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
}

export default AdminCategoryList;
