import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CImage,
  CRow, CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ItemList(props) {
  const navigator = useNavigate()
  const [items, setItems] = useState([])


  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getItems = () => {
    axios.get('http://localhost:3011/admin/items/test').then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
  }

  const itemDetail = (itemGroupId) => {
    navigator(`/admin/item/${itemGroupId}`)
  }

  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>

            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">메인 이미지</CTableHeaderCell>
                    <CTableHeaderCell scope="col">상품명</CTableHeaderCell>
                    <CTableHeaderCell scope="col">카테고리</CTableHeaderCell>
                    <CTableHeaderCell scope="col">판매가격</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    items.length ?
                      items.map((it, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                          <CTableDataCell onClick={() => itemDetail(it.id)}>
                            {
                              it.images.map((img, idx) => (
                                img.isMain ?
                                  <CImage src={`http://localhost:3011${img.path}`} height={60} key={idx}
                                          style={{cursor: 'pointer'}}/>
                                  :
                                  <CImage key={idx}></CImage>
                              ))
                            }
                          </CTableDataCell>
                          <CTableDataCell onClick={() => itemDetail(it.id)}>
                            <strong style={{cursor: 'pointer'}}>
                              {it.name}
                            </strong>
                          </CTableDataCell>
                          <CTableDataCell>{it.category.name}</CTableDataCell>
                          <CTableDataCell>{addCommas(it.salePrice)}</CTableDataCell>
                        </CTableRow>
                      ))
                      :
                      <CTableRow>
                        <CTableDataCell colSpan={5}>등록된 상품이 없습니다.</CTableDataCell>
                      </CTableRow>
                  }
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ItemList;
