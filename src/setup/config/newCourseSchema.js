import * as yup from "yup";

export const newCourseSchema = yup.object().shape({
  code: yup.string().required("Campo requerido"),
  name: yup.string().required("Campo requerido"),
});
