import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader, CCardImage, CCardTitle,
  CCol, CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react'
import ItemOptions from "src/views/admin/item/ItemOptions";
import SizeTable from "src/views/admin/item/SizeTable";

const ItemForm = () => {
  const [sort, setSort] = useState([1]);
  const [readOnly1, setReadOnly1] = useState(true);
  const [realPrice, setRealPrice] = useState(0)
  const [defaultPrice, setDefaultPrice] = useState(0)
  const [isDiscount, setIsDiscount] = useState(false);
  const [discountRate, setDiscountRate] = useState('0%');

  const addItem = () => {
    let arr = []
    for (const it of sort) {
      arr.push(it)
    }
    arr.push(sort[sort.length - 1] + 1)
    setSort(arr)
  }

  const discEvent = (e) => {
    if(e.target.checked) {
      setIsDiscount(true)
      setReadOnly1(false)
    } else {
      setIsDiscount(false)
      setReadOnly1(true)
      setRealPrice(0)
    }
  }

  const inputRealPrice = (e) => {
    e.target.value = Number(e.target.value.toString().replace(/[^0-9]/gi, ''))
    if(e.target.value > defaultPrice) {
      e.target.value = defaultPrice
    }
    const real_ = e.target.value
    const default_ = defaultPrice

    e.target.value = numberComma(e.target.value)
    setRealPrice(e.target.value)
    getDiscount(default_, real_)
  }

  const inputDefaultPrice = (e) => {
    e.target.value = numberComma(e.target.value)
    setRealPrice(0)
    setDefaultPrice(Number(e.target.value.toString().replace(/[^0-9]/gi, '')))
    getDiscount(Number(e.target.value.toString().replace(/[^0-9]/gi, '')), 0)
  }

  const numberComma = (val) => {
    return val.toString().replace(/[^0-9]/gi, '')
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  const getDiscount = (origin, real) => {
    const rate = (((origin - real) / origin) * 100).toFixed(2) + '%'
    setDiscountRate(rate)
  }

  const saveItem = (e) => {
    e.preventDefault()
    if(!confirm('상품을 등록하시겠습니까?')) {
      return false
    }
    const frm = new FormData(e.target)

    //  이미지========================================================

    //  이미지========================================================

    //  상품 옵션========================================================
    const itemOptions = document.querySelectorAll('tr.options')
    let items = []
    for(const io of itemOptions) {
      const item = {
        name: '',
        size: io.querySelector('input[name=""]'),
        cnt: '',
        status: '',
        optionPrice: '',
        total: '',
        color_id: '',
      }
    }
    //  상품 옵션========================================================

    //  사이즈========================================================
    const sizes = document.querySelectorAll('.sizeInfo input')
    const sizeInfo = Array.from(sizes).sort((a, b) => {
      return a.dataset.row - b.dataset.row
    })
    let sizeTable = []
    let num = 0;
    while(sizeInfo.length) {
      const arr = []
      for (const si of sizeInfo) {
        if (si.dataset.row == num) {
          const obj = {
            id: si.id,
            value: si.value
          }
          arr.push(obj)
          sizeTable[num] = arr
        }
      }
      num++
      if(num == sizeInfo.length + 1) {
        break
      }
    }
    // console.log(JSON.stringify(sizeTable))
    //  사이즈========================================================

    frm.append('sizeTable', JSON.stringify(sizeTable))

    const data = {}
    for(const k of frm.keys()) {
      data[k] = frm.get(k)
    }
  }


  return (
    <CRow>
      <CForm onSubmit={(e) => saveItem(e)}>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>기본 정보</strong>
            </CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">상품명</CInputGroupText>
                <CFormInput
                  placeholder="item"
                  aria-label="item-name"
                  id={'name'}
                  name={'item_name'}
                />
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <p className="text-body-secondary small">
                    1차 카테고리
                  </p>
                  <CFormSelect aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={6}>
                  <p className="text-body-secondary small">
                    2차 카테고리
                  </p>
                  <CFormSelect aria-label="Default select example" name={'category_id'}>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <br/>
              <CRow>
                <p className="text-body-secondary small">
                  성별
                </p>
                <CCol xs={1}>
                  <CFormCheck
                    type="radio"
                    name="gender"
                    label="공용"
                    defaultChecked
                    value={'all'}
                  />
                </CCol>
                <CCol xs={1}>
                  <CFormCheck
                    type="radio"
                    name="gender"
                    label="남"
                    value={'M'}
                  />
                </CCol>
                <CCol xs={1}>
                  <CFormCheck
                    type="radio"
                    name="gender"
                    label="여"
                    value={'w'}
                  />
                </CCol>
              </CRow>
              <br/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>상품 이미지</strong>
            </CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CFormInput type="file" id="file"/>
                <CInputGroupText as="label" htmlFor="file">
                  Upload
                </CInputGroupText>
              </CInputGroup>
              <CRow>
                <CCol xs={4}>
                  <CCard>
                    <CCardImage
                      src="//image.msscdn.net/images/goods_img/20240404/4026180/4026180_17133191594211_320.jpg"
                    />
                    <CCardBody>
                      <CRow>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">파일명</CInputGroupText>
                          <CFormInput
                            placeholder="원본 파일명"
                            aria-label="item-name"
                            readOnly
                          />
                        </CInputGroup>
                      </CRow>
                      <CRow>
                        <CCol xs={10}>
                          <CFormCheck
                            className={'main_image_radio_label'}
                            type="radio"
                            label="대표 이미지 설정"
                            defaultChecked
                          />
                        </CCol>
                        <CCol xs={2}>
                          <CButton
                            color={'danger'}
                            variant="outline"
                          >
                            x
                          </CButton>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>옵션</strong>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={6}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">기본</CInputGroupText>
                    <CFormInput
                      placeholder="기본"
                      aria-label="item-name"
                      name={'originPrice'}
                      onChange={inputDefaultPrice}
                    />
                  </CInputGroup>
                  <CFormCheck
                    type="checkbox"
                    name="isDiscounted"
                    label="할인적용"
                    onChange={discEvent}
                    checked={isDiscount}
                    value={isDiscount ? 'Y' : 'N'}
                  />
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">할인율</CInputGroupText>
                    <CFormInput
                      placeholder="기본"
                      aria-label="item-name"
                      name={'discountRate'}
                      disabled
                      readOnly
                      value={discountRate}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">실제 판매가</CInputGroupText>
                    <CFormInput
                      placeholder="기본"
                      aria-label="item-name"
                      name={'realPrice'}
                      readOnly={readOnly1}
                      onChange={inputRealPrice}
                      value={realPrice}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CCardTitle>
                <CButton color={'primary'} onClick={addItem}>
                  추가 +
                </CButton>
              </CCardTitle>
              {/*<ItemColors></ItemColors>*/}
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" width={'5%'}>#</CTableHeaderCell>
                    <CTableHeaderCell scope="col" width={'25%'}>색상</CTableHeaderCell>
                    <CTableHeaderCell scope="col" width={'10%'}>사이즈</CTableHeaderCell>
                    <CTableHeaderCell scope="col" width={'15%'}>수량</CTableHeaderCell>
                    <CTableHeaderCell scope="col" width={'25%'}>판매상태</CTableHeaderCell>
                    <CTableHeaderCell scope="col" width={'30%'}>옵션가</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    sort.map((st, index) => (
                      <ItemOptions num={st} key={index}/>
                    ))
                  }
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>사이즈표</strong>
            </CCardHeader>
            <CCardBody className={'sizeInfo'}>
              <SizeTable/>
            </CCardBody>
          </CCard>
        </CCol>
        <CRow>
          <CCol>
            <CButton color={'primary'} style={{float: 'right'}} type={'submit'}>
              저장
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CRow>
  )
}

export default ItemForm
