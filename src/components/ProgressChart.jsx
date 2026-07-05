import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ProgressChart() {

    const data = {

        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets: [

            {

                label: "Learning Progress",

                data: [10, 25, 40, 50, 70, 80, 100],

                borderColor: "#4F46E5",

                backgroundColor: "#6366F1",

                tension: 0.4

            }

        ]

    };

    return (

        <div className="card shadow-lg border-0 rounded-4 p-4">

            <h4 className="mb-3">

                📈 Weekly Progress

            </h4>

            <Line data={data} />

        </div>

    );

}

export default ProgressChart;