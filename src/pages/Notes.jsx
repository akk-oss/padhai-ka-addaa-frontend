import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getAllNotes } from "../services/noteService";
import "../assets/css/notes.css";

function Notes() {

    const [notes, setNotes] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {

        try {

            const response = await getAllNotes();

            setNotes(Array.isArray(response) ? response : []);

        } catch (error) {

            console.log(error);

            setNotes([]);

        }

    };

    return (

        <>

            <Navbar
                toggleSidebar={() => setShowSidebar(!showSidebar)}
            />

            <div className="d-flex">

                <Sidebar show={showSidebar} />

                <div className="notes-page flex-grow-1">

                    <h2 className="notes-title">
                        📄 Study Notes
                    </h2>

                    <div className="row">

                        {notes.map((note) => (

                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                key={note.id}
                            >

                                <div className="note-card">

                                    <div className="note-icon">
                                        📄
                                    </div>

                                    <h4>{note.title}</h4>

                                    <p>{note.description}</p>

                                    <div className="mt-3">

                                        <a
                                            href={`https://padhai-ka-addaa.onrender.com${note.fileUrl}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-primary w-100"
                                        >
                                            Download Notes
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </>

    );

}

export default Notes;