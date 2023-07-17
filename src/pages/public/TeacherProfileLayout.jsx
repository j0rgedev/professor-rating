import styled from 'styled-components'
import {Outlet} from "react-router-dom";
export function TeacherProfileLayout() {
	return (
		<Container>
			<TeacherInfo>
				<ImageWrapper>
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
					<Verification isVerified={true}>Verificado</Verification>
				</ImageWrapper>
				<h1>Nombres y apellidos</h1>
			</TeacherInfo>
			<MainInfo>
				<Outlet/>
			</MainInfo>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
  width: 100%;
  height: 100%;
	
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 30px;
  }
`;

const TeacherInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 26px;
  width: 100%;
  height: 30%;

  h1 {
    font-size: clamp(26px, 2.5vw, 36px);
    font-weight: 600;
    text-align: center;
  }
	
	@media (min-width: 768px) {
		width: fit-content;
		height: 100%;
		margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  img {
    width: 50%;
    max-width: 300px;
    border-radius: 50%;
  }
`;

const Verification = styled.div`
  width: 50%;
  max-width: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 55%;
  font-size: clamp(8px, 1.5vw, 12px);
  background-color: ${(props) => (props.isVerified ? '#EFFBF7' : '#FFF6ED')};
  color: ${(props) => (props.isVerified ? '#4ABA91' : '#FF8600')};
  border: ${(props) => (props.isVerified ? '1px solid #4ABA91' : '1px solid #FF8600')};
  padding: 1px 8px;
  border-radius: 6px;
`;

const MainInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;