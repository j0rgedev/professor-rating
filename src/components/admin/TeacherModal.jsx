import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {AiOutlineClose } from 'react-icons/ai';
import {BsPatchPlusFill} from "react-icons/bs";
import {TeacherModalContext} from "../../setup/config/TeacherModalContext.jsx";
import {motion} from "framer-motion";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {newTeacherSchema} from "../../setup/config/newTeacherSchema.js";

const TeacherModal = () => {

	const {setIsModalOpen} = useContext(TeacherModalContext)

	const [teacherInfo, setTeacherInfo] = useState({
		names: '',
		lastnames: '',
		courses: []
	})
	const [selectedCourse, setSelectedCourse] = useState('');

	const handleAddCourse = () => {
		setTeacherInfo({
			...teacherInfo,
			courses: [...teacherInfo.courses, selectedCourse]
		})
		setSelectedCourse('');
	};

	const handleCourseChange = (event) => {
		setSelectedCourse(event.target.value);
	};

	const handleNameChange = (event) => {
		setTeacherInfo({
			...teacherInfo,
			names: event.target.value
		})
	};

	const handleLastnameChange = (event) => {
		setTeacherInfo({
			...teacherInfo,
			lastnames: event.target.value
		})
	};

	const handleRemoveCourse = (index) => {
		const updatedCourses = [...teacherInfo.courses];
		updatedCourses.splice(index, 1);
		setTeacherInfo({
			...teacherInfo,
			courses: updatedCourses
		})
	};

	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<Backdrop>
			<ModalContainer
				initial={{opacity: 0, scale: 0.8}}
				animate={{opacity: 1, scale: 1}}
				exit={{opacity: 0, scale: 0.8}}
				transition={{duration: 0.3}}
			>
				<ModalHeader>Nuevo Profesor</ModalHeader>
				<Formik
					initialValues={teacherInfo}
					enableReinitialize={true}
					validationSchema={newTeacherSchema}
					onSubmit={onSubmit}
				>
					{
						({errors, touched, isSubmitting}) => (
							<CustomForm>
								<ModalContent>
									<Input type="text" placeholder="Nombres" name={'names'} onChange={handleNameChange}/>
									{touched.names && errors.names && <ErrorMessage name="names"/>}
									<Input type="text" placeholder="Apellidos" name="lastnames" onChange={handleLastnameChange}/>
									{touched.names && errors.lastnames && <ErrorMessage name="lastnames" />}
									<CoursesOptions>
										<CourseSelect as={'select'} value={selectedCourse} onChange={handleCourseChange} name={'courses'}>
											<option value="" disabled={true}>Seleccionar curso</option>
											<option value="Redes y Comunicaciones 1">Redes y Comunicaciones 1</option>
											<option value="Redes y Comunicaciones 3">Redes y Comunicaciones 3</option>
											<option value="Introducción a las TIC">Introducción a las TIC</option>
										</CourseSelect>
										<AddCourseButton onClick={() => {
											handleAddCourse();
										}} disabled={!selectedCourse}>
											<BsPatchPlusFill/>
										</AddCourseButton>
									</CoursesOptions>
									{touched.courses && errors.courses && <ErrorMessage name="courses"/>}
								</ModalContent>
								<TeacherCourses>
									{teacherInfo.courses.map((course, index) => (
										<CourseContainer key={index}>
											<CourseInfo>{course}</CourseInfo>
											<RemoveCourseButton onClick={() => {
												handleRemoveCourse(index);
											}}>
												<AiOutlineClose />
											</RemoveCourseButton>
										</CourseContainer>
									))}
								</TeacherCourses>
								<ModalFooter>
									<StyledButton main={false} type={'button'} onClick={()=>{setIsModalOpen(false)}}>Cancelar</StyledButton>
									<StyledButton main={true} type={'submit'} disabled={isSubmitting}>Agregar</StyledButton>
								</ModalFooter>
							</CustomForm>
						)
					}
				</Formik>
			</ModalContainer>
		</Backdrop>
	);
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  width: 550px;
  min-height: 320px;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  
  input{
	width: 220px;
    font-size: 18px;
  }
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CoursesOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

const TeacherCourses = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: start;
  margin: 24px 0;
`;

const Input = styled(Field)`
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 4px;
  margin-bottom: 10px;
  outline: none;
`;

const CourseSelect = styled(Field)`
  border: none;
  width: 220px;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 4px;
  font-size: 18px;
  
  option {
	color: #000000;
  }
`;

const CourseContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  min-width: 100px;
  padding: 8px 12px;
  border-radius: 20px;
  max-width: 220px;
`;

const CourseInfo = styled.div`
  flex-grow: 1;
  color: #ffffff;
  margin-right: 8px;
  font-size: .8rem;
`;

const RemoveCourseButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const AddCourseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 4px;
  font-size: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 20px;
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.main ? '#143FF6' : 'transparent')};
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 160px;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;
  
  &:hover{
  	background-color: ${(props) => (props.main ? '#0d2de0' : 'rgba(119,119,119,0.3)')};
  }
  
  &:disabled{
  	background-color: rgba(119,119,119,0.3);
    color: rgba(255,255,255,0.3);
  	cursor: not-allowed;
  }
`;


export default TeacherModal;
