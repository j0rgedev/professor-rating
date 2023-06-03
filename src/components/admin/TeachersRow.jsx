import styled from 'styled-components';
import {BsFillTrashFill, BsFillEyeFill} from 'react-icons/bs';
import {useContext} from "react";
import {TeacherModalContext} from "../../setup/config/TeacherModalContext.jsx";

const TeachersRow = ({ number, teacherImage, teacherName, courses, isActive }) => {

	const {setIsModalOpen, setDeleteModalInfo} = useContext(TeacherModalContext)
	const displayedCourses = courses.slice(0, 3);

	return (
		<Row>
			<Number>{number}</Number>
			<ImageAndName>
				<TeacherImage src={teacherImage} alt={teacherName} />
				<TeacherName>{teacherName}</TeacherName>
			</ImageAndName>
			<Courses>
				{displayedCourses.map((course, index) => (
					<Course key={index}>{course}</Course>
				))}
				{courses.length > 4 && <Course>+{courses.length - 3}</Course>}
			</Courses>
			<Verification isActive={isActive}>{isActive ? 'Verificado' : 'Sin verificar'}</Verification>
			<Actions>
				<DetailsButton>
					<BsFillEyeFill/>
				</DetailsButton>
				<DeleteButton onClick={() => {setDeleteModalInfo({
					title: "Eliminar profesor",
					message: "¿Estás seguro que deseas eliminar a este profesor? Esta acción no se puede deshacer.",
				})}}>
					<BsFillTrashFill />
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
  width: 30px;
  text-align: center;
`;

const ImageAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 300px;
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
  background-color: ${({ isActive }) => (isActive ? '#143FF6' : 'transparent')};
  border: ${({ isActive }) => (isActive ? 'none' : '1px solid #ffffff')};
`;

const Actions = styled.div`
  display: flex;
  gap: 14px;
  height: 100%;
`;

const DetailsButton = styled.button`
  font-size: 16px;
  height: 100%;
  width: 38px;
  background-color: #c59538;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a1762a;
  }
`;

const DeleteButton = styled.button`
  font-size: 16px;
  background-color: #ce2525;
  color: white;
  height: 100%;
  width: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #811c1c;
  }
`;

export default TeachersRow;
