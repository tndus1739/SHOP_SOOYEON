import React, {useEffect, useState} from 'react';
import {CButton, CCard, CCardBody, CCardHeader, CCardText, CCarousel, CCarouselItem, CCol, CRow} from "@coreui/react";
import {DocsExample} from "src/components";
import ReactImg from "src/assets/images/react.jpg";
import AngularImg from "src/assets/images/angular.jpg";
import VueImg from "src/assets/images/vue.jpg";
import {useLocation, useParams} from "react-router-dom";
import CIcon from "@coreui/icons-react";
import CoreUIIcons from "src/views/icons/coreui-icons/CoreUIIcons";
import {freeSet} from "@coreui/icons";


function Items({props}) {
    const [items, setItems] = useState([])
    const location = useLocation()
    const {category_id} = useParams()

    const img1 = 'https://cf.product-image.s.zigzag.kr/original/d/2024/2/22/202_202402221324280320_79765.gif?width=400&height=400&quality=80&format=jpeg'
    const img2 = 'https://cf.product-image.s.zigzag.kr/original/d/2024/4/12/7416_202404121417300928_37462.gif?width=400&height=400&quality=80&format=jpeg'
    const img3 = 'https://image.msscdn.net/images/plan_w_mobile_img/2024041616370700000006399.jpg'

    const [isBaskHovered, setIsBaskHovered] = useState(false);
    const [isLikeHovered, setIsLikeHovered] = useState(false);

    const getItems = () => {
        console.log(category_id)

        // 테스트
        let mock = []
        let mock_idx = 0;
        while (Number(category_id) > mock.length) {
            mock.push(
                [
                    {
                        id: mock_idx,
                        url: 'https://cf.product-image.s.zigzag.kr/original/d/2024/2/22/202_202402221324280320_79765.gif?width=400&height=400&quality=80&format=jpeg',
                        isMain: 1,
                    },
                    {
                        id: mock_idx,
                        url: 'https://cf.product-image.s.zigzag.kr/original/d/2024/4/12/7416_202404121417300928_37462.gif?width=400&height=400&quality=80&format=jpeg',
                        isMain: 0,
                    },
                    {
                        id: mock_idx,
                        url: 'https://image.msscdn.net/images/plan_w_mobile_img/2024041616370700000006399.jpg',
                        isMain: 0,
                    },
                ]
            )
        }

        setItems(mock)
    }

    useEffect(() => {
        getItems()
        console.log(freeSet['cilBasket'])
    }, [category_id]);

    const likeIcon = {
        // color: 'red',
        cursor: 'pointer',
    }

    const basketIcon = {
        // color: 'blue',
        cursor: 'pointer',
    }

    return (
        <>
            <CRow>
                {
                    items.map((it, index) => (
                        <CCol xs={2} key={index}>
                            <CCard className="mb-4">
                                <CCardBody>
                                    <CCarousel transition="crossfade" interval={4000}>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={img1} alt="slide 1" height={200}/>
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={img2} alt="slide 2" height={200}/>
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={img3} alt="slide 3" height={200}/>
                                        </CCarouselItem>
                                    </CCarousel>
                                    <CRow>
                                        <CCol>
                                            <CCardText>
                                                상품{index}
                                            </CCardText>
                                        </CCol>
                                        <CCol style={{textAlign: 'right'}}>
                                            {/*<CButton color={'primary'} variant={'outline'} size={'sm'}>*/}
                                            {/*    <CIcon icon={freeSet['cilBasket']} size={'sm'}/>*/}
                                            {/*</CButton>*/}
                                            {/*<CButton color={'danger'} variant={'outline'} size={'sm'}>*/}
                                            {/*<CIcon icon={freeSet['cilHeart']} size={'sm'} />*/}
                                            {/*</CButton>*/}
                                            <strong
                                                style={basketIcon}
                                                onMouseEnter={() =>  setIsBaskHovered(true)}
                                                onMouseLeave={() => setIsBaskHovered(false)}
                                            >
                                                <CIcon icon={freeSet['cilBasket']} size={isBaskHovered ? 'lg' : ''} />
                                            </strong>
                                            <strong
                                                style={likeIcon}
                                                onMouseEnter={() =>  setIsLikeHovered(true)}
                                                onMouseLeave={() => setIsLikeHovered(false)}
                                            >
                                                <CIcon icon={freeSet['cilHeart']} size={isLikeHovered ? 'lg' : ''} />
                                            </strong>
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
