import { useState } from "react";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import TeacherModal from "../../components/admin/TeacherModal.jsx";

const TeachersRow = ({ number, teacher, isActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(teacher);
  return (
    <Row>
      <TeacherModal
        modalState={isModalOpen}
        modalStateSetter={setIsModalOpen}
        _teacher={teacher}
        isFromRow={true}
      />
      <Number>{number}</Number>
      <ImageAndName>
        <TeacherImage src={teacher.picture} alt="img" />
        <TeacherName>{`${teacher.lastName}, ${teacher.firstName}`}</TeacherName>
      </ImageAndName>
      <Courses>
        {teacher.courses.slice(0, 2).map((course, index) => (
          <div key={index}>
            <Course>{course.name}</Course>
          </div>
        ))}
        {teacher.courses.length > 3 && <Course>+{teacher.courses.length - 2}</Course>}
      </Courses>
      <Verification isActive={isActive}>{isActive ? "Verificado" : "Sin verificar"}</Verification>
      <Actions>
        <DeleteButton
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <AiFillEdit />
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
  background-color: ${({ isActive }) => (isActive ? "#143FF6" : "transparent")};
  border: ${({ isActive }) => (isActive ? "none" : "1px solid #ffffff")};
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
