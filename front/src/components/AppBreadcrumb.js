import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem ,  CFormInput,CButton} from '@coreui/react'
// import { CIcon } from '@coreui/icons-react';
// import {cilSearch}  from '@coreui/icons';

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  // 검색
  const [search , setSearch] = useState("");
  const onChange = (e) =>{
    setSearch(e.target.value);
  }


  return (
    <CBreadcrumb className="my-0">
      {/*<CBreadcrumbItem href="/">Home</CBreadcrumbItem>*/}
      {/*{breadcrumbs.map((breadcrumb, index) => {*/}
      {/*  return (*/}
      {/*    <CBreadcrumbItem*/}
      {/*      {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}*/}
      {/*      key={index}*/}
      {/*    >*/}
      {/*      {breadcrumb.name}*/}
      {/*    </CBreadcrumbItem>*/}
      {/*  )*/}
      {/*})}*/}
    
      

      <CFormInput type="search" placeholder="    검색어를 입력하세요" aria-label="default input example" style={{width:'78vw' , marginRight: '18px'}}/>
      {/* <CButton as="as" type="button" color="primary" shape="rounded-pill" value="Input"/> */}
      <CButton type="submit" color="primary" shape="rounded-pill" style={{width:'90px'}}> 
      {/* <CIcon icon={cilSearch} size="xl" style={{'--ci-primary-color': 'yellow'}} /> */}
      Search 
      </CButton>
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
