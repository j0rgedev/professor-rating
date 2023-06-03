import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5010/api",
});

const getTeachers = async () => {
  const response = await api.get("/teachers");
  return response.data;
};

const getTeacherById = async (id) => {
  const response = await api.get(`/teachers/${id}`);
  return response.data;
};

const createTeacher = async (teacher) => {
  const response = await api.post("/teachers", teacher);
  return response.data;
};

const updateTeacher = async (id, teacher) => {
  const response = await api.put(`/teachers/${id}`, teacher);
  return response.data;
};

const deleteTeacher = async (id) => {
  const response = await api.delete(`/teachers/${id}`);
  return response.data;
};

export { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };
