import styled from "styled-components";
import CoursesRow from "../../components/admin/CoursesRow.jsx";
import CustomButton from "../../components/admin/CustomButton.jsx";
import SearchInput from "../../components/admin/SearchInput.jsx";
import CourseModal from "../../components/admin/CourseModal.jsx";
import {useState} from "react";
import {
	getCourses,
	getCoursesByName,
	createCourse,
	updateCourse,
	deleteCourse,
	addTeacherToCourse,
	removeTeacherFromCourse,
	getCoursesByTeacher,
} from "../../setup/api/courses.js";
import {useEffect} from "react";
import {useQuery} from "react-query";

export function Courses() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [courseToSearch, setCourseToSearch] = useState("");

	const {data: courses, isLoading: areCoursesLoading} = useQuery({
		queryKey: ["courses"],
		queryFn: getCourses
	})

	// useEffect(() => {
	//   if (courseToSearch === "") {
	//     getCourses().then((data) => {
	//       setCourses(data);
	//     });
	//     return;
	//   }
	//   getCoursesByName(courseToSearch).then((data) => {
	//     setCourses(data);
	//   });
	// }, [courseToSearch]);

	return (
		<>
			<CourseModal
				modalState={isModalOpen}
				modalStateSetter={setIsModalOpen}
				_course={{code: "", name: ""}}
			/>
			<HeaderSection>
				<Left>
					<h1>Administrar Cursos</h1>
					<SearchInput
						placeholder={"Buscar curso"}
						onChange={(e) => setCourseToSearch(e.target.value)}
					/>
				</Left>
				<CustomButton
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					Agregar curso
				</CustomButton>
			</HeaderSection>
			<CoursesTable>
				{
					areCoursesLoading ? <h1>Cargando...</h1> :
						courses.map((course, index) => {
							return (
								<div key={course._id}>
									<CoursesRow number={index + 1} course={course}/>
								</div>
							);
						})
				}
			</CoursesTable>
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

const CoursesTable = styled.div`
  flex: 1;
`;
