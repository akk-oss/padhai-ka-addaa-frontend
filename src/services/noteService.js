import api from "./api";

/* ================= GET ALL NOTES ================= */

export const getAllNotes = async () => {

    const response = await api.get("/notes");

    return response.data;

};

/* ================= GET NOTES BY COURSE ================= */

export const getNotesByCourse = async (courseId) => {

    const response = await api.get(`/notes/course/${courseId}`);

    return response.data;

};

/* ================= UPLOAD FILE ================= */

export const uploadFile = async (formData) => {

    const response = await api.post(
        "/files/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;

};

/* ================= SAVE NOTE ================= */

export const uploadNote = async (noteData) => {

    const response = await api.post("/notes", noteData);

    return response.data;

};