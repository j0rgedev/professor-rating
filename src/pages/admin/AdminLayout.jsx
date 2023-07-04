import React from "react";
import styled from "styled-components";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineUser, AiOutlineBook, AiOutlineComment } from "react-icons/ai";
import {Toaster} from "react-hot-toast";

export function AdminLayout() {
  const location = useLocation();

  const isActiveTab = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <Container>
      <Toaster toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}/>
      <Aside>
        <h1>Admin</h1>
        <ul>
          <StyledListItem active={isActiveTab("/admin/profesores")}>
            <StyledIcon as={AiOutlineUser} />
            <StyledLink to="/admin/profesores">Profesores</StyledLink>
          </StyledListItem>
          <StyledListItem active={isActiveTab("/admin/cursos")}>
            <StyledIcon as={AiOutlineBook} />
            <StyledLink to="/admin/cursos">Cursos</StyledLink>
          </StyledListItem>
          <StyledListItem active={isActiveTab("/admin/comentarios")}>
            <StyledIcon as={AiOutlineComment} />
            <StyledLink to="/admin/comentarios">Comentarios</StyledLink>
          </StyledListItem>
        </ul>
      </Aside>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #0f0f0f;
  padding: 1rem;
`;

const Aside = styled.aside`
  width: 170px;
  color: #ffffff;

  h1 {
    font-size: 22px;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 1.5rem;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "#3d3d3d" : "initial")};

  &:hover {
    background-color: #3d3d3d;
  }
`;

const StyledIcon = styled.div`
  margin-right: 8px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
