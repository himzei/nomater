import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-left: 20px;
  font-size: 28px;
  font-weight: 600;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;
const ItemMenu = styled.span`
  padding: 30px 20px;
  font-size: 20px;
`;
const AuthMenu = styled.div`
  padding: 30px 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
`;

const Navigation = ({ userObj }) => (
  <nav>
    <MenuContainer>
      <LogoContainer>
        <Link to="/">아이두 화상영어</Link>
      </LogoContainer>
      <ItemContainer>
        <ItemMenu>
          <Link to="/profile">화상영어소개</Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/profile">학습안내</Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/profile">수강신청</Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/profile">학습지원센터</Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/profile">커뮤니티</Link>
        </ItemMenu>
      </ItemContainer>
      <AuthContainer>
        <AuthMenu>
          {userObj ? (
            <Link to="/profile">{userObj.displayName}'s Profile</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </AuthMenu>

        <AuthMenu>
          <Link to="/profile">회원가입</Link>
        </AuthMenu>
      </AuthContainer>
    </MenuContainer>
  </nav>
);

export default Navigation;
