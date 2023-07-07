import {TeacherRow} from "../../components/TeacherRow.jsx";
import styled from "styled-components";
import {useQuery} from "react-query";
import {getTeachers} from "../../setup/api/teachers.js";

export function TeacherList() {

	const {data: teachers, isLoading: areTeachersLoading} = useQuery({
		queryKey: ["teachers"],
		queryFn: async () => {
			return await getTeachers();
		}
	})

	return (
		<>
			<Title>Mostrando profesores para: </Title>
			<Teachers>
				{areTeachersLoading ? <p>Cargando...</p> : teachers.map(teacher => <TeacherRow key={teacher.id} teacher={teacher}/>)}
			</Teachers>
		</>
	)
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