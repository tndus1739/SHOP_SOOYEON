import React, {useRef, useState} from 'react'
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

    const [HEX, setHEX] = useState();
    const [RGB, setRGB] = useState();
    const res = (e) => {
        console.log(getRGB(e.target.value))
        console.log(getHEX(getRGB(e.target.value)))
        console.log(e.target.value)

    }

    const getHEX = (RGB) => {
        const rgb = RGB.replace( /[^%,.\d]/g, "" ).split( "," );

        rgb.forEach(function (str, x, arr){

            /* 컬러값이 "%"일 경우, 변환하기. */
            if ( str.indexOf( "%" ) > -1 ) str = Math.round( parseFloat(str) * 2.55 );

            /* 16진수 문자로 변환하기. */
            str = parseInt( str, 10 ).toString( 16 );
            if ( str.length === 1 ) str = "0" + str;

            arr[ x ] = str;
        });

        return "#" + rgb.join( "" );
    }

    const getRGB = (HEX) => {
        const hex = HEX.trim().replace( "#", "" );

        /* rgb로 각각 분리해서 배열에 담기. */
        const rgb = ( 3 === hex.length ) ?
            hex.match( /[a-f\d]/gi ) : hex.match( /[a-f\d]{2}/gi );

        rgb.forEach(function (str, x, arr){
            /* rgb 각각의 헥사값이 한자리일 경우, 두자리로 변경하기. */
            if ( str.length == 1 ) str = str + str;

            /* 10진수로 변환하기. */
            arr[ x ] = parseInt( str, 16 );
        });

        return "rgb(" + rgb.join(", ") + ")";
    }


    const inputR = () => {

    }

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
                            <CFormInput type={'color'} onChange={(e) => res(e)} />
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
                                                    defaultValue={255}
                                                    onChange={inputR}
                                                />
                                            </CInputGroup>
                                        </CCol>
                                        <CCol>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">G</CInputGroupText>
                                                <CFormInput
                                                    aria-label="item-name"
                                                    name={'name'}
                                                    defaultValue={255}
                                                />
                                            </CInputGroup>
                                        </CCol>
                                        <CCol>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">B</CInputGroupText>
                                                <CFormInput
                                                    aria-label="item-name"
                                                    name={'name'}
                                                    defaultValue={255}
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
