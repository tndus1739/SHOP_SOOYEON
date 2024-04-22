import React, {useEffect, useState} from 'react';
import {CButton} from "@coreui/react";

function ItemColors({rgb}) {
  const [hex, setHex] = useState('')

  const getHex = (rgb) => {
    rgb.forEach(function (str, x, arr) {
      str = String(str)
      if (str.indexOf("%") > -1) str = Math.round(parseFloat(str) * 2.55);
      str = parseInt(str, 10).toString(16);
      if (str.length === 1) str = "0" + str;

      arr[x] = str;
    });
    setHex("#" + rgb.join(""))
  }

  useEffect(() => {
    getHex(rgb)
  }, [rgb]);

  useEffect(() => {
    getHex(rgb)
  }, []);

  const customColor = {
    backgroundColor: hex,
    border: '1px solid black'
  }
  return (
    <>
      <CButton shape={'rounded-pill'} style={customColor}>
        &nbsp;
      </CButton>
    </>
  );
}

export default ItemColors;
