
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import '../../../scss/newAccordion.css'; 

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
      {/*     <CCardHeader>
            <strong></strong>
          </CCardHeader> */}
          <CCardBody>
            <p className="text-body-secondary small">
            나의 쇼핑활동
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>주문내역조회</CAccordionHeader>
                  <CAccordionBody>
  <form name="orderListSearchForm" id="orderListSearchForm" method="get" action="/order-service/mypage/order_list_opt">
    <input type="hidden" name="state_type" value="" />
    <input type="hidden" name="ord_state" value="" />
    <input type="hidden" name="period" value="1year" />
    <input type="hidden" name="dt_fr" value="" />
    <input type="hidden" name="dt_to" value="" />
    <input type="hidden" name="page" value="1" />
    <input type="hidden" name="version" value="v2" />
  </form>

  <div class="order-filter">
      <div class="order-filter-period">
        <div class="order-filter-period__tab">
          <button type="button" class="order-filter-period__tab__button order-filter-period__tab__button--active" data-period="1year" onclick="OrderFilter.setPeriod('1year');">최근 1년</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1week" onclick="OrderFilter.setPeriod('1week');">1주일</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1month" onclick="OrderFilter.setPeriod('1month');">1개월</button>
          <button type="button" class="order-filter-period__tab__button" data-period="3month" onclick="OrderFilter.setPeriod('3month');">3개월</button>
        </div>
      </div>
    </div>

    <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        </div>
    </div>
    <div class="order-filter-search">
      <div class="order-filter-search__input-wrap">
        <input type="text" class="order-filter-search__input" name="keyword" value="" placeholder="상품명/브랜드명 검색" onchange="activateSearchButton();" />
      </div>

      <button type="button" class="order-filter-confirm order-filter-confirm--active" onclick="search();">조회하기</button>
    </div>

    <table class="n-table table-col n-order-view">
    <thead>
      <tr>
        <th scope="col" style={{ width: "*" }}>상품정보</th>
        <th scope="col" style={{ width: "14.2%" }}>주문일자</th>
        <th scope="col" style={{ width: "14.2%" }}>주문번호</th>
        <th scope="col" style={{ width: "14.2%" }}>주문금액</th>
        <th scope="col" colspan="2" style={{ width: "21.4%" }}>주문 상태</th>
      </tr>
    </thead>
    <tbody>
      주문하신내역이없습니다.
    </tbody>
  </table>

</CAccordionBody>

