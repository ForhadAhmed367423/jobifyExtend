import { useLoaderData } from "react-router-dom";
import AppliedCard from "./AppliedCard";

const AppliedJob = () => {
    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div className="min-h-screen">
            {
                appliedJobs.map(jobs=> 
                    <AppliedCard
                    key={jobs._id}
                    jobs={jobs}

                    ></AppliedCard>
                    )
            }
        </div>
    );
};

export default AppliedJob;