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
            <ItemColorsSelect colors={colors} event={colors_select} />
          </CCol>
          <CCol xs={3}>
            <ItemColors rgb={rgb}/>
          </CCol>
        </CRow>
      </CTableDataCell>
      <CTableDataCell>
        <CFormInput placeholder={'사이즈'}/>
      </CTableDataCell>
      <CTableDataCell>
        <CFormInput defaultValue={0} type={'number'}/>
      </CTableDataCell>
      <CTableDataCell>
        <CFormSelect aria-label="Default select example">
          <option>선택</option>
          <option>
            판매
          </option>
          <option>
            판매중지
          </option>
          <option>
            품절
          </option>
        </CFormSelect>
      </CTableDataCell>
      <CTableDataCell>
        <CFormInput defaultValue={0}/>
      </CTableDataCell>
    </CTableRow>
  );
}

export default ItemOptions;
