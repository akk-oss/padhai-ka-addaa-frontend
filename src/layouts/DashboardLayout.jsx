import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../assets/css/dashboardLayout.css";

function DashboardLayout({ children }) {

    const [showSidebar, setShowSidebar] = useState(false);

    return (

        <>
            <Navbar
                toggleSidebar={() => setShowSidebar(!showSidebar)}
            />

            <div className="dashboard-container">

                <Sidebar show={showSidebar} />

                <main className="dashboard-content">

                    {children}

                </main>

            </div>

        </>

    );

}

export default DashboardLayout;