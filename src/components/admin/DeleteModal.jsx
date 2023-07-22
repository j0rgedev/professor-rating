import styled from "styled-components";
import {motion} from "framer-motion";
import {deleteTeacher} from "../../setup/api/teachers.js";
import {useMutation, useQueryClient} from "react-query";
import toast from "react-hot-toast";

export function DeleteModal({modalState, modalStateSetter, data, title, description}) {

	const query = useQueryClient();

	if(!modalState) return null

	let toastId = null;

	const {mutateAsync} = useMutation({
		mutationFn: deleteTeacher,
		onSuccess: () => {
			toast.success("Profesor eliminado con éxito", {id: toastId})
			modalStateSetter(false)
			query.prefetchQuery(['teachers'])
		},
		onError: () => {
			toast.error("Error al eliminar profesor", {id: toastId})
		}
	})

	const handleDelete = async () => {
		toastId = toast.loading("Eliminando profesor...")
		await mutateAsync(data._id)
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
					<Button isMain={false} onClick={() => {modalStateSetter(false)}}>Cancelar</Button>
					<Button isMain={true} onClick={handleDelete}>Eliminar</Button>
				</Buttons>
			</Container>
		</Background>
	)
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled(motion.div)`
  width: 85%;
  max-width: 550px;
  height: 30%;
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
  height: 28%;
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