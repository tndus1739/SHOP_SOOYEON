import React, {useEffect, useState} from 'react';
import {CCol, CFormInput, CFormSelect, CRow, CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import ItemColorsSelect from "src/views/admin/item/ItemColorsSelect";
import ItemColors from "src/views/admin/item/ItemColors";
import axios from "axios";
import AdminItemColorsSelect from "src/views/admin/item/detail/ItemColorsSelect";

function AdminItemOptions({num, data}) {
    const [rgb, setRgb] = useState([255, 255, 255]);
    const [colors, setColors] = useState([])
    const colors_select = (val) => {
        setRgb(val.split(','))
    }

    const getColors = () => {
        axios.get('http://localhost:3011/admin/colors').then(res => {
            setColors(res.data);
        })
    }

    const numberComma = (val) => {
        return val.toString().replace(/[^0-9]/gi, '')
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }

    const optionPrice = (e) => {
        e.target.value = Number(e.target.value.toString().replace(/[^0-9]/gi, ''))
        e.target.value = numberComma(e.target.value)
    }

    useEffect(() => {
        getColors()
    }, []);

    return (
        <CTableRow className={'options'} id={num}>
            <CTableHeaderCell scope="row">{num}</CTableHeaderCell>
            <CTableDataCell>
                <CRow>
                    <CCol xs={9}>
                        <AdminItemColorsSelect colors={colors} event={colors_select} name={'color_rgb'} val={data}/>
                    </CCol>
                    <CCol xs={3}>
                        <ItemColors rgb={rgb}/>
                    </CCol>
                </CRow>
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput placeholder={'사이즈'} name={'size'} required defaultValue={data.itemSize} />
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput defaultValue={data.cnt} type={'number'} name={'cnt'} required/>
            </CTableDataCell>
            <CTableDataCell>
                <CFormSelect name={'status'} defaultValue={data.status}>
                    <option value='0'>선택</option>
                    <option value='판매'>
                        판매
                    </option>
                    <option value={'판매중지'}>
                        판매중지
                    </option>
                    <option value={'품절'}>
                        품절
                    </option>
                </CFormSelect>
            </CTableDataCell>
            <CTableDataCell>
                <CFormInput defaultValue={numberComma(Number(data.optionPrice))} name={'optionPrice'} onChange={optionPrice}/>
            </CTableDataCell>
        </CTableRow>
    );
}

export default AdminItemOptions;
