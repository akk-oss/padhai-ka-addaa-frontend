import api from "./api";

export const getProgress = async (userId, courseId) => {

    const response = await api.get(
        `/progress/user/${userId}/course/${courseId}`
    );

    return response.data;
};

export const completeLesson = async (progressId) => {

    const response = await api.put(`/progress/${progressId}`);

    return response.data;
};