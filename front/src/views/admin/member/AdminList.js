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
import AdminMemberService from "src/services/AdminMemberService";

function AdminList() {
  const [adminList, setAdminList] = useState([]);

  // 검색
  const [searchType, setSearchType] = useState('');
  const [keyword, setKeyword] = useState('');

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // 관리자 목록을 가져오는 함수
    const fetchAdminList = async () => {
      try {
        const response = await AdminMemberService.getAdminAdminList();
        // 받은 데이터가 배열이 아닌 경우에는 배열로 변환
        setAdminList(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching admin list:', error);
      }
    };

    fetchAdminList();
  }, []);

  // 페이지 변경 처리
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //현재 페이지에 해당하는 리스트 가져오기
  const getCurrentPageList = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return adminList.slice(startIndex, endIndex);
  }

  //검색
  const handleSearch = async () => {
    try {
      const form = document.getElementById('searchForm');

      const searchType = form.searchType.value;
      const keyword = form.keyword.value;

      const response = await AdminMemberService.searchAdminAdmin(searchType, keyword);

      setAdminList(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error searching admin:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>관리자 목록</strong>
          </CCardHeader>

          <CCardBody>

            {/*검색*/}
            <div style={{marginBottom: '25px', marginTop: '40px'}}>
              <CForm className="d-flex justify-content-end" id="searchForm">
                <CFormSelect
                  id="searchType"
                  name="searchType"
                  aria-label="Default select example"
                  onChange={(e) => setSearchType(e.target.value)}
                  style={{width: 'fit-content'}}
                  className="me-2"
                >
                  <option value="">검색 옵션 선택</option>
                  <option value="name">이름</option>
                  <option value="nickname">닉네임</option>
                  <option value="email">이메일</option>
                  <option value="phone">전화번호</option>
                </CFormSelect>
                <CFormInput
                  type="text"
                  id="keyword"
                  name="keyword"
                  className="me-2"
                  placeholder="검색어를 입력하세요"
                  style={{width: '200px'}}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <CButton
                  type="button"
                  onClick={handleSearch}
                  color="primary"
                  variant="outline"
                >
                  검색
                </CButton>
              </CForm>
            </div>


            <div style={{minHeight: '550px', maxHeight: '550px', overflowY: 'auto'}}>
              <CTable style={{textAlign: 'center'}}>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width: '10%'}}>ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>관리자 이메일</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>이름</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>닉네임</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '10%'}}>권한</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width: '20%'}}>관리</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {getCurrentPageList().map((admin, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" style={{width: '10%'}}>{admin.id}</CTableHeaderCell>
                      <CTableDataCell style={{width: '20%'}}>{admin.email}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>{admin.name}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>{admin.nickname}</CTableDataCell>
                      <CTableDataCell style={{width: '10%'}}>{admin.role}</CTableDataCell>
                      <CTableDataCell style={{width: '20%'}}>
                        <Link to={`/admin/member/adminDetail/${admin.id}`}>
                          <CButton color="primary" variant="outline"
                                   style={{height: '30px', lineHeight: '10px'}}>관리</CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>

            {/* 페이지네이션 */}
            {adminList.length > itemsPerPage && (
              <CPagination align="center" aria-label="Page navigation example">
                <CPaginationItem
                  aria-label="Previous"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                {Array.from({length: Math.ceil(adminList.length / itemsPerPage)}, (_, i) => (
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
                  disabled={currentPage === Math.ceil(adminList.length / itemsPerPage)}
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

export default AdminList;
