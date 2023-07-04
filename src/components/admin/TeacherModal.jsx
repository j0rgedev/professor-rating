import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { BsPatchPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newTeacherSchema } from "../../setup/config/newTeacherSchema.js";
import { getCourses, addTeacherToCourse } from "../../setup/api/courses.js";
import { createTeacher, updateTeacher } from "../../setup/api/teachers.js";
import {useQuery} from "react-query";
import CustomSelect from "./CustomSelect.jsx";

const TeacherModal = ({ modalState, modalStateSetter, _teacher, isFromRow = false }) => {
  const [teacher, setTeacher] = useState({
    firstName: _teacher.firstName,
    lastName: _teacher.lastName,
    courses: _teacher.courses ? _teacher.courses.map((obj) => obj.name) : []
  });
  const [coursesOptions, setCoursesOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");

  useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    onSuccess: (data) => {
      setCoursesOptions(data.map((course) => ({
        label: course.name,
        value: course._id
      })));
    }
  });

  const onSubmit = async (values) => {
    console.log(teacher);
    console.log(values)
  };

  if (!modalState) {
    return null;
  }

  return (
    <Backdrop>
      <ModalContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <ModalHeader>{isFromRow ? "Actualizar" : "Nuevo"} Profesor</ModalHeader>
        <Formik
          initialValues={teacher}
          validationSchema={newTeacherSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting, handleBlur, handleChange }) => (
            <CustomForm>
              <ModalContent>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder="Nombres"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={touched.firstName && errors.firstName ? "error" : null}
                  />
                  {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder="Apellidos"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={touched.lastName && errors.lastName ? "error" : null}
                  />
                  {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                </InputWrapper>
                <InputWrapper isLast={true}>
                  {
                    teacher && (
                      <Field
                        name={"courses"}
                        initialValues={values.courses}
                        options={coursesOptions}
                        component={CustomSelect}
                        placeholder={"Seleccionar curso"}
                        isMulti={true}
                        className={touched.courses && errors.courses ? "error" : null}
                      />
                    )
                  }
                </InputWrapper>
              </ModalContent>
              {/*<TeacherCourses>*/}
              {/*  {teacher.courses.map((course, index) => (*/}
              {/*    <CourseContainer key={index}>*/}
              {/*      <CourseInfo>{course}</CourseInfo>*/}
              {/*      <RemoveCourseButton*/}
              {/*        onClick={() => {*/}
              {/*          handleRemoveCourse(index);*/}
              {/*        }}*/}
              {/*      >*/}
              {/*        <AiOutlineClose />*/}
              {/*      </RemoveCourseButton>*/}
              {/*    </CourseContainer>*/}
              {/*  ))}*/}
              {/*</TeacherCourses>*/}
              <ModalFooter>
                <StyledButton
                  main={false}
                  type={"button"}
                  onClick={() => {
                    setTeacher({ firstName: "", lastName: "", courses: []});
                    modalStateSetter(false);
                  }}
                >
                  Cancelar
                </StyledButton>
                <StyledButton main={true} type={"submit"} disabled={isSubmitting}>
                  {isFromRow ? "Actualizar" : "Agregar"}
                </StyledButton>
              </ModalFooter>
            </CustomForm>
          )}
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: ${(props) => (props.isLast ? "1" : "0")};

  input {
    width: 220px;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: #ff0000;
    font-size: 14px;
  }
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
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
  margin-bottom: 4px;
  outline: none;
  
  &.error {
    border-bottom: 1px solid #ff0000;
  }
`;

const CourseInfo = styled.div`
  flex-grow: 1;
  color: #ffffff;
  margin-right: 8px;
  font-size: 0.8rem;
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
  background-color: ${(props) => (props.main ? "#143FF6" : "transparent")};
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 160px;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.main ? "#0d2de0" : "rgba(119,119,119,0.3)")};
  }

  &:disabled {
    background-color: rgba(119, 119, 119, 0.3);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;

export default TeacherModal;
