import React, {useEffect} from 'react';
import {CFormSelect} from "@coreui/react";

function AdminItemColorsSelect({colors, event, name, val}) {
  const data = new Object(val)

  useEffect(() => {
    const select = document.querySelector(`.colors_${data.id}`)
    if(select.options.length > 1 && data.colors) {
      select.value = data.colors.rgb
      event(select.value)
    }
  }, [colors]);

  return (
    <>
      <CFormSelect onChange={(e) => event(e.target.value)} name={name} className={`colors_${data.id}`}>
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

export default AdminItemColorsSelect;
