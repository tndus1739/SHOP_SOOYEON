import axios from 'axios';

const SHOP_ADMIN_MEMBER_BASE_API_URL = "http://localhost:3011/admin"

class AdminMemberService {

  getAdminMember(id) {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/' + id);
  }

  //USER

  //USER 목록
  getAdminUserList() {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/userList');
  }
  //USER 수정
  updateAdminUser(id, req) {
    return axios.put(SHOP_ADMIN_MEMBER_BASE_API_URL + '/userDetail/' + id, req);
  }
  //USER 검색
  searchAdminUser(searchType, keyword) {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/userList/search', {
      params: {
        searchType: searchType,
        keyword: keyword
      }
    });
  }


  //ADMIN

  //ADMIN 목록
  getAdminAdminList() {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/adminList');
  }
  //ADMIN 수정
  updateAdminAdmin(id, req) {
    return axios.put(SHOP_ADMIN_MEMBER_BASE_API_URL + '/adminDetail/' + id, req);
  }
  //ADMIN 검색
  searchAdminAdmin(searchType, keyword) {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/adminList/search', {
      params: {
        searchType: searchType,
        keyword: keyword
      }
    });
  }



  //UNREGISTER

  //UNREGISTER 목록
  getAdminUnregisterList() {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/unregisterList');
  }
  //UNREGISTER 수정
  updateAdminUnregister(id, req) {
    return axios.put(SHOP_ADMIN_MEMBER_BASE_API_URL + '/unregisterDetail/' + id, req);
  }
  //UNREGISTER 검색
  searchAdminUnregister(searchType, keyword) {
    return axios.get(SHOP_ADMIN_MEMBER_BASE_API_URL + '/unregisterList/search', {
      params: {
        searchType: searchType,
        keyword: keyword
      }
    });
  }

}

export default new AdminMemberService();
