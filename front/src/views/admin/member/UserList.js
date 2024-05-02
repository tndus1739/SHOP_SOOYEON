import React, { useEffect, useState } from 'react';
import AdminMemberService from 'src/services/AdminMemberService';
import MemberList from "./MemberList";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [searchType, setSearchType] = useState('');
  const [keyword, setKeyword] = useState('');

  // fetchUserList 함수 정의
  const fetchUserList = async () => {
    try {
      const response = await AdminMemberService.getAdminUserList();
      setUserList(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  const searchUser = async (type, keyword) => {
    try {
      const response = await AdminMemberService.searchAdminUser(type, keyword);
      setUserList(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error searching user:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    try {
      await searchUser(searchType, keyword);
    } catch (error) {
      console.error('Error searching user:', error);
    }
  };

  return (
    <MemberList
      title="회원 목록"
      fetchFunction={fetchUserList}
      searchFunction={searchUser}
      list={userList}
      detailLink="/admin/member/userDetail"
    >
      <div style={{ marginBottom: '25px', marginTop: '40px' }}>
        <form className="d-flex justify-content-end" onSubmit={handleSearch}>
          <select
            id="searchType"
            name="searchType"
            aria-label="Default select example"
            onChange={(e) => setSearchType(e.target.value)}
            style={{ width: 'fit-content' }}
            className="me-2"
          >
            <option value="name">이름</option>
            <option value="nickname">닉네임</option>
            <option value="email">이메일</option>
            <option value="phone">전화번호</option>
          </select>
          <input
            type="text"
            id="keyword"
            name="keyword"
            className="me-2"
            placeholder="검색어를 입력하세요"
            style={{ width: '200px' }}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            검색
          </button>
        </form>
      </div>
    </MemberList>
  );
}

export default UserList;
