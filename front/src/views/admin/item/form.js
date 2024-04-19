import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader, CCardImage, CCardText,
    CCol,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea, CImage,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import {DocsExample} from 'src/components'

const InputGroup = () => {
    return (
        <CRow>
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
                                name={'name'}
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
                                <CFormSelect aria-label="Default select example">
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
                                    checked
                                />
                            </CCol>
                            <CCol xs={1}>
                                <CFormCheck
                                    type="radio"
                                    name="gender"
                                    label="남"
                                />
                            </CCol>
                            <CCol xs={1}>
                                <CFormCheck
                                    type="radio"
                                    name="gender"
                                    label="여"
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
                            <CFormInput type="file" id="inputGroupFile02"/>
                            <CInputGroupText as="label" htmlFor="inputGroupFile02">
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
                                        <CCardText>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">파일명</CInputGroupText>
                                                <CFormInput
                                                    placeholder="원본 파일명"
                                                    aria-label="item-name"
                                                    name={'origin'}
                                                    readOnly
                                                />
                                            </CInputGroup>
                                        </CCardText>
                                        <CRow>
                                            <CCol xs={10}>
                                                <CFormCheck
                                                    className={'main_image_radio_label'}
                                                    type="radio"
                                                    name="image_file"
                                                    label="대표 이미지 설정"
                                                />
                                            </CCol>
                                            <CCol xs={2} ali>
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
                            <CCol xs={4}>
                                <CCard>
                                    <CCardImage
                                        src="/src/assets/images/react.jpg"
                                    />
                                </CCard>
                                <CCardBody>
                                    <CCardText>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText id="basic-addon1">파일명</CInputGroupText>
                                            <CFormInput
                                                placeholder="원본 파일명"
                                                aria-label="item-name"
                                                name={'origin'}
                                                readOnly
                                            />
                                        </CInputGroup>
                                    </CCardText>
                                    <CRow>
                                        <CCol xs={10}>
                                            <CFormCheck
                                                className={'main_image_radio_label'}
                                                type="radio"
                                                name="image_file"
                                                label="대표 이미지 설정"
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
                            </CCol>
                            <CCol xs={4}>
                                <CCard>
                                    <CCardImage
                                        src="//image.msscdn.net/images/goods_img/20240117/3800080/3800080_17114316442355_320.jpg"
                                    />
                                    <CCardBody>
                                        <CCardText>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText id="basic-addon1">파일명</CInputGroupText>
                                                <CFormInput
                                                    placeholder="원본 파일명"
                                                    aria-label="item-name"
                                                    name={'origin'}
                                                    readOnly
                                                />
                                            </CInputGroup>
                                        </CCardText>
                                        <CRow>
                                            <CCol xs={10}>
                                                <CFormCheck
                                                    className={'main_image_radio_label'}
                                                    type="radio"
                                                    name="image_file"
                                                    label="대표 이미지 설정"
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
                        <strong>상품 옵션</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CCardHeader>
                            색상 정보
                        </CCardHeader>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Checkboxes and radios</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-body-secondary small">
                            Place any checkbox or radio option within an input group&#39;s addon instead of text.
                        </p>
                        <DocsExample href="forms/input-group#checkboxes-and-radios">
                            <CInputGroup className="mb-3">
                                <CInputGroupText>
                                    <CFormCheck
                                        type="checkbox"
                                        value=""
                                        aria-label="Checkbox for following text input"
                                    />
                                </CInputGroupText>
                                <CFormInput aria-label="Text input with checkbox"/>
                            </CInputGroup>
                            <CInputGroup>
                                <CInputGroupText>
                                    <CFormCheck
                                        type="radio"
                                        value=""
                                        aria-label="Radio button for following text input"
                                    />
                                </CInputGroupText>
                                <CFormInput aria-label="Text input with radio button"/>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Multiple inputs</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-body-secondary small">
                            While multiple <code>&lt;CFormInput&gt;</code>s are supported visually, validation
                            styles are only available for input groups with a single{' '}
                            <code>&lt;CFormInput&gt;</code>.
                        </p>
                        <DocsExample href="forms/input-group#multiple-inputs">
                            <CInputGroup>
                                <CInputGroupText>First and last name</CInputGroupText>
                                <CFormInput aria-label="First name"/>
                                <CFormInput aria-label="Last name"/>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Multiple addons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-body-secondary small">
                            Multiple add-ons are supported and can be mixed with checkbox and radio input
                            versions..
                        </p>
                        <DocsExample href="forms/input-group#multiple-addons">
                            <CInputGroup className="mb-3">
                                <CInputGroupText>$</CInputGroupText>
                                <CInputGroupText>0.00</CInputGroupText>
                                <CFormInput aria-label="Dollar amount (with dot and two decimal places)"/>
                            </CInputGroup>
                            <CInputGroup>
                                <CFormInput aria-label="Dollar amount (with dot and two decimal places)"/>
                                <CInputGroupText>$</CInputGroupText>
                                <CInputGroupText>0.00</CInputGroupText>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Button addons</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-body-secondary small">
                            Multiple add-ons are supported and can be mixed with checkbox and radio input
                            versions..
                        </p>
                        <DocsExample href="forms/input-group#button-addons">
                            <CInputGroup className="mb-3">
                                <CButton type="button" color="secondary" variant="outline" id="button-addon1">
                                    Button
                                </CButton>
                                <CFormInput
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CFormInput
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <CButton type="button" color="secondary" variant="outline" id="button-addon2">
                                    Button
                                </CButton>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                                <CFormInput placeholder="" aria-label="Example text with two button addons"/>
                            </CInputGroup>
                            <CInputGroup>
                                <CFormInput
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username with two button addons"
                                />
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Buttons with dropdowns</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/input-group#buttons-with-dropdowns">
                            <CInputGroup className="mb-3">
                                <CDropdown variant="input-group">
                                    <CDropdownToggle color="secondary" variant="outline">
                                        Dropdown
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormInput aria-label="Text input with dropdown button"/>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CFormInput aria-label="Text input with dropdown button"/>
                                <CDropdown alignment="end" variant="input-group">
                                    <CDropdownToggle color="secondary" variant="outline">
                                        Dropdown
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CInputGroup>
                            <CInputGroup>
                                <CDropdown variant="input-group">
                                    <CDropdownToggle color="secondary" variant="outline">
                                        Dropdown
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormInput aria-label="Text input with 2 dropdown buttons"/>
                                <CDropdown alignment="end" variant="input-group">
                                    <CDropdownToggle color="secondary" variant="outline">
                                        Dropdown
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Segmented buttons</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/input-group#segmented-buttons">
                            <CInputGroup className="mb-3">
                                <CDropdown variant="input-group">
                                    <CButton type="button" color="secondary" variant="outline">
                                        Action
                                    </CButton>
                                    <CDropdownToggle color="secondary" variant="outline" split/>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CFormInput aria-label="Text input with segmented dropdown button"/>
                            </CInputGroup>
                            <CInputGroup>
                                <CFormInput aria-label="Text input with segmented dropdown button"/>
                                <CDropdown alignment="end" variant="input-group">
                                    <CButton type="button" color="secondary" variant="outline">
                                        Action
                                    </CButton>
                                    <CDropdownToggle color="secondary" variant="outline" split/>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Custom select</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/input-group#custom-select">
                            <CInputGroup className="mb-3">
                                <CInputGroupText as="label" htmlFor="inputGroupSelect01">
                                    Options
                                </CInputGroupText>
                                <CFormSelect id="inputGroupSelect01">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CFormSelect id="inputGroupSelect02">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                                <CInputGroupText as="label" htmlFor="inputGroupSelect02">
                                    Options
                                </CInputGroupText>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                                <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                            </CInputGroup>
                            <CInputGroup>
                                <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                                <CButton type="button" color="secondary" variant="outline">
                                    Button
                                </CButton>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Input group</strong> <small>Custom file input</small>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/input-group#custom-file-input">
                            <CInputGroup className="mb-3">
                                <CInputGroupText as="label" htmlFor="inputGroupFile01">
                                    Upload
                                </CInputGroupText>
                                <CFormInput type="file" id="inputGroupFile01"/>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CFormInput type="file" id="inputGroupFile02"/>
                                <CInputGroupText as="label" htmlFor="inputGroupFile02">
                                    Upload
                                </CInputGroupText>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CButton
                                    type="button"
                                    color="secondary"
                                    variant="outline"
                                    id="inputGroupFileAddon03"
                                >
                                    Button
                                </CButton>
                                <CFormInput
                                    type="file"
                                    id="inputGroupFile03"
                                    aria-describedby="inputGroupFileAddon03"
                                    aria-label="Upload"
                                />
                            </CInputGroup>
                            <CInputGroup>
                                <CFormInput
                                    type="file"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                />
                                <CButton
                                    type="button"
                                    color="secondary"
                                    variant="outline"
                                    id="inputGroupFileAddon04"
                                >
                                    Button
                                </CButton>
                            </CInputGroup>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default InputGroup
