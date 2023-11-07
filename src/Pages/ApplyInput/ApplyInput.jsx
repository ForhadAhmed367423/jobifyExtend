import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const ApplyInput = () => {
    const {user}= useContext(AuthContext);
    const jobs = useLoaderData();
    const {name}=jobs;
    
    const handleJobs = (event) => {
        event.preventDefault();
    
            const form = event.target;
            console.log(form);
            const userName = form.userName.value;
            const email = form.email.value;
            const link = form.link.value;
            const jobsData = { name,userName,email,link };
            console.log(jobsData);
    
            fetch("http://localhost:5000/appliedJob",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jobsData),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added successfully.",
                        icon: "success",
                        confirmButtonText: "cool",
                    });
                }
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
        };
    return (
        <div className="min-h-screen bg-base-100 ">
            <form onSubmit={handleJobs}>
            <input type="text" name="userName" defaultValue={user?.displayName} readOnly  />
            <input type="email" name="email" id="" defaultValue={user?.email} readOnly />
            <input type="text" name="link" id="" required placeholder="Enter your resume link" />
            <input type="submit" value="Submit Application" />
            </form>
        </div>
    );
};

export default ApplyInput;