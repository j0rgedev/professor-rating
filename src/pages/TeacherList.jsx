import {TeacherRow} from "../components/TeacherRow.jsx";
import styled from "styled-components";

export function TeacherList() {
	return (
		<>
			<Title>Mostrando profesores para: </Title>
			<Teachers>
				<TeacherRow/>
				<TeacherRow/>
				<TeacherRow/>
				<TeacherRow/>
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