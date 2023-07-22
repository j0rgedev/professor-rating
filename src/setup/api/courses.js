import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5010/api",
});

const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

const getCoursesByName = async (name) => {
  const response = await api.get(`/courses/name/${name}`);
  return response.data;
};

const createCourse = async (course) => {
  const response = await api.post("/courses", course);
  return response.data;
};

const updateCourse = async (id, course) => {
  const response = await api.put(`/courses/${id}`, course);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

const addTeacherToCourse = async (courseId, teacherId) => {
  const response = await api.put(`/courses/${courseId}/teachers/add`, { teacherId });
  return response.data;
};

const removeTeacherFromCourse = async (courseId, teacherId) => {
  const response = await api.put(`/courses/${courseId}/teachers/remove`, { teacherId });
  return response.data;
};

const getCoursesByTeacher = async (teacherId) => {
  const response = await api.get(`/courses/teacher/${teacherId}`);
  return response.data;
};

const getTeachersByCourse = async (courseId) => {
  const response = await api.get(`/courses/${courseId}/teachers`);
  return response.data;
};

export {
  getCourses,
  getCourseById,
  getCoursesByName,
  createCourse,
  updateCourse,
  deleteCourse,
  addTeacherToCourse,
  removeTeacherFromCourse,
  getCoursesByTeacher,
  getTeachersByCourse,
};
