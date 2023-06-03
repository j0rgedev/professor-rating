import { useEffect, useState } from "react";
import styled from "styled-components";
import CustomButton from "../../components/admin/CustomButton.jsx";
import SearchInput from "../../components/admin/SearchInput.jsx";
import TeachersRow from "../../components/admin/TeachersRow.jsx";
import TeacherModal from "../../components/admin/TeacherModal.jsx";
import { getTeachers } from "../../setup/api/teachers.js";
import { getCoursesByTeacher } from "../../setup/api/courses.js";

export function Teachers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [teacherToSearch, setTeacherToSearch] = useState("");
  const [teachersCourses, setTeachersCourses] = useState([]);

  useEffect(() => {
    if (teacherToSearch === "") {
      getTeachers().then(async (data) => {
        await Promise.all(
          data.map(async (teacher) => {
            const courses = await getCoursesByTeacher(teacher._id);
            return courses;
          })
        ).then((results) => {
          setTeachersCourses(results);
          setTeachers(data);
        });
      });
      return;
    }
    getTeachersByName(teacherToSearch).then(async (data) => {
      await Promise.all(
        data.map(async (teacher) => {
          const courses = await getCoursesByTeacher(teacher._id);
          return courses;
        })
      ).then((results) => {
        setTeachersCourses(results);
        setTeachers(data);
      });
    });
  }, [isModalOpen, teacherToSearch]);

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
        {teachers.map((teacher, index) => {
          return (
            <div key={teacher._id}>
              <TeachersRow
                number={index + 1}
                teacher={{ ...teacher, courses: teachersCourses[index] }}
                isActive={false}
              />
            </div>
          );
        })}
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
