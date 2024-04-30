import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormCheck,
  CFormInput,
  CFormLabel, CFormSelect, CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react";

function UserDetail({id}) {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>회원 수정</strong>
          </CCardHeader>
          <CCardBody>
            {/*이메일: 수정 불가*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="staticEmail" defaultValue="email@example.com" readOnly plainText/>
              </CCol>
            </CRow>
            {/*비밀번호*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</CFormLabel>
              <CCol sm={10}>
                <CFormInput placeholder="회원 비밀번호" type="password" id="inputPassword"/>
              </CCol>
            </CRow>
            {/*이름*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputName" className="col-sm-2 col-form-label">이름</CFormLabel>
              <CCol sm={10}>
                <CFormInput placeholder="회원 이름" type="password" id="inputPassword"/>
              </CCol>
            </CRow>
            {/*닉네임*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputNickname" className="col-sm-2 col-form-label">닉네임</CFormLabel>
              <CCol sm={10}>
                <CFormInput placeholder="회원 닉네임" type="password" id="inputPassword"/>
              </CCol>
            </CRow>
            {/*전화번호*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputPhone" className="col-sm-2 col-form-label">전화번호</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  placeholder="전화번호"
                  autoComplete="phone"
                  name={'phone'}
                  type={'phone'}
                  maxLength={13}
                  // onInput={phone}
                  required
                  // defaultValue={'010-2065-5900'}
                />
              </CCol>
            </CRow>
            {/*성별*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputGender" className="col-sm-2 col-form-label">성별</CFormLabel>
              <CCol sm={10}>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="M" label="남성"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="W" label="여성"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="X" label="X"/>
              </CCol>
            </CRow>
            {/*생년월일*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputBirth" className="col-sm-2 col-form-label">생년월일</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  placeholder="회원 생년월일"
                  autoComplete="birth"
                  name={'birth'}
                  maxLength={8}
                  // onChange={number}
                  required
                  // defaultValue={'19951023'}
                />
              </CCol>
            </CRow>
            {/*권한*/}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputRole" className="col-sm-2 col-form-label">권한</CFormLabel>
              <CCol sm={10}>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    {label: '회원', value: 'USER'},
                    {label: '관리자', value: 'ADMIN'},
                    {label: '탈퇴', value: 'UNREGISER'}
                  ]}
                  style={{width: 'fit-content'}}
                  className="me-2"
                />
              </CCol>
            </CRow>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton color="primary" className="me-md-2">수정</CButton>
              <CButton color="primary" variant="outline">취소</CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default UserDetail;
