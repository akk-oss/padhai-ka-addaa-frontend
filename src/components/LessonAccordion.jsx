import { Accordion } from "react-bootstrap";

function LessonAccordion() {

    return (

        <Accordion defaultActiveKey="0" flush>

            <Accordion.Item eventKey="0">

                <Accordion.Header>

                    <div className="w-100 d-flex justify-content-between">

                        <span>

                            <b>01</b> Introduction

                        </span>

                        <span>

                            5 Lectures

                        </span>

                    </div>

                </Accordion.Header>

                <Accordion.Body>

                    <div className="lesson-item">

                        <span>○ What is Data Structure?</span>

                        <span>15:20</span>

                    </div>

                    <div className="lesson-item">

                        <span>○ Why Data Structure is important?</span>

                        <span>10:45</span>

                    </div>

                    <div className="lesson-item">

                        <span>○ Time & Space Complexity</span>

                        <span>16:30</span>

                    </div>

                    <div className="lesson-item">

                        <span>○ Asymptotic Notations</span>

                        <span>20:15</span>

                    </div>

                    <div className="lesson-item">

                        <span>○ Practice Questions</span>

                        <span>16:00</span>

                    </div>

                </Accordion.Body>

            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>02 Arrays (8 Lectures)</Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>03 Linked List (7 Lectures)</Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>04 Stack (6 Lectures)</Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>05 Queue (6 Lectures)</Accordion.Header>
            </Accordion.Item>

        </Accordion>

    );

}

export default LessonAccordion;