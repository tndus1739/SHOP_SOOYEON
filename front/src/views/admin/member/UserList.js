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
import {Link} from "react-router-dom";

function UserList() {
  const [userList, setUserList] = useState([]);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // 관리자 목록을 가져오는 함수
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:3011/admin/userList');
        // 받은 데이터가 배열이 아닌 경우에는 배열로 변환
        setUserList(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  // 페이지 변경 처리
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //현재 페이지에 해당하는 리스트 가져오기
  const getCurrentPageList = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userList.slice(startIndex, endIndex);
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>회원 목록</strong>
          </CCardHeader>

          <CCardBody>

            {/*검색*/}
            <div style={{marginBottom: '20px', marginTop: '25px'}}>
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
                  style={{width: 'fit-content'}}
                  className="me-2"
                />
                <CFormInput type="search" className="me-2" placeholder="Search" style={{width: '200px'}}/>
                <CButton type="submit" color="primary" variant="outline">
                  Search
                </CButton>
              </CForm>
            </div>


            <div style={{minHeight: '550px', maxHeight: '550px', overflowY: 'auto'}}>
              <CTable style={{textAlign: 'center'}}>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width: '10%'}}>ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>회원 이메일</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>이름</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>닉네임</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '10%'}}>권한</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>관리</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {getCurrentPageList().map((user, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" style={{width: '10%'}}>{user.id}</CTableHeaderCell>
                      <CTableDataCell style={{width: '20%'}}>{user.email}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>{user.name}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>{user.nickname}</CTableDataCell>
                      <CTableDataCell style={{width: '10%'}}>{user.role}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>
                        {/*<Link to={`/admin/member/unregisterDetail/${id}`}>*/}
                        <CButton color="primary" variant="outline"
                                 style={{height: '30px', lineHeight: '10px'}}>관리</CButton>
                        {/*</Link>*/}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>

            {/* 페이지네이션 */}
            {userList.length > itemsPerPage && (
                <CPagination align="center" aria-label="Page navigation example">
                  <CPaginationItem
                    aria-label="Previous"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </CPaginationItem>
                  {Array.from({length: Math.ceil(userList.length / itemsPerPage)}, (_, i) => (
                    <CPaginationItem
                      key={i + 1}
                      active={i + 1 === currentPage}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </CPaginationItem>
                  ))}
                  <CPaginationItem
                    aria-label="Next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(userList.length / itemsPerPage)}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </CPaginationItem>
                </CPagination>
              )}

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default UserList;
