import api from "./api";

// Get All Quizzes
export const getAllQuizzes = async () => {

    const response = await api.get("/quizzes");

    return response.data;

};

// Quiz By Course
export const getQuizByCourse = async (courseId) => {

    const response = await api.get(`/quizzes/course/${courseId}`);

    return response.data;

};

// Quiz By Id
export const getQuizById = async (quizId) => {

    const response = await api.get(`/quizzes/${quizId}`);

    return response.data;

};