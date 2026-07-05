import api from "./api";

export const getQuestionsByQuiz = async (quizId) => {

    const response = await api.get(`/questions/quiz/${quizId}`);

    return response.data;

};