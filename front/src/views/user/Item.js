import React, {useEffect, useRef, useState} from 'react';
import {
  CButton, CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCarousel,
  CCarouselItem,
  CCol, CFormInput,
  CFormSelect, CInputGroup, CInputGroupText,
  CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ItemOption from "src/views/user/ItemOption";

function Item() {
  const [group, setGroup] = useState({images: [], category: {name: ''}, items: []})
  const {itemGroupId} = useParams()
  const [itemCategory, setItemCategory] = useState([])
  const [itemOption, setItemOption] = useState([])
  const sizeRef = useRef(null)
  const [selectedItem, setSelectedItem] = useState([])
  const [total, setTotal] = useState(0)

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getItem = () => {
    axios.get(`http://localhost:3011/item/test/${itemGroupId}`).then((res) => {
      console.log(res.data)
      setGroup(res.data)
    })
  }

  const selectColor = (e) => {
    const sel = sizeRef.current
    sel.options[0].selected = true
    if (e.target.value != '0') {
      const items = group.items
      const sizes = []
      if (e.target.value) {
        for (const item of items) {
          if (item.colors.id == e.target.value) {
            sizes.push(item)
          }
        }
        setItemOption(sizes)
      } else {
        setItemOption([])
      }
      sel.removeAttribute('disabled')
    } else {
      sel.setAttribute('disabled', true)
    }
  }

  const selectItem = (e) => {
    const id = e.target.value
    const selItems = []
    if (id != '0') {
      for (const si of selectedItem) {
        if (si.id == id) {
          return
        } else {
          selItems.push(si)
        }
      }
      for (const it of group.items) {
        if (id == it.id) {
          it['count'] = 1
          selItems.push(it)
          calculate_total(id, 1)
        }
      }
    }
    console.log(selItems)
    setSelectedItem(selItems)
  }

  const deleteItem = (id) => {
    let idx = 0
    let arr = []
    for(const item of selectedItem) {
      if(selectedItem[idx].id != id) {
        arr.push(selectedItem[idx])
      }
      idx++
    }
    setSelectedItem(arr)
    if(!arr.length) {
      sizeRef.current.options[0].selected = true
    }
  }

  const calculate_total = (id, count) => {
    let totalPrice = 0
    for(const item of selectedItem) {
      if(item.id == id) {
        item.count = count
      }
      totalPrice += (item.salePrice + item.optionPrice) * item.count
    }
    setTotal(totalPrice)
  }

  useEffect(() => {
    // item['images'] = []
    getItem()
  }, []);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CCarousel transition="crossfade" interval={4000} controls>
                {
                  group.images.map((img, img_idx) => (
                    <CCarouselItem key={img_idx}>
                      <img className="d-block w-100" src={'http://localhost:3011' + img.path}
                           alt={img.isMain ? "slide 1" : "slide " + img_idx + 1}
                           height={500}/>
                    </CCarouselItem>
                  ))
                }
              </CCarousel>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader>
              <strong>Product Info</strong>&nbsp;&nbsp;
              <small><p className="text-body-secondary small" style={{display: "inline-block", marginBottom: 0}}>제품
                정보</p></small>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={6}>
                  <strong><p>상품명</p></strong>
                </CCol>
                <CCol xs={6}>
                  <p>{group.name}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={6}>
                  <strong><p>조회수</p></strong>
                </CCol>
                <CCol xs={6}>
                  <p>{group.views}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={6}>
                  <strong><p>누적판매</p></strong>
                </CCol>
                <CCol xs={6}>
                  <p>{group.views}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={6}>
                  <strong>좋아요</strong>
                </CCol>
                <CCol xs={6}>
                  {group.views}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <p/>
          <CCard>
            <CCardHeader>
              <strong>Price Info</strong>&nbsp;&nbsp;
              <small>
                <p className="text-body-secondary small" style={{display: "inline-block", marginBottom: 0}}>
                  가격 정보
                </p>
              </small>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  판매가 :
                </CCol>
                {
                  group.isDiscounted ?
                    <>
                      <CCol>
                        <small style={{textDecoration: 'line-through', color: 'gray'}}>
                          {addCommas(group.defaultPrice)}
                        </small>
                        &nbsp;&nbsp;
                        <strong>
                          {addCommas(group.salePrice)}
                        </strong>
                        &nbsp;
                        <small>
                          <strong style={{color: 'red'}}>
                            {
                              `(${((1 - (group.salePrice / group.defaultPrice)) * 100).toFixed(1)}%)`
                            }
                          </strong>
                        </small>
                      </CCol>
                    </>
                    :
                    <>
                      <CCol>
                        <strong>
                          {addCommas(Number(group.defaultPrice))}
                        </strong>
                      </CCol>
                    </>
                }
              </CRow>
            </CCardBody>
          </CCard>
          <p/>
          <CCard>
            <CCardHeader>
              <strong>Product Option</strong>&nbsp;&nbsp;
              <small>
                <p className="text-body-secondary small" style={{display: "inline-block", marginBottom: 0}}>
                  상품 옵션
                </p>
              </small>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CFormSelect size="sm" onChange={selectColor}>
                    <option value={0}>색상</option>
                    {
                      group.items.map((it, index) => (
                        <option value={it.colors.id} key={index}>
                          {it.colors.name}
                        </option>
                      ))
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
              <p/>
              <CRow>
                <CCol>
                  <CFormSelect size="sm" ref={sizeRef} onChange={selectItem} disabled>
                    <option value={'0'}>사이즈</option>
                    {
                      itemOption.map((io, index) => (
                        <option value={io.id} key={index}>
                          {io.itemSize}&nbsp;{`(+${addCommas(io.optionPrice)})`}
                        </option>
                      ))
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
              <p/>
              <CRow>
                <CCol>
                  <CTable hover style={{textAlign: 'center'}}>
                    {
                      selectedItem.length ?
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">색상</CTableHeaderCell>
                            <CTableHeaderCell scope="col">사이즈</CTableHeaderCell>
                            <CTableHeaderCell scope="col">옵션가</CTableHeaderCell>
                            <CTableHeaderCell scope="col">수량</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        :
                        <></>
                    }
                    <CTableBody>
                      {
                        selectedItem.map((it, index) => (
                          <ItemOption it={it} index={index} key={index} deleteItem={deleteItem} total={calculate_total} />
                        ))
                      }
                    </CTableBody>
                  </CTable>
                </CCol>
              </CRow>
              {
                selectedItem.length ?
                  <CRow>
                    <CCol style={{textAlign: 'left', fontSize: '25px'}}>
                      <strong>총 금액 :</strong>
                    </CCol>
                    <CCol style={{textAlign: 'right', fontSize: '25px'}}>
                      <strong>
                        {addCommas(Number(total))}
                      </strong>
                    </CCol>
                  </CRow>
                  :
                  <></>
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Item;
