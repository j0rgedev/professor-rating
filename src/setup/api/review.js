import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5010/api",
});

const getReviews = async () => {
  const response = await api.get("/reviews");
  return response.data;
};

const getReviewById = async (id) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};

const getReviewsByCourse = async (courseId) => {
  const response = await api.get(`/reviews/course/${courseId}`);
  return response.data;
};

const getReviewsByTeacher = async (teacherId) => {
  const response = await api.get(`/reviews/teacher/${teacherId}`);
  return response.data;
};

const getReviewsByTeacherAndCourse = async (teacherId, courseId) => {
  const response = await api.get(`/reviews/teacher/${teacherId}/course/${courseId}`);
  return response.data;
};

const createReview = async (review) => {
  const response = await api.post("/reviews", review);
  return response.data;
};

const updateReview = async (id, review) => {
  const response = await api.put(`/reviews/${id}`, review);
  return response.data;
};

const deleteReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};

export {
  getReviews,
  getReviewById,
  getReviewsByCourse,
  getReviewsByTeacher,
  getReviewsByTeacherAndCourse,
  createReview,
  updateReview,
  deleteReview,
};
