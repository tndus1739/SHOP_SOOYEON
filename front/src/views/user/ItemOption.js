import React, {useEffect, useState} from 'react';
import {CButton, CFormInput, CInputGroup, CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilDelete, cilMinus, cilPlus} from "@coreui/icons";

function ItemOption({it, index, deleteItem, total}) {
  const [count, setCount] = useState(1)

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const minus = () => {
    if (count == 1) {
      return
    }
    setCount(count - 1)
  }

  const plus = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    total(it.id, count)
  }, [count]);

  return (
    <>
      <CTableRow>
        <CTableHeaderCell scope="row">{Number(index + 1)}</CTableHeaderCell>
        <CTableDataCell>
          {it.colors.name}
        </CTableDataCell>
        <CTableDataCell>
          {it.itemSize}
        </CTableDataCell>
        <CTableDataCell>
          {addCommas(it.optionPrice)}
        </CTableDataCell>
        <CTableDataCell width={'30%'}>
          <CInputGroup className="mb-1" size={'sm'}>
            <CButton type="button" color="secondary" variant="outline" id="button-addon1"
                     size={'sm'} style={{width: '30%'}} onClick={minus}>
              <CIcon icon={cilMinus}/>
            </CButton>
            <CFormInput
              type={'number'}
              value={count}
              readOnly
              style={{textAlign: 'center'}}
            />
            <CButton type="button" color="secondary" variant="outline" id="button-addon1" style={{width: '30%'}}
                     onClick={plus}>
              <CIcon icon={cilPlus}/>
            </CButton>
          </CInputGroup>
        </CTableDataCell>
        <CTableDataCell width={'10%'}>
          <CButton color={"danger"} size={'sm'} onClick={() => deleteItem(it.id)}>
            <CIcon icon={cilDelete}/>
          </CButton>
        </CTableDataCell>
      </CTableRow>
    </>
  );
}

export default ItemOption;
