import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ApplyInput = () => {
    const {user}= useContext(AuthContext);
    const jobs = useLoaderData();
    useEffect(()=>{
        document.title="Jobify | Apply"
    },[])
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
    
            fetch("https://jobify-extend-server.vercel.app/appliedJob",{
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
            <h1 className="text-3xl font font-bold px-10 mt-10 text-center">Apply your job here</h1>
            <div className="bg-[#F6EEE1] flex justify-center mt-10 container mx-auto rounded-[15px] py-[60px] px-[100px]">
            <form className="" onSubmit={handleJobs}>
            <div>
            <div className="mb-5">
                <h2 className="font font-medium">Users Name</h2>
            <input className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none" type="text" name="userName" defaultValue={user?.displayName} readOnly  />
            </div>
            <div className="mb-5">
            <h2 className="font font-medium">Users Email</h2>

            <input className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none" type="email" name="email" id="" defaultValue={user?.email} readOnly />
            </div>
            <div className="mb-5">
            <h2 className="font font-medium">Users Resume</h2>

            <input className="rounded-[10px] w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none" type="text" name="link" id="" required placeholder="Enter your resume link" />
            </div>
            <input className="px-8 py-4 rounded-[30px] bg-[#1376e0] text-white font-semibold text-[18px]" type="submit" value="Submit Application" />
            </div>
            </form>
            </div>
        </div>
    );
};

export default ApplyInput;