import {RiUserLine, RiLockPasswordLine} from 'react-icons/ri';
import styled from 'styled-components';

export function Login() {
	return (
		<Container>
			<Title>
				<h1>Inicio de sesión</h1>
			</Title>
			<Form>
				<IconTextField>
					<TextField type="text" placeholder="Usuario"/>
					<RiUserLine/>
				</IconTextField>
				<IconTextField>
					<TextField type="password" placeholder="Contraseña"/>
					<RiLockPasswordLine/>
				</IconTextField>
				<Button type="submit" value="Iniciar sesión"/>
			</Form>
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #0F0F0F;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 100%;

  h1 {
    font-size: 62px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 90%;
  max-width: 700px;
`;

const TextField = styled.input`
  width: 100%;
  height: 70px;
  margin: 10px;
  padding: 1rem 3rem;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  transition: background-color 0.2s ease-in-out;

  &:focus {
    background-color: #2a3038;
  }
`;

const IconTextField = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    color: white;
    font-size: 20px;
  }
`;


const Button = styled.input`
  width: 100%;
  height: 60px;
  padding: 1rem;
  font-size: 24px;
  border-radius: 5px;
  border: none;
  background-color: #0066FF;
  color: white;
  font-weight: bold;
  margin-top: 4rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0052cc;
  }
`;
