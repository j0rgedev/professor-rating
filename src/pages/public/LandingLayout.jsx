import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
import { Button } from "../../components/public/Button.jsx";
import { Footer } from "../../components/public/Footer.jsx";
import { FeaturesModal } from "../../components/public/FeaturesModal.jsx";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export function LandingLayout() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <FeaturesModal openModal={openModal} openModalSetter={setOpenModal} />
      <CustomHeader>
        <DotIcon fontSize={"40px"} cursor={"pointer"} onClick={() => setOpenModal(!openModal)} />
        <Sections>
          <Section href={"/"}>🏠 Inicio</Section>
          <Section href={"/profesores"}>🧑‍🏫 Profesores</Section>
          <Section href={"/profesores/comparacion"}>🔍 Comparación de profesores</Section>
        </Sections>
        <Button text={"Mi cuenta"} width={"120px"} height={"40px"} fontSize={"16px"} />
      </CustomHeader>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "rgba(40,40,40,0.8)",
            color: "#fff",
          },
        }}
      />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

const CustomHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 100%;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #202024;
`;

const DotIcon = styled(TbGridDots)`
  color: #fff;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Sections = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 50%;
  }
`;

const Section = styled.a`
  color: #a7a7a7;
  font-size: clamp(14px, 1.5vw, 16px);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: radial-gradient(circle at 0.2% 1.8%, rgb(255, 90, 8) 0%, rgb(88, 0, 0) 100.2%);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &::after {
      width: 100%;
    }
  }
`;

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 100px;
`;
