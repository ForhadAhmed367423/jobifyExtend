import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyJobsRow from "./MyJobsRow";

const MyJob = () => {
    const {user}=useContext(AuthContext);
    const [myJobs,SetMyJobs]=useState([]);
    const url=`https://jobify-extend-server.vercel.app/jobs?email=${user.email}`;
    console.log(url)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            SetMyJobs(data)
        })
    },[url])

    return (
        <div>
            {
                myJobs.map(jobs=><MyJobsRow
                key={jobs._id}
                jobs={jobs}
                >
                </MyJobsRow>)
            }
        </div>
    );
};

export default MyJob;