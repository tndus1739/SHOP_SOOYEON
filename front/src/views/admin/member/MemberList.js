import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect, CPagination, CPaginationItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { Link } from 'react-router-dom';

function MemberList({ title, fetchFunction, searchFunction, list, detailLink }) {
  const [searchType, setSearchType] = useState('');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 fetchFunction 호출
    fetchFunction();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 호출되도록 설정

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentPageList = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  const handleSearch = async () => {
    try {
      await searchFunction(searchType, keyword); // searchFunction 호출 시 await 추가
      // 검색 후 list 갱신 코드 추가
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>{title}</strong>
        </CCardHeader>

        <CCardBody>
          <div style={{ marginBottom: '25px', marginTop: '40px' }}>
            <CForm
              className="d-flex justify-content-end"
              id="searchForm"
              onSubmit={(e) => {
                e.preventDefault(); // 기본 동작인 새로고침을 방지
                handleSearch(); // 폼 제출 시 handleSearch 함수 호출
              }}
            >
              <CFormSelect
                id="searchType"
                name="searchType"
                aria-label="Default select example"
                onChange={(e) => setSearchType(e.target.value)}
                style={{ width: 'fit-content' }}
                className="me-2"
              >
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
                style={{ width: '200px' }}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <CButton type="submit" color="primary" variant="outline">
                검색
              </CButton>
            </CForm>
          </div>

          <div style={{ minHeight: '550px', maxHeight: '550px', overflowY: 'auto' }}>
            <CTable style={{ textAlign: 'center' }}>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    ID
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    이메일
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    이름
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    닉네임
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '15%' }}>
                    권한
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '15%' }}>
                    관리
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {getCurrentPageList().map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" style={{ width: '10%' }}>
                      {item.id}
                    </CTableHeaderCell>
                    <CTableDataCell style={{ width: '20%' }}>{item.email}</CTableDataCell>
                    <CTableDataCell style={{ width: '20%' }}>{item.name}</CTableDataCell>
                    <CTableDataCell style={{ width: '20%' }}>{item.nickname}</CTableDataCell>
                    <CTableDataCell style={{ width: '15%' }}>{item.role}</CTableDataCell>
                    <CTableDataCell style={{ width: '15%' }}>
                      <Link to={`${detailLink}/${item.id}`}>
                        <CButton color="primary" variant="outline" style={{ height: '30px', lineHeight: '10px' }}>
                          관리
                        </CButton>
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>

          {/* 페이지네이션 */}
          {list.length > itemsPerPage && (
            <CPagination align="center" aria-label="Page navigation example">
              <CPaginationItem
                aria-label="Previous"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              {Array.from({ length: Math.ceil(list.length / itemsPerPage) }, (_, i) => (
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
                disabled={currentPage === Math.ceil(list.length / itemsPerPage)}
              >
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          )}
        </CCardBody>
      </CCard>
    </CCol>
  );
}

export default MemberList;
