import styled from "styled-components";
import {motion} from "framer-motion";
import {useContext} from "react";
import {TeacherModalContext} from "../../setup/config/TeacherModalContext.jsx";

export function DeleteModal({title, description}) {

	const {setDeleteModalInfo} = useContext(TeacherModalContext)

	const handleClose = () => {
		setDeleteModalInfo(null)
	}

	return (
		<Background>
			<Container
				initial={{opacity: 0, scale: 0.8}}
				animate={{opacity: 1, scale: 1}}
				exit={{opacity: 0, scale: 0.8}}
				transition={{duration: 0.3}}
			>
				<MainInfo>
					<h2>{title}</h2>
					<p>{description}</p>
				</MainInfo>
				<Buttons>
					<Button isMain={false} onClick={handleClose}>Cancelar</Button>
					<Button isMain={true}>Eliminar</Button>
				</Buttons>
			</Container>
		</Background>
	)
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`

const Container = styled(motion.div)`
  width: 85%;
  max-width: 650px;
  height: 35%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  align-items: center;
  width: 100%;
  height: 75%;
  padding: 2rem 3rem;
  background-color: #1E1E1E;
  
  h2, p {
    width: 100%;
    text-align: left;
    height: 25%;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;
  padding: .9rem 3rem;
  background-color: #2F2F2F;
`

const Button = styled.button`
  width: 160px;
  height: 100%;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color .5s;
  background-color: ${props => props.isMain ? "#FF0000" : "#2F2F2F"};
  
  &:hover {
	background-color: ${props => props.isMain ? "#7a1616" : "#3F3F3F"};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccc !important;
    color: #666 !important;
  }
`