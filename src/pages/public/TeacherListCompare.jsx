import { TeacherRow } from "../../components/public/TeacherRow.jsx";
import styled from "styled-components";
import { useParams } from "react-router";
import { useQuery } from "react-query";

import { getTeachersByCourse } from "../../setup/api/courses.js";

export function TeacherListCompare() {
  const { id } = useParams();

  const { data: teachers, isLoading: areTeachersLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      return await getTeachersByCourse(id);
    },
  });

  return (
    <>
      <Title>Mostrando profesores para: </Title>
      <Teachers>
        {areTeachersLoading ? (
          <p>Cargando...</p>
        ) : (
          teachers.map((teacher) => <TeacherRow key={teacher._id} teacher={teacher} />)
        )}
      </Teachers>
    </>
  );
}

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Teachers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  place-items: center;
`;
