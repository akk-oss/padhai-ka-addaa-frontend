import api from "./api";

export const getLessonsByCourse = async (courseId) => {

    const response = await api.get(`/lessons/course/${courseId}`);

    return response.data;

};