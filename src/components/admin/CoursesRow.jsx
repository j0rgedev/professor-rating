import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import CourseModal from "../../components/admin/CourseModal.jsx";
import { useState } from "react";

const CoursesRow = ({ number, course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Row>
      <CourseModal
        modalState={isModalOpen}
        modalStateSetter={setIsModalOpen}
        _course={course}
        isFromRow={true}
      />
      <Number>{number}</Number>
      <CourseCode>{course.code}</CourseCode>
      <CourseName>{course.name}</CourseName>
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
  width: 30px;
  text-align: center;
`;

const CourseCode = styled.div`
  width: 100px;
  text-align: center;
`;

const CourseName = styled.div`
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Actions = styled.div`
  display: flex;
  gap: 14px;
  height: 100%;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  background-color: #c59538;
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
    background-color: #a1762a;
  }
`;

export default CoursesRow;
