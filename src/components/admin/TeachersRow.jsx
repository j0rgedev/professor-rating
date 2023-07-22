import {useState} from "react";
import styled from "styled-components";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import TeacherModal from "../../components/admin/TeacherModal.jsx";
import {DeleteModal} from "./DeleteModal.jsx";

const TeachersRow = ({number, teacher, isActive}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [editedTeacher, setEditedTeacher] = useState(null);

	return (
		<Row>
			{
				isModalOpen && (
					<TeacherModal
						modalState={isModalOpen}
						modalStateSetter={setIsModalOpen}
						_teacher={editedTeacher}
						isFromRow={true}
					/>
				)
			}
			{
				isDeleteModalOpen && (
					<DeleteModal
						modalState={isDeleteModalOpen}
						modalStateSetter={setIsDeleteModalOpen}
						data={teacher}
						title="Eliminar profesor"
						description="¿Estás seguro de que deseas eliminar a este profesor?"
					/>
				)
			}
			<Number>{number}</Number>
			<ImageAndName>
				<TeacherImage src={teacher.picture} alt="img"/>
				<TeacherName>{`${teacher.lastName}, ${teacher.firstName}`}</TeacherName>
			</ImageAndName>
			<Courses>
				{teacher.courses.length === 0 ? (
					<Course>Sin cursos</Course>
				) : (
					<>
						{teacher.courses.slice(0, 2).map((course, index) => (
							<div key={index}>
								<Course>{course.name}</Course>
							</div>
						))}
						{teacher.courses.length > 3 && (
							<Course>+{teacher.courses.length - 2}</Course>
						)}
					</>
				)}
			</Courses>
			<Verification isActive={isActive}>{isActive ? "Verificado" : "Sin verificar"}</Verification>
			<Actions>
				<EditButton
					onClick={() => {
						setIsModalOpen(true);
						setEditedTeacher(teacher);
					}}
				>
					<AiFillEdit/>
				</EditButton>
				<DeleteButton onClick={() => {
					setIsDeleteModalOpen(true);
					setEditedTeacher(teacher);
				}}>
					<AiFillDelete/>
				</DeleteButton>
			</Actions>
		</Row>
	);
};

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid #ccc;
  gap: 38px;
`;

const Number = styled.div`
  width: 15px;
  text-align: center;
`;

const ImageAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 400px;
`;

const TeacherImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const TeacherName = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Courses = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 6px;
  height: 100%;
  width: 300px;
`;

const Course = styled.div`
  max-width: 200px;
	overflow: hidden;
	white-space: nowrap;
  padding: 4px 8px;
  height: 100%;
  background-color: #202224;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Verification = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${({isActive}) => (isActive ? "#143FF6" : "transparent")};
  border: ${({isActive}) => (isActive ? "none" : "1px solid #ffffff")};
`;

const Actions = styled.div`
  display: flex;
  gap: 14px;
  height: 100%;
`;

const ActionButton = styled.button`
	font-size: 16px;
	color: white;
	height: 100%;
	width: 38px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
`

const EditButton = styled(ActionButton)`
  background-color: #c59538;

  &:hover {
    background-color: #8c6a28;
  }
`;

const DeleteButton = styled(ActionButton)`
	background-color: #c53838;

	&:hover {
		background-color: #8c2828;
	}
`;

export default TeachersRow;
