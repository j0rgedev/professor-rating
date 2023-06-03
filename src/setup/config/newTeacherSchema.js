import * as yup from 'yup';

export const newTeacherSchema = yup.object().shape({
    names: yup.string().required('Campo requerido'),
	lastnames: yup.string().required('Campo requerido'),
	courses: yup.array().required('Campo requerido').min(1, 'Debe seleccionar al menos un curso'),
});