import axios from "axios";

function CourseCard({ title, teacher, image }) {

  const handlePayment = async () => {

    try {

      // Backend se order create karo
      const { data } = await axios.post(
        "https://padhaikaaddaa.online/api/payment/create-order"
      );

      const options = {
        key: "rzp_live_TAHPsInsNF3Z68", // Apni Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: "Padhai Ka Addaa",
        description: title,
        image: image,
        order_id: data.id,

        handler: async function (response) {

          alert("Payment Successful");

          // Enrollment API Call
          await axios.post(
            "https://padhaikaaddaa.online/api/enrollment/enroll",
            {},
            {
              headers: {
                Authorization:
                  "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          alert("Enrollment Successful");

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

      const paymentObject = new window.Razorpay(options);

      paymentObject.open();

    } catch (error) {

      console.log(error);

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