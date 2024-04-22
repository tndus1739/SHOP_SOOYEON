import React from 'react';
import {CFormSelect} from "@coreui/react";

function ItemColorsSelect({colors, event}) {

  return (
    <>
      <CFormSelect onChange={event}>
        <option>선택</option>
        {
          colors.map((item, index) => (
            <option value={item.rgb} key={index}>
              {item.name}
            </option>
          ))
        }
      </CFormSelect>
    </>
  );
}

export default ItemColorsSelect;
