import React, {useEffect, useState} from 'react';
import {CButton, CCard, CCardBody, CCardHeader, CCardText, CCarousel, CCarouselItem, CCol, CRow} from "@coreui/react";
import {DocsExample} from "src/components";
import ReactImg from "src/assets/images/react.jpg";
import AngularImg from "src/assets/images/angular.jpg";
import VueImg from "src/assets/images/vue.jpg";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CIcon from "@coreui/icons-react";
import CoreUIIcons from "src/views/icons/coreui-icons/CoreUIIcons";
import {freeSet} from "@coreui/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalf, faHeart} from "@fortawesome/free-solid-svg-icons"

import axios from "axios";

function Items({props}) {
  const navigator = useNavigate()
  const [items, setItems] = useState([])
  const {category_id} = useParams()

  const img1 = 'https://cf.product-image.s.zigzag.kr/original/d/2024/2/22/202_202402221324280320_79765.gif?width=400&height=400&quality=80&format=jpeg'
  const img2 = 'https://cf.product-image.s.zigzag.kr/original/d/2024/4/12/7416_202404121417300928_37462.gif?width=400&height=400&quality=80&format=jpeg'
  const img3 = 'https://image.msscdn.net/images/plan_w_mobile_img/2024041616370700000006399.jpg'

  const [isBaskHovered, setIsBaskHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);

  const overflow_ellipsis = {
    whiteSpace: 'nowrap',       /* 텍스트를 한 줄에 표시합니다. */
    overflow: 'hidden',         /* 넘치는 부분을 숨깁니다. */
    textOverflow: 'ellipsis',   /* 넘치는 부분에 대해 생략 부호를 표시합니다. */
  }

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getItems = () => {
    axios.get('http://localhost:3011/items/test/' + category_id).then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
  }

  useEffect(() => {
    // getItemsTest()
    getItems()
  }, [category_id]);

  const likeIcon = {
    color: 'red',
    cursor: 'pointer',
  }

  const basketIcon = {
    cursor: 'pointer',
  }

  const toItemDetail = (id) => {
    navigator(`/item/${id}`)
    console.log(id)
  }

  return (
    <>
      <CRow>
        {
          items.map((it, index) => (
            <CCol xs={2} key={index}>
              <CCard className="mb-4" onClick={() => toItemDetail(it.id)} style={{cursor: 'pointer'}}>
                <CCardBody>
                  <CCarousel transition="crossfade" interval={4000}>
                    {
                      it.images.map((img, img_idx) => (
                        <CCarouselItem key={img_idx}>
                          <img className="d-block w-100" src={'http://localhost:3011' + img.path}
                               alt={img.isMain ? "slide 1" : "slide " + img_idx + 1}
                               height={200}/>
                        </CCarouselItem>
                      ))
                    }
                  </CCarousel>
                  <CRow>
                    <CCol xs={8}>
                      <CCardText style={overflow_ellipsis}>
                        {it.name}
                      </CCardText>
                    </CCol>
                    <CCol style={{textAlign: 'right'}}>
                      {/*<strong*/}
                      {/*    style={basketIcon}*/}
                      {/*    onMouseEnter={() => setIsBaskHovered(true)}*/}
                      {/*    onMouseLeave={() => setIsBaskHovered(false)}*/}
                      {/*>*/}
                      {/*    <CIcon icon={freeSet['cilBasket']} size={isBaskHovered ? 'lg' : 'sm'}/>*/}
                      {/*</strong>*/}
                      <strong
                        style={likeIcon}
                        onMouseEnter={() => setIsLikeHovered(true)}
                        onMouseLeave={() => setIsLikeHovered(false)}
                      >
                        {/*<CIcon icon={freeSet['cilHeart']}/>*/}
                        <FontAwesomeIcon icon={faHeart} size={isLikeHovered ? 'lg' : 'sm'}/>
                      </strong>
                    </CCol>
                  </CRow>
                  {
                    it.isDiscounted ?
                      <>
                        <CRow>
                          <CCol style={{textDecoration: 'line-through', color: 'gray'}}>
                            {addCommas(it.defaultPrice)}
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs={6} style={{color: 'red'}}>
                            {
                              ((1 - (it.salePrice / it.defaultPrice)) * 100).toFixed(1) + '%'
                            }
                          </CCol>
                          <CCol xs={6} style={{textAlign: 'right'}}>
                            {addCommas(it.salePrice)}
                          </CCol>
                        </CRow>
                      </>
                      :
                      <>
                        <CRow>
                          <CCol>
                            {addCommas(it.salePrice)}
                          </CCol>
                        </CRow>
                      </>
                  }
                  <CRow>
                    <CCol style={{color: 'gold'}}>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStarHalf}/>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          ))
        }
      </CRow>
    </>
  );
}

export default Items;
