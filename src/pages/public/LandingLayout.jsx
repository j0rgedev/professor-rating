import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import {TbGridDots} from "react-icons/tb";
import {Button} from "../../components/public/Button.jsx";
import {Footer} from "../../components/public/Footer.jsx";
export function LandingLayout() {
	return (
		<Container>
			<CustomHeader>
				<TbGridDots fontSize={'40px'} cursor={'pointer'}/>
				<Button text={'Mi cuenta'} width={'120px'} height={'40px'} fontSize={'16px'}/>
			</CustomHeader>
			<Main>
				<Outlet/>
			</Main>
			<Footer/>
		</Container>
	)
}

const CustomHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    box-sizing: border-box;
    max-width: 100%;
`

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #202024;
`

const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 100px;
`