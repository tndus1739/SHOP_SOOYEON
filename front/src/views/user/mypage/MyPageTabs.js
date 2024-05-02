import React from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CForm, CNav, CNavItem, CNavLink} from '@coreui/react';

const MyPageTabs = () => {
  return (
    <CCol xs={12}>
      <CCard className="mb-4">

        <CCardBody>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink onClick={() => { window.location.href = '/user/mypage/MyInfo' }} style={{ cursor: 'pointer' }}>정보수정</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">주문내역</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">장바구니</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">좋아요</CNavLink>
            </CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default MyPageTabs;
