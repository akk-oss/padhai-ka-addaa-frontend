import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "../assets/css/profile.css";

function Profile() {
  const [user, setUser] = useState({});
const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setUser({
      id: localStorage.getItem("userId"),
      fullName: localStorage.getItem("fullName"),
      email: localStorage.getItem("email"),
      role: localStorage.getItem("role"),
      photo: localStorage.getItem("photo"),
    });
  }, []);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setUser({
      ...user,
      photo: imageUrl,
    });

    localStorage.setItem("photo", imageUrl);
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-top">
            <img
              src={user.photo ? user.photo : "/images/user.png"}
              alt="Profile"
              className="profile-image"
            />

            <input
              type="file"
              id="photo"
              hidden
              accept="image/*"
              onChange={handlePhoto}
            />

            <label htmlFor="photo" className="change-photo-btn">
              Change Photo
            </label>
          </div>

          <div className="profile-details">

    {
        isEditing ? (

            <>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={user.fullName || ""}
                    placeholder="Full Name"
                    onChange={(e)=>
                        setUser({
                            ...user,
                            fullName:e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    value={user.mobile || ""}
                    placeholder="Mobile Number"
                    onChange={(e)=>
                        setUser({
                            ...user,
                            mobile:e.target.value
                        })
                    }
                />

                <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="Bio"
                    value={user.bio || ""}
                    onChange={(e)=>
                        setUser({
                            ...user,
                            bio:e.target.value
                        })
                    }
                />

                <button
                    className="btn btn-success me-2"
                    onClick={()=>{
                        localStorage.setItem("fullName",user.fullName);
                        setIsEditing(false);
                        alert("Profile Updated Successfully");
                    }}
                >
                    Save
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={()=>setIsEditing(false)}
                >
                    Cancel
                </button>

            </>

        ) : (

            <>

                <h2>{user.fullName}</h2>

                <p>{user.email}</p>

                <button
                    className="btn btn-primary"
                    onClick={()=>setIsEditing(true)}
                >
                    Edit Profile
                </button>

            </>

        )
    }

</div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
