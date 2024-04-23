import React, {useEffect, useState} from 'react';
import {CCol, CFormInput, CFormSelect, CRow, CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import ItemColorsSelect from "src/views/admin/item/ItemColorsSelect";
import ItemColors from "src/views/admin/item/ItemColors";
import axios from "axios";

function ItemOptions({num}) {
  const [rgb, setRgb] = useState([255, 255, 255]);
  const [colors, setColors] = useState([])
  const colors_select = (e) => {
    setRgb(e.target.value.split(','))
  }

  const getColors = () => {
    axios.get('http://localhost:3011/admin/colors').then(res => {
      setColors(res.data);
    })
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
            <ItemColorsSelect colors={colors} event={colors_select} name={'color_rgb'} />
          </CCol>
          <CCol xs={3}>
            <ItemColors rgb={rgb}/>
          </CCol>
        </CRow>
      </CTableDataCell>
      <CTableDataCell>
        <CFormInput placeholder={'사이즈'} name={'size'} required />
      </CTableDataCell>
      <CTableDataCell>
        <CFormInput defaultValue={0} type={'number'} name={'cnt'} required />
      </CTableDataCell>
      <CTableDataCell>
        <CFormSelect aria-label="Default select example" name={'status'}>
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
        <CFormInput defaultValue={0} name={'optionPrice'}/>
      </CTableDataCell>
    </CTableRow>
  );
}

export default ItemOptions;
