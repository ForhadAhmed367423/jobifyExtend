import AppliedCard from "./AppliedCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AppliedJob = () => {
    const {user}=useContext(AuthContext);
    const [aplied,SetAplied]=useState([]);
    const url=`https://jobify-extend-server.vercel.app/appliedJob?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            SetAplied(data);
        })
    },[url]);
    return (
        <div>
            <h1 className=" font text-center text-3xl font-bold mb-4">Your applied Jobs...</h1>
            <div className="min-h-screen grid lg:grid-cols-3 lg:gap-10 md:grid-cols-1 md:gap-4">
            {
                aplied.map(job=> 
                    <AppliedCard
                    key={job._id}
                    job={job}

                    ></AppliedCard>
                    )
            }
        </div>
        </div>
    );
};

export default AppliedJob;