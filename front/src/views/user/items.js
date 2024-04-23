import React, {useEffect, useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCardText, CCarousel, CCarouselItem, CCol, CRow} from "@coreui/react";
import {DocsExample} from "src/components";
import ReactImg from "src/assets/images/react.jpg";
import AngularImg from "src/assets/images/angular.jpg";
import VueImg from "src/assets/images/vue.jpg";
import {useParams} from "react-router-dom";
import { freeSet } from '@coreui/icons'
import CIcon from "@coreui/icons-react";

function Items({props}) {
    const [items, setItems] = useState([])

    const getItems = () => {
        const mock = [{},{},{},{},{},{},{},{},{},{},{},{},]
        setItems(mock)
    }

    useEffect(() => {
        getItems()
    }, []);

    return (
        <>
            <CRow>
                {
                    items.map((it, index) => (
                        <CCol xs={3} key={index}>
                            <CCard className="mb-4">
                                <CCardBody>
                                    <CCarousel transition="crossfade" interval={2000}>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={ReactImg} alt="slide 1"/>
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={AngularImg} alt="slide 2"/>
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img className="d-block w-100" src={VueImg} alt="slide 3"/>
                                        </CCarouselItem>
                                    </CCarousel>
                                    <CCardText>
                                        상품{index}
                                    </CCardText>
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
