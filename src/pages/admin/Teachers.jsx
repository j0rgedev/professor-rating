import styled from 'styled-components'
import CustomButton from "../../components/admin/CustomButton.jsx";
import SearchInput from "../../components/admin/SearchInput.jsx";
import TeachersRow from "../../components/admin/TeachersRow.jsx";
import AddTeacher from "../../components/admin/TeacherModal.jsx";
import {useContext, useState} from "react";
import {TeacherModalContext} from "../../setup/config/TeacherModalContext.jsx";
import {useQuery} from "react-query";
import {getTeachers} from "../../setup/api/allTeachers.js";
export function Teachers() {

	const {setIsModalOpen, setIsDeleteModalOpen} = useContext(TeacherModalContext)

	const {isLoading, data} = useQuery('teachers', getTeachers, {
		onError: (error) => {
			console.log(error)
		}
	})

	return (
		<>
			<HeaderSection>
				<Left>
					<h1>Manejar Profesores</h1>
					<SearchInput placeholder={'Buscar profesor'}/>
				</Left>
				<CustomButton onClick={() => {setIsModalOpen(true)}}>Agregar profesor</CustomButton>
			</HeaderSection>
			<TeachersTable>
				{
					!isLoading && data?.map((teacher, index) => {
						return (
							<TeachersRow
								number={index+1}
								teacherName={teacher.nombres+' '+teacher.apellidos}
								teacherImage={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
								courses={teacher.cursos}
								isActive={false}
								setIsDeleteModalOpen={setIsDeleteModalOpen}
							/>
						)
					})
				}
			</TeachersTable>
		</>
	)
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
`

const Left = styled.div`
	display: flex;
	align-items: center;
  	gap: 60px;
  	height: 100%;
	h1 {
		font-size: 24px;
		font-weight: 500;
	}
`

const TeachersTable = styled.div`
    flex: 1;
`