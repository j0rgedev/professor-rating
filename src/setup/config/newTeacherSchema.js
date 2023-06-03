import * as yup from "yup";

export const newTeacherSchema = yup.object().shape({
  firstName: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  // picture: yup.string().required("Campo requerido"),
});
