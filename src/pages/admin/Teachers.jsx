import { useEffect, useState } from "react";
import styled from "styled-components";
import CustomButton from "../../components/admin/CustomButton.jsx";
import SearchInput from "../../components/admin/SearchInput.jsx";
import TeachersRow from "../../components/admin/TeachersRow.jsx";
import TeacherModal from "../../components/admin/TeacherModal.jsx";
import { getTeachers } from "../../setup/api/teachers.js";
import { getCoursesByTeacher } from "../../setup/api/courses.js";
import {useQuery} from "react-query";

export function Teachers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacherToSearch, setTeacherToSearch] = useState("");

  const {data: teachers, isLoading: areTeachersLoading} = useQuery({
    queryKey: ['teachers'],
    queryFn: getTeachers,
  })

  const {data: teachersCourses, isLoading: areTeachersCoursesLoading} = useQuery({
    queryKey: ['teachersCourses'],
    queryFn: () => Promise.all(teachers.map(async (teacher) => {
      return await getCoursesByTeacher(teacher._id);
    })),
    enabled: !!teachers,
  })

  return (
    <>
      <TeacherModal
        modalState={isModalOpen}
        modalStateSetter={setIsModalOpen}
        _teacher={{ firstName: "", lastName: "" }}
      />
      <HeaderSection>
        <Left>
          <h1>Administrar Profesores</h1>
          <SearchInput
            placeholder={"Buscar profesor"}
            onChange={(e) => setTeacherToSearch(e.target.value)}
          />
        </Left>
        <CustomButton
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Agregar profesor
        </CustomButton>
      </HeaderSection>
      <TeachersTable>
        {areTeachersLoading || areTeachersCoursesLoading ? (
          <h1>Cargando...</h1>
        ) : (
          teachers.map((teacher, index) => {
            return (
              <TeachersRow
                number={index + 1}
                key={teacher._id}
                teacher={{...teacher, courses: teachersCourses[index]}}
                isActive={false}
              />
            );
          })
        )}
      </TeachersTable>
    </>
  );
}

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  margin-bottom: 30px;

  button {
    min-width: 200px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  height: 100%;
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

const TeachersTable = styled.div`
  flex: 1;
`;
