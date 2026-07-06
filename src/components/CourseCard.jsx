import axios from "axios";

function CourseCard({ title, teacher, image }) {

  const handlePayment = async () => {

    try {

      console.log("Creating Razorpay Order...");

      // Backend se order create karo
      const response = await axios.post(
        "https://padhaikaaddaa.online/api/payment/create-order"
      );

      console.log("Full Response:", response);
      console.log("Order Response:", response.data);

      const data = response.data;

      const options = {
        key: "rzp_live_TAHPsInsNF3Z68",
        amount: data.amount,
        currency: data.currency,
        name: "Padhai Ka Addaa",
        description: title,
        image: image,
        order_id: data.id,

        handler: async function (response) {

          console.log("Payment Success:", response);

          alert("Payment Successful");

          try {

            const enrollResponse = await axios.post(
              "https://padhaikaaddaa.online/api/enrollment/enroll",
              {},
              {
                headers: {
                  Authorization:
                    "Bearer " + localStorage.getItem("token"),
                },
              }
            );

            console.log("Enrollment:", enrollResponse.data);

            alert("Enrollment Successful");

          } catch (err) {

            console.log("Enrollment Error:", err);

            alert("Enrollment Failed");

          }

        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        theme: {
          color: "#3399cc",
        },
      };

      console.log("Razorpay Options:", options);

      if (!window.Razorpay) {
        alert("Razorpay SDK Not Loaded");
        return;
      }

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response) {

        console.log("Payment Failed:", response);

        alert("Payment Failed");

      });

      paymentObject.open();

    } catch (error) {

      console.log("Create Order Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      alert("Payment Failed");

    }

  };

  return (
    <div className="card shadow-sm border-0 rounded-4">

      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5>{title}</h5>

        <p className="text-muted">{teacher}</p>

        <button
          className="btn btn-primary w-100"
          onClick={handlePayment}
        >
          Enroll Now
        </button>

      </div>

    </div>
  );
}

export default CourseCard;