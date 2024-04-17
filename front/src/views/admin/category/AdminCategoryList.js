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

function CategoryInput({length}) {
    return (
        <CTableRow>
            <CTableHeaderCell scope="row">{length}</CTableHeaderCell>
            <CTableDataCell>
                <CFormInput/>
            </CTableDataCell>
            <CTableDataCell>
                <CButton color={"danger"}><CIcon icon={cilDelete}/></CButton>
            </CTableDataCell>
        </CTableRow>
    )
}

function AdminCategoryList({depth, parent}) {

    const {getParentId} = useContext(SELECTED)

    const setDepth1Id = (id) => {
        getParentId(id)
    }


    const data1 = [
        {
            id: 1,
            name: '상의'
        },
        {
            id: 2,
            name: '하의'
        },
        {
            id: 3,
            name: '아우터'
        },
    ]

    const [list, setList] = useState([])

    const [input, setInput] = useState()

    const [checked, setChecked] = useState(0)

    const getList = () => {
        setList(data1)
        if (data1.length > 0) {
            setDepth1Id(data1[0].id)
        }
    }

    const insertCategory = (e) => {
        e.preventDefault()
        const frm = new FormData(e.target)
        const params = {}
        for(const k of frm.keys()) {
            params[k] = frm.get(k)
        }
        console.log(params)
        axios.post('http://localhost:3011/admin/category', {params: params}).then(res => {
            console.log(res)
        })
    }

    const addCategory = () => {
        setInput(
            <CTableRow>
                <CTableHeaderCell scope="row">{list.length + 1}</CTableHeaderCell>
                <CTableDataCell>
                    <CForm onSubmit={insertCategory}>
                        <CRow>
                            <CCol xs={9}>
                                <CFormInput name={'name'}/>
                                {
                                    depth > 1 ?
                                        <CFormInput name={'parent'} className='d-none' value={parent} />
                                        :
                                        ''
                                }
                            </CCol>
                            <CCol xs={3}>
                                <CButton color={"info"}><CIcon icon={cilPlaylistAdd} type={'submit'} /></CButton>
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
        if (!id) {
            setInput(null)
        } else {
            //임시
            const del = list.filter((it) => {
                return it.id != id
            })
            setList(del)
            setInput(null)
        }

    }

    const saveCategory = () => {

    }

    const selectCategory = (tag, id) => {
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
            setDepth1Id(id)
        } else {
            tr.classList.remove('active')
        }
    }

    useEffect(() => {
        getList()
    }, []);


    return (
        <CCard className="mb-4">
            <CCardHeader>
                <strong>{depth}차 카테고리</strong>
                <div className="float-end">
                    <CButton color="dark" variant="ghost" size='sm' className="me-md-2"
                             onClick={addCategory}>+</CButton>
                </div>
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
                            list.length > 0 ?
                                list.map((it, idx) => (
                                        <CTableRow key={it.id} className={idx === 0 && depth === 1 ? 'active' : ''}
                                                   onClick={(e) => selectCategory(e.target, it.id)}>
                                            <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                                            <CTableDataCell>{it.name}</CTableDataCell>
                                            <CTableDataCell>
                                                <CButton color={"danger"} onClick={() => deleteCategory(it.id)}>x</CButton>
                                            </CTableDataCell>
                                        </CTableRow>
                                    )
                                ) :
                                <CTableRow>
                                    <CTableDataCell colSpan={4}>등록된 카테고리가 없습니다.</CTableDataCell>
                                </CTableRow>
                        }
                        {input}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    );
}

export default AdminCategoryList;
