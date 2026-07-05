import api from "./api";

export const enrollCourse = async (userId, courseId) => {

    const response = await api.post("/enrollments", {
        userId: userId,
        courseId: courseId
    });

    return response.data;
};