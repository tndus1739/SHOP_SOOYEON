import React, {useEffect, useRef, useState} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormLabel, CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilBell} from '@coreui/icons'
import {DocsExample} from 'src/components'

const Buttons = () => {
    const [r, setR] = useState(255);
    const [g, setG] = useState(255);
    const [b, setB] = useState(255);

    const [HEX, setHEX] = useState('');
    // const [RGB, setRGB] = useState([255, 255, 255]);
    const res = (e) => {
        const rgb = getRGB(e.target.value);
        setR(rgb[0])
        setG(rgb[1])
        setB(rgb[2])
    }

    const componentToHex = (c) => {
        // 10진수를 16진수 문자열로 변환
        const hex = c.toString(16);
        // 만약 값이 16보다 작다면 앞에 0을 붙여서 두 자리로 만듭니다.
        return hex.length == 1 ? "0" + hex : hex;
    }

    const getHEX = (r, g, b) => {
        // 각 색상 값을 16진수 문자열로 변환하고 합치기
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    }

    const getRGB = (HEX) => {
        // # 제거
        HEX = HEX.replace(/^#/, '');
        // 16진수를 10진수로 변환하여 R, G, B 값 추출
        const bigint = parseInt(HEX, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }


    const inputR = (e) => {
        setR(e.target.value)
    }
    const inputG = (e) => {
        setG(e.target.value)
    }
    const inputB = (e) => {
        setB(e.target.value)
    }

    useEffect(() => {
        setHEX(getHEX(r, g, b))
    }, []);

    return (
        <>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>React Button</strong> <small>Pill</small>
                        </CCardHeader>
                        <CCardBody>
                            {[
                                'primary',
                                'secondary',
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'light',
                                'dark',
                            ].map((color, index) => (
                                <CButton color={color} shape="rounded-pill" key={index}>
                                    &nbsp;
                                </CButton>
                            ))}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <CRow>
                <CCol xs={12}>
                    <CCard>
                        <CCardHeader>
                            색상 등록
                        </CCardHeader>
                        <CCardBody>
                            <CFormInput type={'color'} value={HEX} onChange={(e) => res(e)} />
                            <br/>
                            <CRow>
                                <CCol xs={4}>
                                    <CRow>
                                        <p className="text-body-secondary small">
                                            rgb
                                        </p>
                                        <CCol xs={4}>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">R</CInputGroupText>
                                                <CFormInput
                                                    aria-label="item-name"
                                                    name={'name'}
                                                    value={r}
                                                    onChange={(e) => inputR(e)}
                                                />
                                            </CInputGroup>
                                        </CCol>
                                        <CCol>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">G</CInputGroupText>
                                                <CFormInput
                                                    aria-label="item-name"
                                                    name={'name'}
                                                    value={g}
                                                    onChange={(e) => inputG(e)}
                                                />
                                            </CInputGroup>
                                        </CCol>
                                        <CCol>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">B</CInputGroupText>
                                                <CFormInput
                                                    aria-label="item-name"
                                                    name={'name'}
                                                    value={b}
                                                    onChange={(e) => inputB(e)}
                                                />
                                            </CInputGroup>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Buttons
