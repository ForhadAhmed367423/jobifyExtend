import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div className="min-h-screen">
            {
                appliedJobs.map(jobs=> <h1
                key={jobs._id}
                >{jobs.name}</h1>)
            }
        </div>
    );
};

export default AppliedJob;