</CAccordionItem>

                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>구매후기</CAccordionHeader>
                  <CAccordionBody>
                  <form name="orderListSearchForm" id="orderListSearchForm" method="get" action="/order-service/mypage/order_list_opt">
    <input type="hidden" name="state_type" value="" />
    <input type="hidden" name="ord_state" value="" />
    <input type="hidden" name="period" value="1year" />
    <input type="hidden" name="dt_fr" value="" />
    <input type="hidden" name="dt_to" value="" />
    <input type="hidden" name="page" value="1" />
    <input type="hidden" name="version" value="v2" />
  </form>

  <div class="order-filter">
      <div class="order-filter-period">
        <div class="order-filter-period__tab">
          <button type="button" class="order-filter-period__tab__button order-filter-period__tab__button--active" data-period="1year" onclick="OrderFilter.setPeriod('1year');">최근 1년</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1week" onclick="OrderFilter.setPeriod('1week');">1주일</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1month" onclick="OrderFilter.setPeriod('1month');">1개월</button>
          <button type="button" class="order-filter-period__tab__button" data-period="3month" onclick="OrderFilter.setPeriod('3month');">3개월</button>
        </div>
      </div>
    </div>

    <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        </div>
    </div>
    <div class="order-filter-search">
      <div class="order-filter-search__input-wrap">
        {/* <input type="text" class="order-filter-search__input" name="keyword" value="" placeholder="상품명/브랜드명 검색" onchange="activateSearchButton();" /> */}
      </div>

      <button type="button" class="order-filter-confirm order-filter-confirm--active" onclick="search();">조회하기</button>
    </div>

    <table class="n-table table-col n-order-view">
    <thead>
      <tr>
        <th scope="col" style={{ width: "*" }}>상품정보</th>
        {/* <th scope="col" style={{ width: "21%" }}>구매확정일</th> */}
        {/* <th scope="col" style={{ width: "14.2%" }}>주문번호</th> */}
        {/* <th scope="col" style={{ width: "14.2%" }}>주문금액(수량)</th> */}
        {/* <th scope="col" colspan="2" style={{ width: "%" }}>후기 작성</th> */}
        <th scope="col" colspan="2" style={{ width: "21.4%" }}>후기작성</th>
      </tr>
    </thead>
    <tbody>
      {/* 구매하신내역이없습니다. */}
    </tbody>
  </table>
                  </CAccordionBody>
                </CAccordionItem>

                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>상품문의</CAccordionHeader>
                  <CAccordionBody>
                  <form name="orderListSearchForm" id="orderListSearchForm" method="get" action="/order-service/mypage/order_list_opt">
    <input type="hidden" name="state_type" value="" />
    <input type="hidden" name="ord_state" value="" />
    <input type="hidden" name="period" value="1year" />
    <input type="hidden" name="dt_fr" value="" />
    <input type="hidden" name="dt_to" value="" />
    <input type="hidden" name="page" value="1" />
    <input type="hidden" name="version" value="v2" />
  </form>

  <div class="order-filter">
      <div class="order-filter-period">
        <div class="order-filter-period__tab">
          <button type="button" class="order-filter-period__tab__button order-filter-period__tab__button--active" data-period="1year" onclick="OrderFilter.setPeriod('1year');">최근 1년</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1week" onclick="OrderFilter.setPeriod('1week');">1주일</button>
          <button type="button" class="order-filter-period__tab__button" data-period="1month" onclick="OrderFilter.setPeriod('1month');">1개월</button>
          <button type="button" class="order-filter-period__tab__button" data-period="3month" onclick="OrderFilter.setPeriod('3month');">3개월</button>
        </div>
      </div>
    </div>

    <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        <div class="order-filter-period__date">
        <div class="order-filter-period__input-wrap">
          <input type="date" class="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onchange="checkDateFormat(this);" />
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-color">
            <title>Calendar icon</title>
            <g id="Ic/18/Line/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M15,15 L3,15 L3,3 L6,3 L6,2 L7,2 L7,3 L11,3 L11,2 L12,2 L12,3 L15,3 L15,15 Z M14,8 L4,8 L4,14 L14,14 L14,8 Z M6,4 L4,4 L4,7 L14,7 L14,4 L12,4 L12,5 L11,5 L11,4 L7,4 L7,5 L6,5 L6,4 Z" id="Combined-Shape" fill="#000000"></path>
            </g>
          </svg>
        </div>
        </div>
    </div>
    <div class="order-filter-search">
      <div class="order-filter-search__input-wrap">
        <input type="text" class="order-filter-search__input" name="keyword" value="" placeholder="전체보기" onchange="activateSearchButton();" />
      </div>

      <button type="button" class="order-filter-confirm order-filter-confirm--active" onclick="search();">조회하기</button>
    </div>

    <table class="n-table table-col n-order-view">
    <thead>
      <tr>
        <th scope="col" style={{ width: "*" }}>상품정보</th>
        {/* <th scope="col" style={{ width: "21%" }}>구매확정일</th> */}
        {/* <th scope="col" style={{ width: "14.2%" }}>주문번호</th> */}
        {/* <th scope="col" style={{ width: "14.2%" }}>주문금액(수량)</th> */}
        {/* <th scope="col" colspan="2" style={{ width: "%" }}>후기 작성</th> */}
        <th scope="col" colspan="2" style={{ width: "21.4%" }}>후기작성</th>
      </tr>
    </thead>
    <tbody>
      등록된 상품문의가 없습니다.
    </tbody>
  </table>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>좋아요</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>

                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>정보수정</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>

                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>최근본상품</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>

                <CAccordionItem itemKey={7}>
                  <CAccordionHeader>1대1 문의 내역</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>

              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>

        {/* <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard> */}
      </CCol>
    </CRow>
  )
}

export default Accordion
