import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CCollapse,
  CForm,
  CFormInput,
  CFormSelect, CNavbarNav, CNavItem, CNavLink, CPagination, CPaginationItem, CRow,
  CTable, CTableBody, CTableDataCell,
  CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import axios from "axios";

function UnregisterList() {
  const [unregisterList, setUnregisterList] = useState([]);

  useEffect(() => {
    // 관리자 목록을 가져오는 함수
    const fetchUnregisterList = async () => {
      try {
        const response = await axios.get('http://localhost:3011/admin/unregisterList');
        // 받은 데이터가 배열이 아닌 경우에는 배열로 변환
        setUnregisterList(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching unregister list:', error);
      }
    };

    fetchUnregisterList();
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>탈퇴 목록</strong>

            {/*검색*/}
            <CForm className="d-flex justify-content-end">
              <CFormSelect
                aria-label="Default select example"
                options={[
                  '검색 옵션 선택',
                  {label: '이름', value: 'name'},
                  {label: '닉네임', value: 'nickname'},
                  {label: '이메일', value: 'email'},
                  {label: '생년월일', value: 'birth'},
                  {label: '전화번호', value: 'phone'}
                ]}
                style={{ width: 'fit-content' }}
                className="me-2"
              />
              <CFormInput type="search" className="me-2" placeholder="Search" style={{ width: '200px' }} />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>

          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">탈퇴 이메일</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  <CTableHeaderCell scope="col">닉네임</CTableHeaderCell>
                  <CTableHeaderCell scope="col">권한</CTableHeaderCell>
                  <CTableHeaderCell scope="col">관리</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {unregisterList.map((unregister, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{unregister.id}</CTableHeaderCell>
                    <CTableDataCell>{unregister.email}</CTableDataCell>
                    <CTableDataCell>{unregister.name}</CTableDataCell>
                    <CTableDataCell>{unregister.nickname}</CTableDataCell>
                    <CTableDataCell>{unregister.role}</CTableDataCell>
                    <CTableDataCell>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            {/*페이지네이션*/}
            <CPagination align="center" aria-label="Page navigation example">
              <CPaginationItem aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default UnregisterList;
