import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react";

function ItemPreview({file}) {

  const [src ,setSrc] = useState('');
  const thumb = () => {
    let reader = new FileReader();

    reader.onload = (e) => {
      setSrc(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    thumb()
  }, [file]);

  return (
    <CCol xs={4} className={'item-images'}>
      <CCard>
        <CCardImage className={'test'}
                    src={src}
        />
        <CCardBody>
          <CRow>
            <CInputGroup className="mb-3">
              <CInputGroupText id="basic-addon1">파일명</CInputGroupText>
              <CFormInput
                placeholder="원본 파일명"
                aria-label="item-name"
                value={file.name}
                name={'origin'}
                readOnly
              />
            </CInputGroup>
          </CRow>
          <CRow>
            <CCol xs={10}>
              <CFormCheck
                className={'main_image_radio_label'}
                type="radio"
                label="대표 이미지 설정"
                name={'isMain'}
                defaultChecked
              />
            </CCol>
            <CCol xs={2}>
              <CButton
                color={'danger'}
                variant="outline"
              >
                x
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  );
}

export default ItemPreview;
