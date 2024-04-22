import React, {useEffect, useState} from 'react';
import {
  CButton,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";

function SizeTable(props) {
  const [row, setRow] = useState([1]);
  const [col, setCol] = useState([1]);

  const addRight = () => {
    if(col.length === 6) {
      alert("6개까지만 가능합니다.")
      return
    }
    let arr = []
    for (const c of col) {
      arr.push(c)
    }
    arr.push(col[col.length - 1] + 1)
    setCol(arr)
  }

  const addBottom = () => {
    let arr = []
    for (const r of row) {
      arr.push(r)
    }
    arr.push(row[row.length - 1] + 1)
    setRow(arr)
  }

  return (
    <CTable hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" width={'10%'}>#</CTableHeaderCell>
          {
            col.map((it, index) => (
              <CTableHeaderCell scope="col" width={'15%'} key={index}>
                <CFormInput placeholder={'기준'} id={0 + '-' + (it)} data-row={0} data-col={it} ></CFormInput>
              </CTableHeaderCell>
            ))
          }
          <CTableHeaderCell>
            <CButton color={'primary'} onClick={addRight}>+</CButton>
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          row.map((it, index) => (
            <CTableRow key={index}>
              <CTableDataCell active>
                <CFormInput placeholder={'사이즈'} id={(it) + '-0'} data-row={it} data-col={0} />
              </CTableDataCell>
              {
                col.map((c, cIndex) => (
                  <CTableDataCell key={cIndex}>
                    <CFormInput placeholder={String(it) + '-' + Number(cIndex + 1)} id={String(it) + '-' + Number(cIndex + 1)} data-row={it} data-col={cIndex + 1} />
                  </CTableDataCell>
                ))
              }
            </CTableRow>
          ))
        }
        <CTableRow>
          <CTableDataCell>
            <CButton color={'primary'} onClick={addBottom}>+</CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  );
}

export default SizeTable;
