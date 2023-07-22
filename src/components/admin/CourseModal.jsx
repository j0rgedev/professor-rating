import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {newCourseSchema} from "../../setup/config/newCourseSchema.js";
import {createCourse, updateCourse, deleteCourse} from "../../setup/api/courses.js";
import {useMutation, useQueryClient} from "react-query";
import toast from "react-hot-toast";

const CourseModal = ({modalState, modalStateSetter, _course, isFromRow}) => {
	let toastId = null;
	const query = useQueryClient();

	const {isLoading: isUpdateMutationLoading ,mutateAsync: updateMutation} = useMutation({
		mutationFn: updateCourse,
		onSuccess: () => {
			toast.success("Curso actualizado", {id: toastId});
			query.prefetchQuery(['courses'])
		},
		onError: () => {
			toast.error("Error al actualizar", {id: toastId});
		},
	})

	const onSubmit = async (values) => {
		if (isFromRow) {
			const body = {
				code: values.code,
				name: values.name,
			};
			toastId = toast.loading("Actualizando curso...");
			const data = {
				id: values._id,
				course: body,
			}
			await updateMutation(data)
		  modalStateSetter(false);
		}
	};

	if (!modalState) return null

	return (
		<Backdrop>
			<ModalContainer
				initial={{opacity: 0, scale: 0.8}}
				animate={{opacity: 1, scale: 1}}
				exit={{opacity: 0, scale: 0.8}}
				transition={{duration: 0.3}}
			>
				<ModalHeader>Nuevo Curso</ModalHeader>
				<Formik
					initialValues={_course}
					validationSchema={newCourseSchema}
					onSubmit={onSubmit}
				>
					{({values, errors, touched, handleChange, handleBlur}) => (
						<CustomForm>
							<ModalContent>
								<InputWrapper>
									<Input
										type="text"
										placeholder="Codigo"
										name={"code"}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.code}
										className={touched.code && errors.code ? "error" : null}
									/>
									{touched.code && errors.code && <p>{errors.code}</p>}
								</InputWrapper>
								<InputWrapper>
									<Input
										type="text"
										placeholder="Nombre"
										name={"name"}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
										className={touched.name && errors.name ? "error" : null}
									/>
									{touched.name && errors.name && <p>{errors.name}</p>}
								</InputWrapper>
							</ModalContent>
							<ModalFooter>
								<StyledButton
									main={false}
									type={"button"}
									onClick={() => {
										modalStateSetter(false);
									}}
								>
									Cancelar
								</StyledButton>
								<StyledButton main={true} type={"submit"} disabled={isUpdateMutationLoading}>
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
  max-height: 200px;
	height: 100%;
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
	height: 100%;
`;


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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

const Input = styled(Field)`
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 4px;
  outline: none;

  &.error {
    border-bottom: 1px solid #ff0000;
  }
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
