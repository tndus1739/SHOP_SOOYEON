import React from 'react';
import {CFormSelect} from "@coreui/react";

function ItemColorsSelect({colors, event, name}) {

  return (
    <>
      <CFormSelect onChange={event} name={name}>
        <option value='0'>선택</option>
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
