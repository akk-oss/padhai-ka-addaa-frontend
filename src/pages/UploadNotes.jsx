import { useEffect, useState } from "react";

import { getCourses } from "../services/courseService";
import { uploadFile, uploadNote } from "../services/noteService";
import DashboardLayout from "../layouts/DashboardLayout";

function UploadNotes() {

    const [courses, setCourses] = useState([]);

    const [file, setFile] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        courseId: ""
    });

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {

        try {

            const response = await getCourses();

            setCourses(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // Upload File

            const uploadData = new FormData();

            uploadData.append("file", file);

            const fileResponse = await uploadFile(uploadData);

            // Save Note

            const note = {

                ...formData,

                fileName: fileResponse.fileName,

                fileUrl: fileResponse.fileUrl

            };

            await uploadNote(note);

            alert("Note Uploaded Successfully");

        } catch (error) {

            console.log(error);

            alert("Upload Failed");

        }

    };

    return (

    <DashboardLayout>

        <div className="container-fluid">

            <div className="card shadow p-4">

                <h2 className="mb-4">
                    Upload Notes
                </h2>

                <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label>Title</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Description</label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    name="description"
                                    onChange={handleChange}
                                    required
                                ></textarea>

                            </div>

                            <div className="mb-3">

                                <label>Course</label>

                                <select
                                    className="form-select"
                                    name="courseId"
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Course
                                    </option>

                                    {

                                        courses.map(course => (

                                            <option
                                                key={course.id}
                                                value={course.id}
                                            >

                                                {course.title}

                                            </option>

                                        ))

                                    }

                                </select>

                            </div>

                            <div className="mb-3">

                                <label>PDF File</label>

                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    required
                                />

                            </div>

                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Upload Notes
                            </button>

                        </form>

            </div>

        </div>

    </DashboardLayout>

);

}

export default UploadNotes;