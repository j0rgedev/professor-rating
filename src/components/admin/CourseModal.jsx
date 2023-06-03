import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newCourseSchema } from "../../setup/config/newCourseSchema.js";
import { createCourse, updateCourse, deleteCourse } from "../../setup/api/courses.js";

const CourseModal = ({ modalState, modalStateSetter, _course, isFromRow }) => {
  const [course, setCourse] = useState({ code: _course.code, name: _course.name });

  const handleCodeChange = (event) => {
    setCourse({
      ...course,
      code: event.target.value,
    });
  };

  const handleNameChange = (event) => {
    setCourse({
      ...course,
      name: event.target.value,
    });
  };

  const onSubmit = async () => {
    console.log(course);

    if (isFromRow) {
      await updateCourse(_course._id, course);
      modalStateSetter(false);
      return;
    }

    await createCourse(course);
    setCourse({ code: "", name: "" });
    modalStateSetter(false);
  };

  const onDeletion = async () => {
    console.log(_course._id);
    await deleteCourse(_course._id);
    modalStateSetter(false);
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
        <ModalHeader>Nuevo Curso</ModalHeader>
        <Formik
          initialValues={course}
          enableReinitialize={true}
          validationSchema={newCourseSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <CustomForm>
              <ModalContent>
                <Input
                  type="text"
                  placeholder="Codigo"
                  name={"code"}
                  onChange={handleCodeChange}
                  value={values.code}
                />
                {touched.code && errors.code && <ErrorMessage name="code" />}
                <Input
                  type="text"
                  placeholder="Nombre"
                  name={"name"}
                  onChange={handleNameChange}
                  value={values.name}
                />
                {touched.name && errors.name && <ErrorMessage name="name" />}
              </ModalContent>
              <ModalFooter>
                <StyledButton
                  main={false}
                  type={"button"}
                  onClick={() => {
                    if (!isFromRow) {
                      setCourse({ code: "", name: "" });
                    }
                    modalStateSetter(false);
                  }}
                >
                  Cancelar
                </StyledButton>
                {isFromRow ? (
                  <StyledButton
                    main={true}
                    type={"button"}
                    onClick={() => {
                      onDeletion();
                    }}
                  >
                    Eliminar
                  </StyledButton>
                ) : null}
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
  min-height: 220px;
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

  input {
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

const CourseCourses = styled.div`
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

export default CourseModal;
